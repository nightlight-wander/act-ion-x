import axios from "axios";

export const fetchVideosByCat = () => async (setCategories, setVideos, category, selectGenre, isGenres) => {
    try {
        const getCategories = axios.get("/api/categories");
        const getVideos = axios.get("/api/videos");
        const [{ data: { categories } }, { data: { videos } }] = await Promise.all([getCategories, getVideos]);
        const videosByCat = categories.map((catObj) => {
            return videos.filter((curVideoObj) => {
                return curVideoObj.category === catObj.category
            })
        })
        setCategories(() => categories);
        const videosByGenre = [...videosByCat[category]].filter(videoObj => selectGenre.includes(videoObj.genreName))
        isGenres === true ? setVideos(() => videosByGenre) : setVideos(() => videosByCat[category]);
    } catch (error) {
        console.log(error);
    }
}