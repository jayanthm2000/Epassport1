import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

const AllOffices = () => {
  const history = useNavigate();
  const [office, setOffice] = useState("");

  const getAllOffice = () => {
    const url = "http://localhost:4002/api/v1/office";
    axios
      .get(url)
      .then((res) => {
        setOffice(res.data.offices);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllOffice();
  }, []);

  // add office
  const addOffice = () => {
    history("/office_details");
  };

  // delete user
  const deleteOffice = (id) => {
    const url = `http://localhost:4002/api/v1/deleteOffice/${id}`;
    axios
      .delete(url)
      .then((res) => {
        alert("Office Deleted Successfully");
        getAllOffice();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div class="col main mt-3">
        <div style={{ overflow: "scroll", maxHeight: "100vh" }}>
          <table class="table ">
            <thead>
              <th>Sr No</th>
              <th>Office Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Phone</th>
              <th colspan="3">
                <center>Actions</center>
              </th>
            </thead>
            {office &&
              office.map((office, index) => {
                return (
                  <tbody>
                    <tr class="table">
                      <td>{index + 1}</td>
                      <td>{office.office_name}</td>
                      <td>{office.address}</td>
                      <td>{office.city}</td>
                      <td>{office.phone_number}</td>
                      <td>
                        <div className="btn pr-0 mr-0">
                          <NavLink to={`/updateOffice/${office._id}`}>
                            <button
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              Update
                            </button>
                          </NavLink>
                        </div>
                      </td>

                      <td>
                        <div className="btn pl-0 ml-0">
                          <NavLink>
                            <button
                              onClick={() => deleteOffice(office._id)}
                              type="button"
                              class="btn btn-danger btn-sm"
                            >
                              Delete
                            </button>
                          </NavLink>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>

        <div className="col main mt-3 d-flex align-items-center justify-content-center">
          <button onClick={addOffice} type="button" class="btn btn-primary">
            Add Offices
          </button>
        </div>
      </div>
    </>
  );
};

export default AllOffices;
