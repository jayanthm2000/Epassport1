import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const ApplicationTable = () => {
  const [users, setUsers] = useState("");
  const getAllForms = () => {
    const url = "http://localhost:4002/api/v1/forms";
    axios
      .get(url)
      .then((res) => {
        setUsers(res.data.form);
        console.log(res.data.form[0]._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const viewForm = (id) => {
    const getForm = async () => {
      try {
        const res = await axios.get(`http://localhost:4002/api/v1/forms/${id}`);

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

  return (
    <>
      <div class="col main  mt-3">
        <table class="table">
          <thead>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>View Form</th>
          </thead>

          {users &&
            users.map((user, index) => {
              return (
                <tbody>
                  <tr class="table-active">
                    <td>{index + 1}</td>
                    <td>{user.first_name + " " + user.last_name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link
                        to={`/forms/${user._id}`}
                        onClick={() => viewForm(user._id)}
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </>
  );
};

export default ApplicationTable;
