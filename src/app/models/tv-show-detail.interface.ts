export interface Network {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface Season {
    air_date?: any;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path?: any;
    season_number: number;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface TvShowDetail {
    backdrop_path?: any;
    created_by: any[];
    episode_run_time: number[];
    first_air_date?: any;
    genres: any[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date?: any;
    last_episode_to_air?: any;
    name: string;
    next_episode_to_air?: any;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path?: any;
    production_companies: any[];
    production_countries: ProductionCountry[];
    seasons: Season[];
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}