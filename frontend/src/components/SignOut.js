import axios from "axios";

import React, { useEffect, useContext } from "react";

import { Navigate, useNavigate } from "react-router-dom";

import { LoginContext } from "../Contexts/LoginContext";

const SignOut = () => {
  // const {setRegistereduser,setRole} = useContext(LoginContext)

  //const history = useNavigate();

  // const logout = async () => {

  //   const logout = await axios.get("http://localhost:4002/api/v1/logout");

  //   // setRegistereduser(null)

  //   // setRole("")

  //   localStorage.clear();

  //   history("/login");

  // };

  // useEffect(() => {

  //   // fetch("http://localhost:4002/api/v1/logout",{

  //   //     method:"GET",

  //   //     // crossorigin: true,

  //   //     // mode: 'cors',

  //   //     headers:{

  //   //         "Access-Control-Allow-Credentials": true,

  //   //         Accept: "application/json",

  //   //         "Content-type" : "application/json"

  //   //     },

  //   //     credentials:"include"

  //   // }).then((res)=>{

  //   //     history("/login")

  //   //     if(res.data != 200){

  //   //         const error = new Error(res.error);

  //   //         throw error;

  //   //     }

  //   // }).catch((err)=>{

  //   //     console.log(err.message)

  //   // })

  //   logout();

  // }, []);

  return <div>SignOut</div>;
};

export default SignOut;
