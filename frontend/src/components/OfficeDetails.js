import axios from "axios";

import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const OfficeDetails = () => {
  const history = useNavigate();

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

  const newOffice = async (e) => {
    e.preventDefault();

    const { office_name, address, city, phone_number } = office;

    const url = "http://localhost:4002/api/v1/office/new";

    await axios

      .post(url, office)

      .then((res) => {
        alert("Office Added Successfully");

        history("/adminRoute");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
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
          <button onClick={newOffice} type="submit" class="btn btn-primary ">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default OfficeDetails;

// onChange={setdata} value={inp.name}

// onChange={setdata} value={inp.email}

// onChange={setdata} value={inp.age}

// onChange={setdata} value={inp.mobile}

// onChange={setdata} value={inp.work}

// onChange={setdata} value={inp.address}

// onChange={setdata} value={inp.about}

// onClick={addData}
