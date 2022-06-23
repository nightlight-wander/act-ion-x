import { useVideos } from '../../context/VideosContest';
import HomeStyles from '../../pages/Home/Home.module.css';
import { IS_GENRES_SET, SELECTED_GENRE} from '../../utilities/actions-types';

const GenreSlider = () => {
  const { videoStates:{genres,currentGenre},videoDispatch} = useVideos();

  const GenreHandler = (genreObj) => {
    const selectedGenre = genres.reduce((curTotal, curObj) => curObj.genreName === genreObj.genreName  ? genreObj.genreName : curTotal, "");
    videoDispatch({type:SELECTED_GENRE,payload:selectedGenre});
    videoDispatch({type:IS_GENRES_SET,payload:true});
  }


  return (
    <div className={`${HomeStyles.genreSlider} flex-center`}>
      {genres&&genres.map(genreObj => {
        return <button key={genreObj._id} className={`${HomeStyles.genreBtn} ${genreObj.genreName===currentGenre?HomeStyles.genreBtnActive:""}`} onClick={() => GenreHandler(genreObj)} >{genreObj.genreName} </button>
      })}
    </div> 
  ) 
}
 
export { GenreSlider };
