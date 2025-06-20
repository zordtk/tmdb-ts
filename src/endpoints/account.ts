import { BaseEndpoint } from './base';
import { AccountDetails } from '../types/account';

export class AccountEndpoint extends BaseEndpoint {
  constructor(accessToken: string, rateLimit?: number) {
    super(accessToken, rateLimit);
  }

  async details(): Promise<AccountDetails> {
    return await this.api.get('/account');
  }
}
