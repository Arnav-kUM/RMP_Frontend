import React from "react";
import insta from "./icons/instagtam.svg";
import fb from "./icons/facebook.svg";
import twitter from "./icons/twitter.svg";
import yt from "./icons/youtube.svg";
import linkedin from "./icons/link.svg";
import phn from "./icons/phone.svg";
import msg from "./icons/msg.svg";
export default function Footer() {
  let socialLogos = [insta, fb, twitter, yt, linkedin];
  return (
    <>
      <div className="bg-gray-900  text-white  w-full ">
        <div className=" p-10 gap-10 text-[1rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="logo mr-20 font-medium text-[1rem]">
            Rate My Professor
          </div>
          <div className="navlinks font-medium">
            <ul>
              <li className="cursor-pointer pb-4">Home</li>
              <li className="cursor-pointer pb-4">Find a Professor</li>
              <li className="cursor-pointer pb-4">Find a school</li>
            </ul>
          </div>
          <div className="contacts text-md ">
            <div className="text-gray-500  flex flex-col gap-2 mb-2">
              <span>Social</span>
              <div className="flex gap-2">
                {socialLogos.map((logo) => {
                  return <img src={logo} alt="" srcset="" />;
                })}
              </div>
            </div>
            <div className="text-gray-500 mb-2">Get in touch</div>
            <ul>
              <li>
                <img src={phn} alt="" className="inline" /> 1800 183 424
              </li>
              <li>
                <img src={msg} alt="" className="inline" /> find@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="flex p-6 md:justify-center items-center gap-16">
          <div>Cookies Policy</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </>
  );
}
