import { useEffect, useState } from "react";

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import dayjs from "dayjs";

import "./App.css";

import SignIn from "./components/SignIn";

import SignUp from "./components/SignUp";

import Home from "./components/Home";

import Checkout from "./components/Checkout";

import SuccessfulSubmit from "./components/SuccessfulSubmit";

import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

import AdminDashboard from "./components/AdminDashboard";

import AdminSidebar from "./components/AdminSidebar";

import UserSidebar from "./components/UserSidebar";

import UserDashboard from "./components/UserDashboard";

import { LoginContext } from "./Contexts/LoginContext";

//import SignOut from "./components/SignOut";

import ApplicationTable from "./components/ApplicationTable";

import UserTable from "./components/UserTable";

import AllOffices from "./components/AllOffices";

import Details from "./components/Details";

import OfficeDetails from "./components/OfficeDetails";

import EditOffice from "./components/EditOffice";

import Contact from "./components/Contact";

import PersonalDetail from "./components/PersonalDetail";

function App() {
  // const [dob,setDob] = useState()

  // const [offices,setOffices] = useState([])

  // const [juris,setJuris] = useState()

  // useEffect(()=>{

  //   axios.get('http://localhost:4002/api/v1/office')

  //   .then((response)=>setOffices(response.data.offices))

  //   //.then((response)=>console.log(response))

  // },[])

  // const handleSubmit = (e)=>{

  //   e.preventDefault()

  //   try {

  //     axios.post("http://localhost:4002/api/v1/form/new",{

  //       dob: e.target[0].value,

  //       parth: e.target[1].value

  //     })

  //     .then((response)=>console.log(response))

  //   } catch (error) {

  //     console.log(error)

  //   }

  // }

  // let filteredOffice = []

  // filteredOffice = offices.filter((item)=>{

  //   return item.jurisdiction_id.city == juris

  //   //return false

  // })

  //console.log(offices[0].jurisdiction_id.name)

  //   return (

  //     <>

  //     <div>  <h3>Date of Birth: </h3> </div>

  //       <div>

  //       <LocalizationProvider dateAdapter={AdapterDayjs}>

  //       <DemoContainer components={['DatePicker']}>

  //       <DatePicker

  //         label={'"MM" "DD" "YYYY"'}

  //         views={['day', 'month', 'year']}

  //        />

  //       </DemoContainer>

  //       <br/>

  //       <DemoItem label="Responsive variant">

  //         <DatePicker defaultValue={dayjs('')} />

  //       </DemoItem>

  //     </LocalizationProvider>

  //       </div>

  //     </>

  //   );

  // }

  // console.log(juris)

  // console.log(filteredOffice)

  // const [registereduser, setRegistereduser] = useState(null);

  // const [role, setRole] = useState("");

  //const [authenticated,setAuthenticated] = useState(false)

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<SignIn />} />

        {/* <Route path="/logout" element={<SignOut />} /> */}

        <Route path="/register" element={<SignUp />} />

        <Route path="/application_form" element={<Checkout />} />

        <Route path="/successfulSubmit" element={<SuccessfulSubmit />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/adminRoute"
          element={
            <div className="container-fluid" id="main">
              <div className="row row-offcanvas row-offcanvas-left">
                <AdminSidebar />

                <AdminDashboard />
              </div>
            </div>
          }
        />

        <Route
          path="/registeredUser"
          element={
            <div className="container-fluid" id="main">
              <div className="row row-offcanvas row-offcanvas-left">
                <AdminSidebar />

                <ApplicationTable />
              </div>
            </div>
          }
        />

        <Route
          path="/allUser"
          element={
            <div className="container-fluid" id="main">
              <div className="row row-offcanvas row-offcanvas-left">
                <AdminSidebar />

                <UserTable />
              </div>
            </div>
          }
        />

        <Route
          path="/allOffice"
          element={
            <div className="container-fluid" id="main">
              <div className="row row-offcanvas row-offcanvas-left">
                <AdminSidebar />

                <AllOffices />
              </div>
            </div>
          }
        />

        <Route
          exact
          path="/forms/:id"
          element={
            <div className="container-fluid" id="main">
              <div className="row row-offcanvas row-offcanvas-left">
                <AdminSidebar />

                <Details />
              </div>
            </div>
          }
        />

        {/* this one */}

        <Route
          exact
          path="/f/:id"
          element={
            <div className="container-fluid" id="main">
              <div className="row row-offcanvas row-offcanvas-left">
                <UserSidebar />

                <PersonalDetail />
              </div>
            </div>
          }
        />

        <Route
          path="/userRoute"
          element={
            <div className="container-fluid" id="main">
              <div className="row row-offcanvas row-offcanvas-left">
                <UserSidebar />

                <UserDashboard />
              </div>
            </div>
          }
        />

        <Route path="/office_details" element={<OfficeDetails />} />

        <Route path="/updateOffice/:id" element={<EditOffice />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

// {data.map(getState,index=>(

//   <option>{getState.name}</option>

// ))}
