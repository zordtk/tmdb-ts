import { Api } from '../api';

export class BaseEndpoint {
  protected api: Api;

  constructor(protected readonly accessToken: string, protected readonly rateLimit?: number) {
    this.api = new Api(accessToken, rateLimit);
  }
}
