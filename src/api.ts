import fetch from 'cross-fetch';
import { parseOptions } from './utils';
import { ErrorResponse } from './types';
import { BASE_URL_V3 } from './common/constants';

export class Api {
  constructor(private accessToken: string) {
    this.accessToken = accessToken;
  }

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  private requestTimestamps: number[] = [];

  async get<T>(path: string, options?: Record<string, any>, rateLimit?: number): Promise<T> {
    if (rateLimit) {
      await this.enforceRateLimit(rateLimit);
    }

    const params = parseOptions(options);
    const response = await fetch(`${BASE_URL_V3}${path}?${params}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });

    if (!response.ok) {
      return Promise.reject((await response.json()) as ErrorResponse);
    }

    return (await response.json()) as T;
  }

  private async enforceRateLimit(rateLimit: number): Promise<void> {
    const now = Date.now();
    const oneSecondAgo = now - 1000;
    
    this.requestTimestamps = this.requestTimestamps.filter(timestamp => timestamp > oneSecondAgo);
    
    if (this.requestTimestamps.length >= rateLimit) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return this.enforceRateLimit(rateLimit);
    }
    
    this.requestTimestamps.push(now);
  }
}
