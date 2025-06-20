import { LanguageOption } from '../types';
import { BaseEndpoint } from './base';

export interface Genres {
  genres: Array<{ id: number; name: string }>;
}

export class GenreEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string, protected readonly rateLimit?: number) {
    super(accessToken, rateLimit);
  }

  async movies(options?: LanguageOption): Promise<Genres> {
    return await this.api.get<Genres>('/genre/movie/list', options);
  }

  async tvShows(options?: LanguageOption): Promise<Genres> {
    return await this.api.get<Genres>('/genre/tv/list', options);
  }
}
