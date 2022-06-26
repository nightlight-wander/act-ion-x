import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {AuthProvider} from "./context/AuthContext";
import { VideosProvider } from "./context/VideosContest";
import { VideoActionsProvider } from "./context/VideoActionsContext";
// import { Toast } from "./components/Toast/Toast";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
      <VideoActionsProvider>
        <VideosProvider>
            <App />
        </VideosProvider>
        </VideoActionsProvider>
      </Router>
      {/* <Toast/> */}
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
