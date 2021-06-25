export interface TvShowsResult {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
}

export interface RootTvShow {
    page: number;
    results: TvShowsResult[];
    total_pages: number;
    total_results: number;
}