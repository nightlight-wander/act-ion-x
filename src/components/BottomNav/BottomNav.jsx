import React from 'react';
import { Link } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import "./BottomNav.css";

export function BottomNav() {
  return (
    <nav className="actions-cat flex-center">
      <Link to="/" className="flex-col flex-vCenter">
        <span><WhatshotIcon /></span>
        <span className="actions-name">Home</span>
      </Link>
      <Link to="/movies" className="flex-col flex-vCenter">
        <span><MovieIcon /></span>
        <span className="actions-name">Movies</span>
      </Link>
      <Link to="/series" className="flex-col flex-vCenter">
        <span><TvIcon /></span>
        <span className="actions-name">Series</span>
      </Link >
    </nav>

  );
}