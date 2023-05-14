import axios from "axios";

import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from "react-router-dom";

const EditOffice = () => {
  const history = useNavigate();

  const location = useLocation();

  const [office, setOffice] = useState({
    office_name: "",

    address: "",

    city: "",

    phone_number: "",
  });

  const setdata = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    console.log(e.target.value);

    setOffice((pre) => {
      return {
        ...pre,

        [name]: value,
      };
    });
  };

  const { id } = useParams("");

  //   const formId = location.pathname.split("/")[2];

  //   console.log(formId)

  // to get single data

  const getData = async () => {
    const url = `http://localhost:4002/api/v1/office/${id}`;

    await axios

      .get(url)

      .then((res) => {
        console.log(res.data.office);

        setOffice(res.data.office);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [id]);

  // to edit office

  const updateOffice = () => {
    const { office_name, address, city, phone_number } = office;

    const url = `http://localhost:4002/api/v1/updateOffice/${id}`;

    axios

      .put(url, office)

      .then((res) => {
        alert("Successfully updated");

        history("/adminRoute");

        console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="mt-5">
      <div>
        <center>
          <h1>Add Office</h1>
        </center>
      </div>

      <div className="p-5">
        <div class="form-group">
          <label>Office Name</label>

          <input
            type="text"
            class="form-control"
            name="office_name"
            onChange={setdata}
            value={office.office_name}
            id="office_name"
            aria-describedby="office"
            placeholder="Enter Office Name"
          />
        </div>

        <div class="form-group">
          <label>Office Address</label>

          <input
            type="text"
            class="form-control"
            name="address"
            onChange={setdata}
            value={office.address}
            id="office_address"
            aria-describedby="office"
            placeholder="Enter Office Address"
          />
        </div>

        <div class="form-group">
          <label>City</label>

          <input
            type="text"
            class="form-control"
            name="city"
            onChange={setdata}
            value={office.city}
            id="city"
            aria-describedby="office"
            placeholder="Enter City"
          />
        </div>

        <div class="form-group">
          <label>Office Phone No</label>

          <input
            type="Number"
            class="form-control"
            name="phone_number"
            onChange={setdata}
            value={office.phone_number}
            id="office_number"
            aria-describedby="office"
            placeholder="Enter Office Number"
          />
        </div>
      </div>

      <div className="justify-content-center d-flex m-3">
        <button onClick={updateOffice} type="submit" class="btn btn-primary ">
          Update
        </button>
      </div>
    </form>
  );
};

export default EditOffice;
