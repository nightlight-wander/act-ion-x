import { createContext,useContext,useState} from "react";

const VideosContext=createContext();
const useVideos=()=>useContext(VideosContext);

const VideosProvider=({children})=>{
    const [categories,setCategories]=useState([]);
    const [genres,setGenres]=useState([]);
    const [selectGenre,setSelectGenre]=useState([]);
    const [category,setCategory]=useState("");
    const [videos,setVideos]=useState([]);
    // const [genres,setGenres]=useState([]);
    return (
        <VideosContext.Provider value={{categories,setCategories,genres,setGenres,category,setCategory,videos,setVideos,selectGenre,setSelectGenre}}>
            {children}
        </VideosContext.Provider>
    )
}

export {useVideos,VideosProvider};