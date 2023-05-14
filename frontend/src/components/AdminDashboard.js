import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import Mycss from "../css/Mycss.css";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  const [record, setRecord] = useState([]);

  //    const getData = () =>

  //    {

  //        axios.get('https://jsonplaceholder.typicode.com/users')

  //        .then(resposne=> resposne.json())

  //        .then(res=>setRecord(res))

  //    }

  //    useEffect(() => {

  //       getData();

  //    },)

  return (
    <>
      <div class="col main  mt-3">
        <p class="lead d-none d-sm-block">Admin Dashboard</p>

        {/* <div class="alert alert-warning fade collapse" role="alert" id="myAlert">

            <button type="button" class="close" data-dismiss="alert" aria-label="Close">

                <span aria-hidden="true">×</span>

                <span class="sr-only">Close</span>

            </button>

            <strong>Data and Records</strong> Learn more about employee

        </div> */}

        <div class="row mb-3 bro">
          <div class="col-xl-5 col-sm-6 py-2">
            <div class="card bg-success text-white h-100">
              <div
                class="card-body bg-success"
                style={{ backgroundColor: "#57b960" }}
              >
                <div class="rotate">
                  <i class="fa fa-user fa-4x"></i>
                </div>

                <h6 class="text-uppercase">Users</h6>

                <h1 class="display-4">134</h1>
              </div>
            </div>
          </div>

          <div class="col-xl-5 col-sm-6 py-2">
            <div class="card text-white bg-info h-100">
              <div class="card-body bg-info">
                <div class="rotate">
                  <i class="fa-solid fa-file fa-3x"></i>
                </div>

                <h6 class="text-uppercase">Applications</h6>

                <h1 class="display-4">125</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
