import React from "react";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function AddProf() {
  
  const [profFirstName, setProfFirstName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [profLastName, setProfLastName] = useState("");
  const [profMiddleName, setProfMiddleName] = useState("");
  const [department, setDepartment] = useState("");
  // const [directoryListing, setDirectoryListing] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const professorData = {
      profFirstName,
      schoolName,
      profLastName,
      profMiddleName,
      department,
    };
    const url = "http://127.0.0.1:8000/home/addProfessor"
    try {
      const response = await axios.post(url, {professorData}); 
      console.log("Response from server:", response.data); 
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <>
     <div className="p-11">
      <div className="text-gray-900  text-4xl sm:text-[52px] font-medium leading-10 pb-7">
        Add a Professor
      </div>
      <div className="formBox bg-neutral-100 p-10 rounded-xl">
        <div className="msg text-gray-900 text-[16px] md:text-[22px] font-medium leading-6 pb-6">
        Please use the search bar above to make sure that the professor does not already exist at this school.
        </div>
        <div className="form">
          <div className="name flex flex-col mb-5">
            <label className=" text-gray-900 text-opacity-80 text-base font-normal leading-7 pb-1" for="floatinginput">
              Name of School*
            </label>
            <input
              type="text"
              id="floatingInput"
              className="text-gray-900  text-lg font-normal leading-loose p-3 rounded-lg   focus:border focus:border-neutral-300 focus:outline-none"
              placeholder="Enter School Name"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </div>
          
          <div className="fname flex flex-col mb-5"> <label className=" text-gray-900 text-opacity-80 text-base font-normal leading-7 pb-1" for="floatinginput">
          Professor’s First Name*
            </label>
            <input
              type="text"
              id="floatingInput"
              className="text-gray-900  text-lg font-normal leading-loose p-3 rounded-lg   focus:border focus:border-neutral-300 focus:outline-none"
              placeholder="Enter Professor’s Name"
              value={profFirstName}
              onChange={(e) => setProfFirstName(e.target.value)}
            /></div>
          <div className="mname flex flex-col mb-5">
          <label className=" text-gray-900 text-opacity-80 text-base font-normal leading-7 pb-1" for="floatinginput">
          Professor’s Middle Name
            </label>
            <input
              type="text"
              id="floatingInput"
              className="text-gray-900  text-lg font-normal leading-loose p-3 rounded-lg   focus:border focus:border-neutral-300 focus:outline-none"
              placeholder="Enter Professor’s Middle Name"
              value={profMiddleName}
              onChange={(e) => setProfMiddleName(e.target.value)}
            />
          </div>
          <div className="lname flex flex-col mb-5">
          <label className=" text-gray-900 text-opacity-80 text-base font-normal leading-7 pb-1" for="floatinginput">
          Professor’s Last Name
            </label>
            <input
              type="text"
              id="floatingInput"
              className="text-gray-900  text-lg font-normal leading-loose p-3 rounded-lg   focus:border focus:border-neutral-300 focus:outline-none"
              placeholder="Enter Professor’s Last Name"
              value={profLastName}
              onChange={(e) => setProfLastName(e.target.value)}
            />
          </div>
          <div className="Department* flex flex-col mb-5">
          <label className=" text-gray-900 text-opacity-80 text-base font-normal leading-7 pb-1" for="floatinginput">
          Department*
            </label>
            <input
              type="text"
              id="floatingInput"
              className="text-gray-900  text-lg font-normal leading-loose p-3 rounded-lg   focus:border focus:border-neutral-300 focus:outline-none"
              placeholder="Select a Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          
          <div className="agreeBox flex gap-2 ">
            <input type="checkbox" name="" id=""className="w-8" />
            <p className="text-gray-900 text-[13px] font-normal leading-normal">I agree to the <a href="http://" target="_blank" rel="noopener noreferrer "className="underline">Terms of Use and Privacy Policy</a></p>
          </div>
          <div className="btnBox px-4">
          <button  className=" w-full min-w-[150px] text-white bg-gray-900 rounded-[38px] my-10  text-[16px] font-semibold leading-normal p-3" onClick={handleSubmit}>
            Add Professor
          </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
                        };
