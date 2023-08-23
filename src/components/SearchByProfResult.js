
import React from "react";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import searchImg from "./images/undraw_people_search_re_5rre.svg";
import "../index.css";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import { NavLink } from "react-router-dom";
import axios from "axios";


export default function SearchByProfresult() {
  //The search result will return an array of objects having details of the required profs. the array will be passed as props to this component.
  //   let srchResult = props.resultedArray of objects;
  let url = "http://127.0.0.1:8000/home/searchprof"
  const [srchResult, setSrchResult] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const profName = searchParams.get("profName");
  let response;

  const fetchdata = async () => {
    try {
      response = await axios.post(url, {profName});
      console.log(response)
      setSrchResult(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchdata(); // Call the fetchdata function after the component mounts
  }, []);
  
  console.log(srchResult);
  const [effect, setEffect] = useState(false);
  let allDepartments = []
  let noOfProfs = srchResult.length;
  let displayName = profName;
  const [dropShow, setDropShow] = useState(false);
  //   const [result, setResult] = useState(srchResult);

  srchResult.forEach((prof) => {
    allDepartments.push(prof.dept);
  });
  const [filterbyDepartmentName, setFilterbyDepartmentName] = useState("Select Department");

  allDepartments = [...new Set(allDepartments)];
  return (
    <>
      <div className="w-full sm:p-4" style={{ fontFamily: "Inter" }}>
        <div className="statement mx-12 py-8">
          <h1 className="resbyProfHeading text-gray-900 font-medium leading-16 text-4xl sm:text-5xl md:text-[52px]">
            {noOfProfs} Professors found with name '{displayName}'.
          </h1>
        </div>

        <div className="mx-12 pb-10 flex flex-col-reverse md:flex-row justify-between">
          <div className="departments rounded-xl bg-neutral-100 md:w-[530px]  w-[90%] mx-auto p-6 md:p-10 md:mr-20 md:mx-0 self-start">

            <div className="button flex bg-white p-3  items-center justify-between rounded-lg " onClick={() => { setDropShow(!dropShow); setEffect(true) }}>

              <button className="text-gray-900 text-opacity-70  text-base sm:text-lg font-normal leading-6">{filterbyDepartmentName}</button>

              {dropShow ? (
                <MdOutlineExpandLess
                  className="  text-gray-900"
                  size="2rem"
                  onClick={() => setDropShow(!dropShow)}
                />
              ) : (
                <MdOutlineExpandMore
                  className=" text-gray-900"
                  size="2rem"
                  onClick={() => setDropShow(!dropShow)}
                />
              )}
            </div>

            <div className={dropShow ? `dropdown animateDrop bg-white rounded-t-lg mt-1 divide-y divide-slate-200  overflow-auto max-h-[235px] `
              : "hidden"} >

              {allDepartments.map((dept) => {
                return (<div className="option p-[10px] text-gray-900  text-[16px] font-normal leading-loose border-b-1 border-gray-400 pl-2 hover:bg-[#e5e5e533] focus-within:scale-150" onClick={() => { setFilterbyDepartmentName(dept) }}>
                  {dept}
                </div>)
              })}





            </div>


          </div>
          <img
            src={searchImg}
            className="md:w-[304px] min-h-[250px] w-[70%] sm:w-[50%] md:mr-4 mx-auto mb-6 sm:mb-10"
            alt=""
          />

        </div>
      </div>
      <div
        className="w-full p-4 Class
tracking-tighter "
        style={{}}
      >
        <div className="resultCards">
          {srchResult.map((prof) => {
            return (
              <div className="eachCard bg-neutral-100 mt-8 p-9 flex flex-col  rounded-2xl mx-[8.5vw]  md:mx-auto max-w-[93vw] min-h-[240px]  md:flex-row md:gap-24">
                <div className="rating ">
                  <div
                    className="bg-white max-w-[113px]  py-6 sm:p-8  rounded-lg flex 
                justify-center items-center text-black text-[42px] font-normal leading-10"
                  >
                    {prof.rating}
                  </div>
                  <p className="text-gray-900 text-opacity-70  text-lg sm:text-xl font-medium leading-loose md:pt-2">
                    {prof.noOfRatings} ratings
                  </p>
                </div>
                <div className="info pt-4">
                  <h1 className="name text-gray-900 text-4xl sm:text-[52px] font-medium leading-10">
                    {prof.Name} 
                  </h1>
                  <h3 className="school text-gray-900 text-lg sm:text-[22px] font-medium  pt-4 leading-6 ">
                    {prof.school}
                  </h3>

                  <p className="dept text-gray-900 text-opacity-70 text-[16px] font-medium leading-5 pt-2 md:pt-4">
                    Department of {prof.dept}
                  </p>
                  <p className="difficulty  text-gray-900 text-opacity-70 text-[16px] font-medium leading-5 pt-2 md:pt-4">
                    Level of Difficulty: {prof.difficulty}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="message flex flex-col place-content-center mt-6 md:mt-[8em]">
          <p className=" text-gray-900  text-3xl sm:text-4xl md:text-[52px] font-medium leading-10 mx-[7vw] md:mx-auto text-center">
            {" "}
            Don’t see the professor you’re looking for?
          </p>
          <NavLink to="/addprof" className="mx-auto w-[46%] min-w-[200px] text-white bg-gray-900 rounded-[38px] my-10 text-[16px] font-semibold leading-normal p-4 text-center"> <button className="">
            Add Professor
          </button></NavLink>
        </div>
      </div>
    </>
  );
}
