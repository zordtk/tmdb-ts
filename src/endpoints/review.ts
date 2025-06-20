import { ReviewDetails } from '../types';
import { BaseEndpoint } from './base';

export class ReviewEndpoint extends BaseEndpoint {
  constructor(accessToken: string, rateLimit?: number) {
    super(accessToken, rateLimit);
  }

  async details(id: string): Promise<ReviewDetails> {
    return await this.api.get<ReviewDetails>(`/review/${id}`);
  }
}
