import "./app.scss"
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Mobiledetails from "./pages/mobiledetails/Mobiledetails";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";


const App = () => {
  // const {user} = true;
  const {user} = useContext(AuthContext);
  return (

    <BrowserRouter>

      <Routes>

        <Route exact path="/" element={user ? <Home /> : <Navigate to="/register" />} />;

        <Route exact path="/register" element={!user ? <Register /> : <Navigate to="/" />} />;

        <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/" />} />;

        {user && (
          <>
            <Route path="/movies" element={<Home type="movie" />} exact />
            <Route path="/series" element={<Home type="series" />} exact />
            <Route path="/register" element={<Register />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/watch" element={<Watch />} exact />
            <Route path="/mobile" element={<Mobiledetails />} exact />
          </>
        )}



      </Routes>

    </BrowserRouter>
  );
};



export default App;