import React from 'react';
import { Link } from 'react-router-dom';
import { useVideos } from '../../context/VideosContest';

import HomeStyles from "./BottomNav.module.css";

export function BottomNav() {
    const {categories,setCategory,setGenres,setSelectGenre,setIsGenres}=useVideos();

    const CatGenreHandler = (selectedCat) => {
        const genresArray = categories.reduce((curTotal, curObj) => {
          return curObj.category === categories[Number(selectedCat)].category ? curObj.genre : curTotal
        },[])
        setGenres(() => [...genresArray]);
        setSelectGenre(()=>[]);
        setCategory(()=>selectedCat);
        setIsGenres(false);
    }


  return (
    <nav className={`${HomeStyles.actionsCat} flex-center`}>
        <Link to="/">
        <button className={`${HomeStyles.actions} flex-col flex-vCenter`} >
          <span className="material-icons">
            restart_alt
          </span>
          <span className={`${HomeStyles.actionsName}`} >Home</span>
        </button>
        </Link>
        
        <Link to="/video-listing">
        <button className={`${HomeStyles.actions} flex-col flex-vCenter`} onClick={() => CatGenreHandler(0)}>
          <span className="material-icons">
            science
          </span>
          Sci-Code
        </button>
        </Link>

         <Link to="/video-listing">  
        <button className={`${HomeStyles.actions} flex-col flex-vCenter`} onClick={() => CatGenreHandler(1)}>
          <span className="material-icons">
            sports_soccer
          </span>
          Dynamics
        </button>
        </Link>
        
        <Link to="/video-listing">
        <button className={`${HomeStyles.actions} flex-col flex-vCenter`} onClick={() => CatGenreHandler(2)}>
          <span className="material-icons">
            emoji_nature
          </span>
          Soundscapes
        </button>
        </Link>
      </nav>

  );
}