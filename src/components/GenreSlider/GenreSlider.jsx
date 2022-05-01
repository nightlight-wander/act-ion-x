import React from 'react';
import { useVideos } from '../../context/VideosContest';
import HomeStyles from '../../pages/Home/Home.module.css';

const GenreSlider = () => {
  const { genres, selectGenre, setSelectGenre,setIsGenres} = useVideos();
  const GenreHandler = (genreObj) => {
    const selectedGenres = genres.reduce((curTotal, curObj) => curObj.genreName === genreObj.genreName  ? genreObj.genreName : curTotal, "");
    setSelectGenre(()=>(!selectGenre.includes(selectedGenres))?[...selectGenre,selectedGenres]:selectGenre)
    setIsGenres(true);
  }

  return (
    <div className={`${HomeStyles.genreSlider} flex-center`}>
      {/* <div key={genreObj._id} className={`${HomeStyles.genreNamesWrapper}`}> */}
      {/* </div> */}

      {genres.map(genreObj => {
        // { genres && <button className={`${HomeStyles.genreBtn} ${HomeStyles.genreAllBtn}`}>All</button> }
        return <button key={genreObj._id} className={`${HomeStyles.genreBtn}`} onClick={() => GenreHandler(genreObj)}>{genreObj.genreName}</button>
      })}
    </div>
  )
}

export { GenreSlider };