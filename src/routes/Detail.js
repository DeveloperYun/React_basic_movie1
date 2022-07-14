import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import Movie from "../components/Movie";


function Detail(){
    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`    
            )
        ).json()
        console.log(json)

        setMovies(json.data.movie)
        setLoading(false)
    };

    useEffect(()=>{
        getMovie()
    }, []);

    //movies

    return <div>
                {loading ? 
                    <h1>Loading...{movies.title}</h1> : 
                    <div>
                        <div>
                            <h1>
                                {movies.title} ({movies.year})
                            </h1>
                            <img src={movies.large_cover_image}></img>
                        </div>
                        <div>
                            <h2>
                                running time : {movies.runtime} min
                            </h2>
                            <h2>
                                ★ rating       : {movies.rating} /  ❤ like count : {movies.like_count} 
                            </h2>
                            <h2>
                                genres       : {movies.genres[0]}, {movies.genres[1]}
                            </h2>
                        </div>
                        <div>
                            <h2>description</h2>
                            <h3>
                                {movies.description_full}
                            </h3>
                        </div>
                        <div>
                            <h3>
                                <a
                                    href={movies.url}
                                    alt="Download link"
                                    target="_blank"
                                >
                                    downloads
                                </a>
                            </h3>
                        </div>
                    </div>
                }
            </div>
}

export default Detail;