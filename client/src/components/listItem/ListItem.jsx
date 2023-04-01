import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined, } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./listitemStyle.css";
import { BrowserView } from 'react-device-detect';

function ReadMore({ children, maxCharacterCount }) {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;
  // eslint-disable-next-line 
  function togglesIsTruncated() {
    setIsTruncated(!isTruncated);
  }

  return (
    <p className="p-btn">
      {resultString}
      <span className="more-btn">
        {/* {isTruncated ? "  ...more" : "...less"} */}
        {isTruncated ? "..." : ""}
      </span>
    </p>
  )
}

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const isSeries = movie.isSeries;

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("api/movies/find/" + item, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,

          },
        });
        setMovie(res.data);
        // console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <>
      <Link>
        <div className="listItem listItem-desktop"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to="/mobile" state={{ movie: movie }}>
            <img
              className="listiem-img"
              src={movie?.imgSm}
              alt=""
            />
          </Link>


          <BrowserView>
            {isHovered && (
              <>
                <Link to="/watch" state={{ movie: movie }}>
                  <video src={movie.trailer} autoPlay={true} loop />
                </Link>
                <div className="itemInfo">
                  <div className="icons">

                    <Link to="/watch" state={{ movie: movie }}>
                      <PlayArrow className="icon icons-play" />
                    </Link>

                    <Add className="icon" />
                    <ThumbUpAltOutlined className="icon" />
                    <ThumbDownOutlined className="icon" />
                  </div>
                  <div className="title">{movie.title}</div>
                  <span className="is-series">{isSeries ? ("Series") : ("Movie")}</span>
                  <div className="itemInfoTop">
                    <span className="match">100% match</span>
                    <span>{movie.duration}</span>
                    <span className="limit">+{movie.limit}  Min</span>
                    <span className="year">{movie.year}</span>
                    <span className="limit">HD</span>
                  </div>
                  <div className="desc"><ReadMore maxCharacterCount={100}>{movie.desc}</ReadMore></div>
                  <div className="genre">{movie.genre}</div>
                </div>
              </>
            )}
          </BrowserView>
        </div>


        <div style={{ padding: "3px", }} className="listItem listItem-mobile container-fluid"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to="/mobile" state={{ movie: movie }}>
            <img
              className="listiem-img"
              src={movie?.imgSm}
              alt=""
            />
          </Link>
        </div>
      </Link>
    </>

  );
}
