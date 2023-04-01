import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined, ArrowBackOutlined } from "@material-ui/icons";
import { RiFileCopy2Line } from "react-icons/ri"
import "./mobileStyle.css";

export default function Mobiledetails() {
  const location = useLocation();
  const movie = location.state?.movie;
  const topContainer = useRef();
  const url = window.location.href
  const isSeries = movie.isSeries;

  // To make sure page starts from the top
  useEffect(() => {
    topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
  }, []);

  return (
    <>
      <div ref={topContainer} />
      <div className="mobile" >
        <Link to="/">
          <div className="back">
            <ArrowBackOutlined />
          </div>
        </Link>
        <Link to="/watch" state={{ movie: movie }}>
          <video playsInline src={movie.trailer} autoPlay={true} loop />
        </Link>
        <div className="item-info">


          <div className="title">{movie.title}</div>
          <div className="genre">{movie.genre}<span className="is-series">{isSeries ? ("Series") : ("Movie")}</span></div>

          <Link to="/watch" style={{ textDecoration: "none" }} state={{ movie: movie }}>
            <div className="play-btn">
              <PlayArrow className="play-icon icons-play" />
              <span>Play</span>&nbsp;<span className="match">{isSeries ? ("Series") : ("Movie")}</span>
            </div>
          </Link>


          <div className="icons">

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <CopyToClipboard style={{ background: "none", border: "none", color: "gray" }} text={url}>
                <RiFileCopy2Line className="icon" />
              </CopyToClipboard>
              <span style={{ marginTop: "4px", fontSize: "small", opacity: "0.6" }}>copy</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Add className="add icon" />
              <span style={{ marginTop: "4px", fontSize: "small", opacity: "0.6" }}>add list</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ThumbUpAltOutlined className="thumb icon" />
              <span style={{ marginTop: "4px", fontSize: "small", opacity: "0.6" }}>like</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ThumbDownOutlined className="thumb icon" />
              <span style={{ marginTop: "4px", fontSize: "small", opacity: "0.6" }}>Unlike</span>
            </div>

          </div>


          <div className="itemInfoDown">
            <span className="match">100% match</span>
            <span>{movie.duration}</span>
            <span className="limit">+{movie.limit}  Min</span>
            <span className="year">{movie.year}</span>
            <span className="limit">HD</span>
          </div>
          <div className="disc">{movie.desc}</div>

        </div>

      </div>
    </>


  );
}