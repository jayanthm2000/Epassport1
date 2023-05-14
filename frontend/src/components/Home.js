import React, { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { LoginContext } from "../Contexts/LoginContext";

import image from "../images/image3.jpeg";

import "../css/Home.css";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  const { registereduser, role } = useContext(LoginContext);

  const location = useLocation();

  console.log(localStorage.getItem("token"));

  console.log(role);

  return (
    <>
      <div className="home" id="home">
        <main>
          <img src={image} alt="Graphics" />

          <h1>e-PASSPORT</h1>

          <p>APPLY FOR PASSPORT</p>
        </main>
      </div>

      <div className="home2">
        <img src={image} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>
            Who we are?
            <br />
            <br />
          </h1>

          <p>
            The Passport Seva Programme (PSP) Division of the Ministry of
            External Affairs, Government of India, provides passport services
            through the Central Passport Organization (CPO) and its network of
            Passport Offices, Passport Seva Kendras (PSKs); and Post Office
            Passport Seva Kendras (POPSKs). Consular, Passport and Visa services
            to overseas Indians/Foreign nationals are provided by the PSP
            Division through the Indian Missions and Posts abroad.
            <br />
            <br /> Indian passports are issued through the network of 36
            Passport Offices, Headquarters at PSP Division (only Diplomatic and
            Official passports) and the Andaman and Nicobar Islands
            Administration. This network has been expanded by adding 93 PSKs and
            428 POPSKs as extended arms of the 36 Passport Offices. For Indians
            living abroad, passport and other miscellaneous services are
            rendered by the 190 Indian Missions/Posts abroad. All Passport
            Offices issue machine-readable passports as per the guidelines laid
            down by the International Civil Aviation Organization (ICAO).
            <br />
            <br /> The Central Passport Organization (CPO) was created in 1959
            as a subordinate office of the Ministry of External Affairs and is
            headed by Joint Secretary (Passport Seva Programme) and Chief
            Passport Officer, who also acts as the Appellate Authority under the
            Passports Act,1967 and the Head of Department under the Delegation
            of Financial Powers Rules 1978. The Head Quarter of the CPO is in
            the Passport Seva Programme (PSP) Division of the Ministry. The
            Division works under the supervision of Secretary (CPV & OIA). Joint
            Secretary (CPV) is responsible for the issue of diplomatic and
            official passports, consular and visa matters.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
