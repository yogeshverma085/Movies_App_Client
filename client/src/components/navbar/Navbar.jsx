import { ArrowDropDown } from "@material-ui/icons";
import { useContext, useState } from "react";
import { logout } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import { Link } from "react-router-dom"
import "./navbarStyle.css";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"))
  const { dispatch } = useContext(AuthContext);
  // console.log(user.username);

  const logoutUser = (e) => {
    // localStorage.removeItem("user");
    // window.location.href = "/register";
    e.preventDefault();
    logout(dispatch);
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);

  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
        </div>
        <div className="right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            style={{ marginRight: "7px" }}
          />
          <span >{user.username}</span>


          <div className="profile">

            <ArrowDropDown className="icon" style={{ marginLeft: "0px" }} />
            <div className="options">
              <span>Setting</span>
              <span
                onClick={(e) => {
                  logoutUser(e);
                }}
              >Logout</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
