import { createContext,useContext,useState} from "react";

const VideosContext=createContext();
const useVideos=()=>useContext(VideosContext);

const VideosProvider=({children})=>{
    const [categories,setCategories]=useState([]);
    const [genres,setGenres]=useState([]);
    const [selectGenre,setSelectGenre]=useState([]);
    const [category,setCategory]=useState(0);
    const [videos,setVideos]=useState([]);
    const [isGenres,setIsGenres]=useState(false);
    return (
        <VideosContext.Provider value={{categories,setCategories,genres,setGenres,category,setCategory,videos,setVideos,selectGenre,setSelectGenre,isGenres,setIsGenres}}>
            {children}
        </VideosContext.Provider>
    )
}

export {useVideos,VideosProvider};