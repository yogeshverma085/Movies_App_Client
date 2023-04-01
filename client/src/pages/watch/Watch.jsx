import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import React from 'react'

import "./watchStyle.css";

export default function Watch() {
  const location = useLocation();
  const movie = location.state?.movie;
  // const movie = location.movie;
  // console.log(movie)

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video playsInline className="video" autoPlay progress="true" controls src={movie.video} />




    </div>
  );
}
