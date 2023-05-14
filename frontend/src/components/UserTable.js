import axios from "axios";

import React, { useEffect } from "react";

import { useState } from "react";

const UserTable = () => {
  const [user, setUser] = useState("");

  const getAllUser = () => {
    const url = "http://localhost:4002/api/v1/users";

    axios

      .get(url)

      .then((res) => {
        setUser(res.data.users);

        console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <>
      <div class="col main  mt-3">
        <table class="table">
          <thead>
            <th>Sr No</th>

            <th>First name</th>

            <th>Last name</th>

            <th>Email</th>
          </thead>

          {user &&
            user.map((user, index) => {
              return (
                <tbody>
                  <tr class="table">
                    <td>{index + 1}</td>

                    <td>{user.first_name}</td>

                    <td>{user.last_name}</td>

                    <td>{user.email}</td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </>
  );
};

export default UserTable;
