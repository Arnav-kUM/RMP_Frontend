import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

const Navbar_2 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            Rate My Professor
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex navbar-nav ms-auto  mb-2 mb-lg-0  " role="search">
              <button className="btn btn mx-2" type="submit" style={{background:"#8ACDEA"}}>
                Search
              </button>
              {/* <div className="form-outline form-floating flex-fill mb-1"> */}
              <input
                className="form-control "
                id="floatingInput"
                type="search"
                placeholder="Professor name"
                aria-label="Search"
              />
              {/* <label htmlFor="floatingInput">Professor</label> */}
              <p className="mx-1 my-1 p-2"> at </p>
              <input
                className="form-control ml-2"
                id="floatingInput2"
                type="search"
                placeholder="School Name"
                aria-label="Search"
                />
              {/* <label htmlFor="floatingInput2">School Name</label> */}
                {/* </div> */}
              
            </form>
            <ul className="navbar-nav ms-5 me-0 mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signUp">
                  SignUp
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar_2;
