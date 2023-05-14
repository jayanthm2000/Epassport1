import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { LoginContext } from "../Contexts/LoginContext";

import Mycss from "../css/Mycss.css";

import axios from "axios";

const UserSidebar = () => {
  // const id= localStorage.getItem("id");

  //   const location = useLocation();

  //   const formId = location.pathname.split("/")[2];

  //   console.log(location.pathname);

  const formId = localStorage.getItem("form");

  const [users, setUsers] = useState("");

  const getAllForms = () => {
    const url = "http://localhost:4002/api/v1/forms";

    axios

      .get(url)

      .then((res) => {
        setUsers(res.data);

        console.log(users.form);

        // console.log(res.data.form[0]._id);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const viewForm = () => {
    const getForm = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4002/api/v1/forms/${formId}`
        );

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getForm();
  };

  useEffect(() => {
    getAllForms();
  }, []);

  // const {registereduser} = useContext(LoginContext)

  return (
    <div
      class="col-md-3 col-lg-3  sidebar-offcanvas pl-0 bro1"
      id="sidebar"
      role="navigation"
      style={{ backgroundColor: "#e9ecef" }}
    >
      <ul class="nav flex-column  pl-0  p-3 mt-3 ">
        <li class="nav-item mb-2 ">
          <a class="nav-link text-secondary" href="#">
            <h5>hello</h5>
          </a>
        </li>

        <li class="nav-item mb-2 ">
          <Link class="nav-link text-secondary" to={"/application_form"}>
            <i class="far fa-chart-bar font-weight-bold"></i>{" "}
            <span className="ml-3">Apply</span>
          </Link>
        </li>

        <li class="nav-item mb-2 ">
          <Link
            onClick={() => viewForm}
            class="nav-link text-secondary"
            to={`/f/${formId}`}
          >
            <i class="fas fa-file-export font-weight-bold"></i>{" "}
            <span className="ml-3">View/Print Form</span>
          </Link>
        </li>

        <li class="nav-item mb-2 ">
          <Link class="nav-link text-secondary" to={"/application_form"}>
            <i class="fas fa-atom font-weight-bold"></i>{" "}
            <span className="ml-3">View Status</span>
          </Link>
        </li>

        <li class="nav-item mb-2 ">
          <Link class="nav-link text-secondary" to={"/application_form"}>
            <i class="fas fa-tablet-alt font-weight-bold"></i>{" "}
            <span className="ml-3">Appointments</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
