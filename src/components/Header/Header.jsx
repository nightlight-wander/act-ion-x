import React from 'react';
import HeaderStyles from "./Header.module.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={`${HeaderStyles.header}`}>
      <div className={`${HeaderStyles["logo-head"]} flex-vCenter`} >
        <Link to="/" className={`${HeaderStyles["logo-name"]}`}>ACT-IONS</Link>
      </div>
      <input type="checkbox" id="nav-toggle" className={`${HeaderStyles["nav-toggle"]}`} />

      <label htmlFor="nav-toggle" className={`${HeaderStyles["nav-toggle-label"]}`}>
        <span></span>
      </label>

      <div className={`${HeaderStyles["search-bar"]}`}>
        <input type="text" className={`${HeaderStyles["search-input"]}`} placeholder="Search" aria-label="search" />
        <button className={`${HeaderStyles["submit-btn"]}`}><span className=" material-icons material-icons-outlined search-submit">
          search</span></button>
      </div>
      <div className={`${HeaderStyles["video-actions"]} flex-vCenter`}>
        <Link to="/playlist" className={`flex-col flex-vCenter`}>
          <span class="material-icons">
            playlist_add
          </span>
          <span className={`${HeaderStyles["video-actions-title"]}`}>Playlist</span>
        </Link>
        <Link to="/playlist" className={`flex-col flex-vCenter`}>
          <span class="material-icons">
            watch_later
          </span>
          <span className={`${HeaderStyles["video-actions-title"]}`}>Watch Later</span>
        </Link>

        <Link to="/playlist" className={`flex-col flex-vCenter`}>
          <span class=" material-icons material-icons-outlined">
            history
          </span>
          <span className={`${HeaderStyles["video-actions-title"]}`}>History</span>
        </Link>
        <Link to="/playlist" className={`flex-col flex-vCenter`}>
          <span class="material-icons material-icons-outlined">
            favorite_border
          </span>
          <span className={`${HeaderStyles["video-actions-title"]}`}>Liked</span>
        </Link>
        <Link to="/login" className={`flex-col flex-vCenter`}>
          <span class="material-icons">
            perm_identity
          </span>
          <span className={`${HeaderStyles["video-actions-title"]}`}>Profile</span>
        </Link>
      </div>
    </header>
  )
}

export { Header };