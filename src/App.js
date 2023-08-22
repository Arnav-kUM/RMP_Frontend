import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './oldComponents/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './oldComponents/Login';
import Navbar_2 from './oldComponents/Navbar_2';
import Navbar3 from './components/Navbar3';
import Navbar4 from './components/Navbar4';
import AddProf from './components/AddProf';
import AddSchool from './components/AddSchool';
import SearchByProfResult from './components/SearchByProfResult';
import SearchBySchoolresult from './components/SearchBySchoolresult';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
// import '../App.css';


function App() {
  return (
    <>
    
     <Routes>
        <Route path="/" element={<><Navbar3/><Home/></>} />
        <Route path="/searchByProfResult" element={<><Navbar4/><SearchByProfResult/></>} />
        <Route path="/searchBySchoolResult" element={<><Navbar4/><SearchBySchoolresult/></>} />
        <Route path="/addprof" element={<><Navbar4/><AddProf /></>}/>
        <Route path="/addschool" element={<><Navbar4/><AddSchool /></>} />
        
        <Route path="/signup" element={<><Navbar/><SignUp/></>} />
        <Route path="/login" element={<><Navbar/><Login/></>} />
        <Route path="/userprofile" element={<><Navbar4/><UserProfile/></>} />
      </Routes>
      <Footer/>
    </>
  );
  
  // <SearchByProfResult/>
}

export default App;
