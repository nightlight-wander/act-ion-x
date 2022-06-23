import { Link } from "react-router-dom";
import { useVideos } from "../../context/VideosContest";
import {
  GET_GENRES,
  IS_GENRES_SET,
  SET_CATEGORY,
  SELECTED_GENRE,
} from "../../utilities/actions-types";

import HomeStyles from "./BottomNav.module.css";

export function BottomNav() {
  const {
    videoStates: { categories},
    videoDispatch,
  } = useVideos();

  const CatGenreHandler = (selectedCat) => {
    const genresArray = categories.reduce((curTotal, curObj) => {
      return curObj.category === categories[Number(selectedCat)].category
        ? curObj.genre
        : curTotal;
    }, []);
    
    videoDispatch({ type: SET_CATEGORY, payload: selectedCat });
    videoDispatch({ type: GET_GENRES, payload: genresArray });
    videoDispatch({ type: SELECTED_GENRE, payload: "" });
    videoDispatch({ type: IS_GENRES_SET, payload: false });
  };

  return (
    <nav className={`${HomeStyles.actionsCat} flex-center`}>
      <Link to="/">
        <button className={`${HomeStyles.actions} flex-col flex-vCenter`}>
          <span className="material-icons">restart_alt</span>
          <span className={`${HomeStyles.actionsName}`}>Home</span>
        </button>
      </Link>

      <Link to="/video-listing">
        <button
          className={`${HomeStyles.actions} flex-col flex-vCenter`}
          onClick={() => CatGenreHandler(0)}
        >
          <span className="material-icons">science</span>
          Sci-Code
        </button>
      </Link>

      <Link to="/video-listing">
        <button
          className={`${HomeStyles.actions} flex-col flex-vCenter`}
          onClick={() => CatGenreHandler(1)}
        >
          <span className="material-icons">sports_soccer</span>
          Dynamics
        </button>
      </Link>

      <Link to="/video-listing">
        <button
          className={`${HomeStyles.actions} flex-col flex-vCenter`}
          onClick={() => CatGenreHandler(2)}
        >
          <span className="material-icons">emoji_nature</span>
          Soundscapes
        </button>
      </Link>
    </nav>
  );
}
