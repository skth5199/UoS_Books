import React, {useState, useEffect} from "react"
import Para from "../paragrapgh/para";
import jwt_decode from "jwt-decode";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Footer(props) {
  const [role, setRole] = useState("buyer");
  useEffect(()=> {
    const token = window.localStorage.getItem('token');
    let decodedToken = {}
    let roleFromToken = ""
    if(token){
        decodedToken = jwt_decode(token);
        const {role} = decodedToken;
        roleFromToken = role
        setRole(roleFromToken)
    }
  }, [])
  
  return (
    <div className="flex justify-center pt-12 pb-10 bg-gray-900">
      <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
        <div className="flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row justify-between text-white">
          <div className="w-full lg:w-3/12 xl:w-3/12 2xl:w-3/12">
            <div>
              <h1 className="text-xl font-semibold pb-3">Southampton</h1>
            </div>
            <div className="text-sm text-gray-300 pb-4 lg:pb-0 xl:pb-0 2xl:pb-0">
              <Para
                text="some text to describe the library 
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                "
              />
            </div>
          </div>
          <div className="w-full lg:w-3/12 xl:w-3/12 2xl:w-3/12 pb-4 lg:pb-0 xl:pb-0 2xl:pb-0">
            <div className="pt-1">
              <h1 className="font-semibold pb-2 lg:pb-3 xl:pb-3 2xl:pb-3">Navigation</h1>
            </div>
            {
              role == "seller" ? 
              <div className="text-sm w-1/3  lg:w-3/12 xl:w-3/12 2xl:w-3/12">
              <ul className="text-gray-300 w-full">
              <li className="cursor-pointer hover:text-blue-400  transition duration-500 ease-in-out"><Link to="/books">Home</Link></li>
                  <li className="cursor-pointer hover:text-blue-400  transition duration-500 ease-in-out "><Link to="/add-book">Add Book</Link></li>
                  <li className="cursor-pointer hover:text-blue-400  transition duration-500 ease-in-out "><Link to="/book-status">Books</Link></li>
                  <li className="cursor-pointer hover:text-blue-400  transition duration-500 ease-in-out "><Link to="/book-track">Book Track</Link></li>
                  <li className="cursor-pointer hover:text-blue-400  transition duration-500 ease-in-out"><Link to="/">Sign out</Link></li>
              </ul>
          </div>
          : 
          <div className="text-sm w-1/3  lg:w-3/12 xl:w-3/12 2xl:w-3/12">
            <ul className="text-gray-300 w-full">
                <li className="cursor-pointer hover:text-blue-400  transition duration-500 ease-in-out"><Link to="/books">Home</Link></li>
                <li className="cursor-pointer hover:text-blue-400  transition duration-500 ease-in-out "><Link to="/book-track">Book Track</Link></li>
                <li className="cursor-pointer hover:text-blue-400  transition duration-500 ease-in-out"><Link to="/">Sign out</Link></li>
            </ul>
          </div>
            }
          </div>
          <div className="w-4/5 lg:w-3/12 xl:w-3/12 2xl:w-3/12">
            <div className="pt-1">
              <h1 className="font-semibold pb-3">Subscribe Us</h1>
            </div>
            <div className="w-full flex items-center bg-gray-200 pt-1 pb-1">
                    <div className="w-11/12">
                    <input type="text"
                     placeholder="Type Here..."
                     className="w-full bg-gray-200 text-black  pl-3 focus:outline-none"
                    />
                    </div>
                    <div><i class="fa fa-paper-plane text-gray-900 hover:text-blue-600 cursor-pointer" aria-hidden="true"></i></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
