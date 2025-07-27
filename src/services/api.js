const api_key = import.meta.env.VITE_API_KEY;
const base_url = import.meta.env.VITE_BASE_URL;

console.log(api_key);


export const getPopularMovies = async()=>{
    const response = await fetch(`${base_url}/movie/popular?api_key=${api_key}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async(query)=>{
    const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
};