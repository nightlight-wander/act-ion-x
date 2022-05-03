import Mockman from "mockman-js";
import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import {Login} from "./pages/Auth/Login";
import {Signup} from "./pages/Auth/Signup";
import { VideoListing } from "./pages/VideoListing/VideoListing";
import {WatchLater} from "./pages/WatchLater/WatchLater";
import {History} from "./pages/History/History";
import {Playlists} from "./pages/Playlists/Playlists";
import {RequiresAuth} from "./components/RequiresAuth/RequiresAuth";
import { Profile } from "./pages/Profile/Profile";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/video-listing" element={<VideoListing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mock" element={<Mockman/>}/>
        <Route path="/playlists" element={<RequiresAuth><Playlists/></RequiresAuth>}/>
        <Route path="/watch-later" element={<RequiresAuth><WatchLater/></RequiresAuth>}/>
        <Route path="/history" element={<RequiresAuth><History/></RequiresAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
