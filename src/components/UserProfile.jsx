import {React,useState} from "react";
import editbtn from "./icons/editbtn.svg";

export default function UserProfile() {
  let userTabs = ["Profile", "Account settings", "Ratings", "Saved Professors"];
  let firstName = "John";
  let lastName = "Doe";
  let school = "University of California, Berkeley";
  let year = "2025";
  let email="jhondoe@123@gmail.com";
  let password="********";

  let Profile = [{
    "First Name": firstName,
    "Last Name": lastName,
    School: school,
    "Expected Year of Graduation": year,
  }];
  
  let AccountSettings = [{"Email":email,"Password":password}]
  let Ratings=[
    {
    "name":"Alex",
    "institute":"IIITD",
    "ForCredit": "Yes",
    "Attendance": "Mandatory",
    "WouldTakeAgain": "Yes",
    "Grade": "A",
    "Textbook": "Yes",
    "Review": "Nice Prof",
    "Rating": 4.0,
    "Difficulty": 3.0
    },
    {
      "name":"John",
      "institute":"IIITD",
      "ForCredit": "Yes",
      "Attendance": "Not Mandatory",
      "WouldTakeAgain": "No",
      "Grade": "A",
      "Textbook": "Yes",
      "Review": "Not Nice Prof",
      "Rating": 2.0,
      "Difficulty": 3.0

    }
  ];
  let SavedProfessors= [{}]
  let tabsPair={"Profile":Profile,"Account settings":AccountSettings,"Ratings":Ratings,"Saved Professors":SavedProfessors}
  const [currenTab, setcurrenTab] = useState("Profile")
  tabsPair["Ratings"].map((obj) => {
    console.log(Object.keys(obj),)
  })
  return (
    <div className="flex flex-col  w-[93%] mx-auto h-fit mb-20">
      <div className="top text-[3.25rem] font-medium  w-full my-8 ">
        Hey, USER
      </div>
      <div className="bg-neutral-100 w-full h-fit rounded-xl p-10  sm:text-gray-900  text-sm md:text-xl flex flex-col gap-y-10 font-semibold pb-20">
        <div className="">
          <div className="flex justify-evenly text-left">
          {userTabs.map((tab, index) => {
            return (<>
              <p className="w-full cursor-pointer relative pl-4" key={index} onClick={()=>{setcurrenTab(tab);console.log(currenTab)}}>
                {tab}
                {tab===currenTab? (<div className="bg-black h-[2px] absolute bottom-[-2] w-1/2"></div>):(<div className="bg-black h-[1px] absolute bottom-[-2] w-full"></div>)}
                <div className="bg-black h-[1px] absolute bottom-[-2] w-full"></div>
              </p></>

            )
          })}
          </div>
          {/* <div className="bg-black w-full h-[0.5px] mt-1"></div> */}
        </div>
        <div className="ml-auto px-10 flex gap-2 items-center">
          <img
            src={editbtn}
            alt=""
            srcset=""
            className="inline h-7 align-middle"
          />{" "}
          Edit
        </div>
        <div className="flex flex-col justify-center mx-auto w-full
         md:w-3/4 gap-y-16">
          
        {tabsPair[currenTab].map((obj,ind) => 
        
        {
          if(currenTab==='Ratings'){
            return (
              <span style={{marginLeft: '25%',width: '50%',backgroundColor: '#D3D3D3', 'border-radius': '10px',padding: '30px',display: 'inline'}}>

                <span style={{'width': '31%',padding: '3px','border-bottom': '3px solid grey',position: 'absolute',display: 'flex'}}>
                <span>
                {obj.name} 
                </span>
               
                <span style={{marginLeft: '50px',display: 'list-item',color: 'grey'}}>
                {obj.institute}
                </span>
                </span>


                
                <br></br>
                <br></br>
                <span style={{marginBottom: '30px',padding : '25px',display : 'inline-block'}}>
                  <span >
                    QUALITY <br></br><br></br> 
                    <span style={{'borderRadius': '10px',padding: '25px','background': obj.Rating<3? 'red' : obj.Rating==3? 'yellow' : 'green'}}>
                    {obj.Rating}
                    </span>
                    <br></br><br></br><br></br>
                  </span>
                  <span>
                    DIFFICULTY <br></br> <br></br>
                    <span style={{'borderRadius': '10px',padding: '25px','background': obj.Difficulty<3? 'red' : obj.Difficulty==3? 'yellow' : 'green'}}>
                    {obj.Difficulty}
                    </span>
                  </span>

                <p style ={{marginTop: '-33%',wordSpacing: '10px',marginLeft: '30%'}}>
                

                For Credit: {obj.ForCredit} Attendance: {obj.Attendance} WouldTakeAgain: {obj.WouldTakeAgain}
                <br></br><br></br>
                Grade: {obj.Grade}  Textbook: {obj.Textbook}
                <br></br>
                <br></br>

                </p>
                <p style ={{padding: '10px',marginLeft: '30%'}}>
                Review: <br></br>{obj.Review}
                </p>
                </span>


                <span style= {{borderRadius: '25px',padding: '10px',backgroundColor: 'white',marginLeft : '7%'}}>
                  EXTRA CREDIT
                </span>
                <span style= {{borderRadius: '25px',padding: '10px',backgroundColor: 'white',marginLeft : '7%'}}>
                  INSPIRATIONAL
                </span>
                <span style= {{borderRadius: '25px',padding: '10px',backgroundColor: 'white',marginLeft : '7%'}}>
                  SO MANY PAPERS
                </span>
                </span>

            ) 
          }
          return(
            <div style={{backgroundColor: 'grey', 'border-radius': '10px',padding: '10px',display: 'inline'}} key={ind}>
          {
          Object.keys(obj).map((param, index) => {
            
            return (
            <div className="flex w-full md:w-[80%]" key={index}>
              <span className=" flex flex-wrap mr-auto">{param} </span>
              <span className=" w-[70%] md:w-[40%] text-center md:text-left">{obj[param]}</span>
            </div>
            )
          ;
        })
        }
        </div>
        )
      }
        )
      }
        </div>
      </div>
    </div>
  );
}
