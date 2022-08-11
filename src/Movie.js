
import React from "react";
import styles from "./Movie.module.css";
import { useState, useEffect } from "react";




function Movie() {
   const [loading, setLoading] = useState(true);
   const [movies, setMovies] = useState([]);
   const getMovies = async() =>{
    const json = await(await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year'
    )).json();
    setMovies(json.data.movies);
    setLoading(false);
    
   };

    useEffect(() => {
       getMovies()
    }, []);
    console.log(movies);
   
    return (


        <div>
           {loading ? (<h1>Loading....</h1>) : 
           (
           <div className={styles.m_wrap}>
               {movies.map(movie => (
                <div className={styles.m_wrap_in} key={movie.id}> 
                <img className={styles.m_img} src={movie.medium_cover_image} />
                <h2 className={styles.m_title}>{movie.title}</h2>
                <ul className={styles.m_ul}>
                    {movie.genres.map((g) => (
                        <li className={styles.m_li} key={g}>{g}</li>
                        ))}
                </ul>
                        <p className={styles.m_summary}>{movie.summary}</p>
                </div>
               ))}
               </div>
               )}
        </div>
    )
}

export default Movie;
