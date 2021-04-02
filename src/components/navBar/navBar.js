import { useState} from "react"
import Para from '../../components/paragrapgh/para'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Nav(props) {
  
  const[showMenu , setShowMenu]=useState(false);
    return (
      <>
      
        <div className="sticky -top-1 bg-gray-900 text-white bg-opacity-90 flex justify-center items-center pt-4 pb-3 z-40">
            <div className="flex justify-between items-center w-11/12  xl:w-4/5 2xl:w-2/5">
            <div className="logo w-1/5">
                <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-semibold">UoS</h1>
            </div>
            <div className="w-2/5 font-semibold hidden lg:block xl:block 2xl:block">
                <ul className="flex justify-between ">
                    <li className="cursor-pointer hover:text-blue-400 border-b border-transparent hover:border-white transition duration-500 ease-in-out"><Link to="/books">Home</Link></li>
                    <li className="cursor-pointer hover:text-blue-400 border-b border-transparent hover:border-white transition duration-500 ease-in-out "><Link to="/add-book">Add Book</Link></li>
                    <li className="cursor-pointer hover:text-blue-400 border-b border-transparent hover:border-white transition duration-500 ease-in-out "><Link to="/book-status">Books status</Link></li>
                    <li className="cursor-pointer hover:text-blue-400 border-b border-transparent hover:border-white transition duration-500 ease-in-out"><Link to="/">Sign out</Link></li>
                </ul>
            </div>
            <div className="font-semibold w-1/5 text-right hidden lg:block xl:block 2xl:block">
                <Para text="UserName"/>
             </div>
             <div className="hover:text-blue-500 text-xl pt-1 block lg:hidden xl:hidden 2xl:hidden" onClick={()=>{setShowMenu(true)}}>
              <p ><i class="fa fa-bars" aria-hidden="true"></i></p>
               </div>
             </div>
        </div>
        {/* responsive menu */}
        {showMenu ? 
        <div className="fixed right-0 top-0 bottom-0 h-full z-50 text-white bg-black w-4/5">
             <div className="pt-6">
               <div className="pt-4 text-2xl text-right w-full pr-4" onClick={()=>{setShowMenu(false)}}> &times;</div>
               <div className="w-full flex justify-center pt-4">
             <ul>
                    <li className="cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out"><Link to="/books">Home</Link></li>
                    <li className="cursor-pointer hover:text-blue-400 mt-3 transition duration-500 ease-in-out "><Link to="/add-book">Add Book</Link></li>
                    <li className="cursor-pointer hover:text-blue-400 mt-3 transition duration-500 ease-in-out "><Link to="/book-status">Book status</Link></li>
                    <li className="cursor-pointer hover:text-blue-400 mt-3 transition duration-500 ease-in-out"><Link to="/">Sign out</Link></li>
                </ul>
                </div>
               </div>
        </div>
        :""}
        {/* responsive menu */}
      </>
    );
  }
  
  export default Nav;
  