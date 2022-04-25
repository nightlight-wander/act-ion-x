import React from 'react';
import { useVideos } from '../../context/VideosContest';

const GenreSlider = () => {
  const { categories, setCategories } = useVideos();
  const { genre } = categories;
  return (
    <div>
      {/* {genre.map((genreItem) => {
        return <div>
          <button>{genreItem.genreName}</button>
        </div>
      })} */}
      clicked
    </div>
  )
}

export { GenreSlider };