import React, { useContext, useState, useEffect } from "react";

import axios from "axios";

import { Navigate, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

//import { LoginContext } from "../Contexts/LoginContext";

import "../css/Navbar.css";

const Navbar = () => {
  const history = useNavigate();

  //const {registereduser, setRegistereduser,role, setRole} = useContext(LoginContext)

  const [loggedIn, setLoggedIn] = useState(false);

  const role = localStorage.getItem("role");

  useEffect(() => {
    const id = localStorage.getItem("id");

    if (id) setLoggedIn(true);
  }, []);

  const logout = async () => {
    const logout = await axios.get("http://localhost:4002/api/v1/logout");

    // setRegistereduser(null)

    // setRole("")

    localStorage.clear();

    setLoggedIn(false);

    history("/");
  };

  return (
    <nav>
      <h1>e-Passport.</h1>

      <main>
        <HashLink to={"/#home"}>Home</HashLink>

        <Link to={"/contact"}>Contact</Link>

        <HashLink to={"/#about"}>About</HashLink>

        {/* <Link className="login" to={"/login"}>

          Login

        </Link> */}

        {loggedIn ? (
          role == "user" ? (
            <>
              <HashLink to={"/userRoute"}>User Dashboard</HashLink>

              <Link className="" onClick={logout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <HashLink to={"/adminRoute"}>Admin Dashboard</HashLink>

              <Link className="" onClick={logout}>
                Logout
              </Link>
            </>
          )
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </main>
    </nav>
  );
};

export default Navbar;
