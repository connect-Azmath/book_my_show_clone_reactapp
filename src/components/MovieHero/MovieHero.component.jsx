import React, { useContext } from 'react'
import { MovieContext } from '../../context/Movie.context'
import MovieInfo from './MovieInfo.Component';
 
const MovieHero = () => {

  const {movie, setMovie} = useContext(MovieContext);

  // const genres = movie.genres ?.map(({name}) => name).json(", ");
  
  return (
    <>
      <div>
        <div className='lg:hidden w-full'> 
          <img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" alt="Cover Poster" />
        </div>
        <div className='flex flex-col-reverse gap-3 px-4 my-3'>

        </div>
      </div>
    </>
  )
}

export default MovieHero