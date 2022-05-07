import { createContext, useContext, useReducer } from "react";
import { WATCH_LATER } from "../utilities/actions-types";
const VideoActionsContext = createContext();
const useVideoActions = () => useContext(VideoActionsContext);

const intialStates = {
    watchLater: [],
    history: [],
    likes: [],
    playlists: []
}

const videoActionsReducerFunc = (state, action) => {
    switch (action.type) {
        case WATCH_LATER:
            return {
                ...state,
                watchLater: action.payload
            }
        default:
            return state
    }
}

const VideoActionsProvider = ({ children }) => {
    const [videoActStates, videoActDispatch] = useReducer(videoActionsReducerFunc, intialStates);
    return (
        <VideoActionsContext.Provider value={{ videoActStates, videoActDispatch }}>
            {children}
        </VideoActionsContext.Provider>
    )
}

export { VideoActionsProvider, useVideoActions };