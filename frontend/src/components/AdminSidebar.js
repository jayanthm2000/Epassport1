import { useEffect, useState, useContext } from "react";

import { Link } from "react-router-dom";

import React from "react";

import { LoginContext } from "../Contexts/LoginContext";

import Mycss from "../css/Mycss.css";

const AdminSidebar = () => {
  // const { registereduser } = useContext(LoginContext);

  return (
    <div
      class="col-md-3 col-lg-3 sidebar-offcanvas pl-0 bro1"
      id="sidebar"
      role="navigation"
      style={{ backgroundColor: "#e9ecef" }}
    >
      <ul class="nav flex-column  pl-0  p-3 mt-1 ">
        {/* <li class="nav-item mb-2 mt-3">

          <a class="nav-link text-secondary" href="#">

            <h5>{registereduser.first_name}</h5>

          </a>

        </li> */}

        {/* <li class="nav-item mb-2 ">

          <Link class="nav-link text-secondary" to={"/registeredUser"}>

            <i class="far fa-chart-bar font-weight-bold"></i>{" "}

            <span className="ml-3">Applications</span>

          </Link>



          <Link class="nav-link text-secondary" to={"/allUser"}>

            <i class="far fa-chart-bar font-weight-bold"></i>{" "}

            <span className="ml-3">Users</span>

          </Link>



          <Link class="nav-link text-secondary" to={"/allOffice"}>

            <i class="fas fa-file-export font-weight-bold"></i>{" "}

            <span className="ml-3">Passport Offices</span>

          </Link>



          <Link class="nav-link text-secondary" to={"/allOffice"}>

            <i class="fas fa-file-export font-weight-bold"></i>{" "}

            <span className="ml-3">Passport Status</span>

          </Link>

        </li> */}

        {/* <li class="nav-item mb-2">

          <a class="nav-link text-secondary" href="#">

            <i class="fas fa-atom font-weight-bold"></i>{" "}

            <span className="ml-3">Passport Status</span>

          </a>

        </li> */}

        {/* <li class="nav-item mb-2 mt-3">

          <a class="nav-link text-secondary" href="#">

            <h5>{registereduser.first_name}</h5>

          </a>

        </li> */}

        <li class="nav-item mb-2 ">
          <a class="nav-link text-secondary" href="#">
            {<h5>Hello</h5>}
          </a>
        </li>

        {/* application */}

        <li class="nav-item mb-2 ">
          <Link class="nav-link text-secondary" to={"/registeredUser"}>
            <i class="far fa-chart-bar font-weight-bold"></i>{" "}
            <span className="ml-3">Applications</span>
          </Link>
        </li>

        {/* //users */}

        <li class="nav-item mb-2 ">
          <Link class="nav-link text-secondary" to={"/allUser"}>
            <i class="fas fa-regular fa-user font-weight-bold"></i>{" "}
            <span className="ml-3">Users</span>
          </Link>
        </li>

        {/* passport offices */}

        <li class="nav-item mb-2 ">
          <Link class="nav-link text-secondary" to={"/allOffice"}>
            <i class="fas fa-file-export  font-weight-bold"></i>{" "}
            <span className="ml-3">Passport Offices</span>
          </Link>
        </li>

        {/* passport status */}

        <li class="nav-item mb-2 ">
          <Link class="nav-link text-secondary" to={"/allOffice"}>
            <i class="fas fa-atom font-weight-bold"></i>{" "}
            <span className="ml-3">Passport Status</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;

// allUser

{
  /* <i class=""></i> */
}
