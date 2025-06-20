import {
  AccountEndpoint,
  CertificationEndpoint,
  ChangeEndpoint,
  CreditsEndpoint,
  GenreEndpoint,
  MoviesEndpoint,
  SearchEndpoint,
  TvShowsEndpoint,
  ConfigurationEndpoint,
  DiscoverEndpoint,
  PeopleEndpoint,
  ReviewEndpoint,
  TrendingEndpoint,
  FindEndpoint,
  KeywordsEndpoint,
  CollectionsEndpoint,
  TvSeasonsEndpoint,
  TvEpisodesEndpoint,
  WatchProvidersEndpoint,
} from './endpoints';
import { CompaniesEndpoint } from './endpoints/companies';
import { NetworksEndpoint } from './endpoints/networks';

export class TMDB {
  private readonly accessToken: string;
  private readonly rateLimit?: number;

  constructor(accessToken: string, rateLimit?: number) {
    this.accessToken = accessToken;
    this.rateLimit = rateLimit;
  }

  get account(): AccountEndpoint {
    return new AccountEndpoint(this.accessToken, this.rateLimit);
  }

  get configuration(): ConfigurationEndpoint {
    return new ConfigurationEndpoint(this.accessToken, this.rateLimit);
  }

  get certifications(): CertificationEndpoint {
    return new CertificationEndpoint(this.accessToken, this.rateLimit);
  }

  get changes(): ChangeEndpoint {
    return new ChangeEndpoint(this.accessToken, this.rateLimit);
  }

  get credits(): CreditsEndpoint {
    return new CreditsEndpoint(this.accessToken, this.rateLimit);
  }

  get companies(): CompaniesEndpoint {
    return new CompaniesEndpoint(this.accessToken, this.rateLimit);
  }

  get networks(): NetworksEndpoint {
    return new NetworksEndpoint(this.accessToken, this.rateLimit);
  }

  get search(): SearchEndpoint {
    return new SearchEndpoint(this.accessToken, this.rateLimit);
  }

  get genres(): GenreEndpoint {
    return new GenreEndpoint(this.accessToken, this.rateLimit);
  }

  get movies(): MoviesEndpoint {
    return new MoviesEndpoint(this.accessToken, this.rateLimit);
  }

  get tvShows(): TvShowsEndpoint {
    return new TvShowsEndpoint(this.accessToken, this.rateLimit);
  }

  get tvEpisode(): TvEpisodesEndpoint {
    return new TvEpisodesEndpoint(this.accessToken, this.rateLimit);
  }

  get discover(): DiscoverEndpoint {
    return new DiscoverEndpoint(this.accessToken, this.rateLimit);
  }

  get people(): PeopleEndpoint {
    return new PeopleEndpoint(this.accessToken, this.rateLimit);
  }

  get review(): ReviewEndpoint {
    return new ReviewEndpoint(this.accessToken, this.rateLimit);
  }

  get trending(): TrendingEndpoint {
    return new TrendingEndpoint(this.accessToken, this.rateLimit);
  }

  get find(): FindEndpoint {
    return new FindEndpoint(this.accessToken, this.rateLimit);
  }

  get keywords(): KeywordsEndpoint {
    return new KeywordsEndpoint(this.accessToken, this.rateLimit);
  }

  get collections(): CollectionsEndpoint {
    return new CollectionsEndpoint(this.accessToken, this.rateLimit);
  }

  get tvSeasons(): TvSeasonsEndpoint {
    return new TvSeasonsEndpoint(this.accessToken, this.rateLimit);
  }

  get watchProviders(): WatchProvidersEndpoint {
    return new WatchProvidersEndpoint(this.accessToken, this.rateLimit);
  }
}
