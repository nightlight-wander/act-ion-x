import React from 'react';
import { useVideos } from '../../context/VideosContest';
import HomeStyles from '../../pages/Home/Home.module.css';
import { IS_GENRES_SET, SELECT_GENRES } from '../../utilities/actions-types';

const GenreSlider = () => {
  const { videoStates:{genres,selectGenre},videoDispatch} = useVideos();
  const GenreHandler = (genreObj) => {
    const selectedGenre = genres.reduce((curTotal, curObj) => curObj.genreName === genreObj.genreName  ? genreObj.genreName : curTotal, "");
    // console.log(selectedGenres);
    // (!selectGenre.includes(action.payload))?[...selectGenre,selectedGenres]:selectGenre
    (!selectGenre.includes(selectedGenre))?videoDispatch({type:SELECT_GENRES,payload:[...selectGenre,selectedGenre]}):videoDispatch({type:SELECT_GENRES,payload:selectGenre})
    // videoDispatch({type:SELECT_GENRES,payload:selectedGenre});
    videoDispatch({type:IS_GENRES_SET,payload:true});
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