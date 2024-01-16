export const UPCOMING_URL = "/movie/upcoming?language=en-US&page=1"
export const NEW_RELEASE_URL = "/movie/now_playing?language=en-US&page=1"
export const POPULAR_URL = '/movie/popular?language=en-US&page=1';
export const DETAILS_URL = (mode:string, movie_id:string)=>{ return `/${mode}/${movie_id}?language=en-US`}
export const VIDEO_URL = (mode:string, movie_id:string)=>{return `/${mode}/${movie_id}/videos`}
export const CAST_URL = (mode:string,movie_id:string)=>{return `/${mode}/${movie_id}/${mode === 'tv'?'aggregate_credits':"credits"}`}
export const M_RECOMENDATION_API = (mode:string,movie_id:string) => {return `/${mode}/${movie_id}/recommendations`}
export const COUNTY_URL = `/configuration/countries`
