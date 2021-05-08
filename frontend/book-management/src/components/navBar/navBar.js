import { useState, useEffect} from "react"
import Para from '../../components/paragrapgh/para'
import BookNotification from "../notificationMessage/bookNotification"
import jwt_decode from "jwt-decode";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Nav(props) {
  const[showMenu , setShowMenu]=useState(false);
  const [role, setRole] = useState("buyer");
  const [user_name, setUserName] = useState("User Name");
  useEffect(()=> {
    const token = window.localStorage.getItem('token');
    if (localStorage.getItem('userName')) {
      setUserName(localStorage.getItem('userName'));
    }
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
      <>
      
        <div className="sticky -top-1 bg-gray-900 text-white bg-opacity-90 flex justify-center items-center pt-4 pb-3 z-40">
            <div className="flex justify-between items-center w-11/12  xl:w-4/5 2xl:w-2/5">
            <div className="logo w-1/5">
                <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-semibold">Southampton</h1>
            </div>
            {
              role === "seller" ?
            <div className="w-2/5 font-semibold hidden lg:block xl:block 2xl:block">
                <ul className="flex justify-between ">
                    <li className="cursor-pointer hover:text-blue-400 border-b border-transparent hover:border-white transition duration-500 ease-in-out"><Link to="/books">Home</Link></li>
                    <li className="cursor-pointer hover:text-blue-400 border-b border-transparent hover:border-white transition duration-500 ease-in-out "><Link to="/add-book">Add Book</Link></li>
                    <li className="cursor-pointer hover:text-blue-400 border-b border-transparent hover:border-white transition duration-500 ease-in-out "><Link to="/book-status">Your Books</Link></li>
                    <li className="cursor-pointer hover:text-blue-400 border-b border-transparent hover:border-white transition duration-500 ease-in-out "><Link to="/book-track">Book Track</Link></li>
                    <li className="cursor-pointer hover:text-blue-400 border-b border-transparent hover:border-white transition duration-500 ease-in-out"><Link to={{pathname: '/', state: {from: 'signOut'}}}>Sign out</Link></li>
                </ul>
            </div>
            : 
            <div className="w-2/5 font-semibold hidden lg:block xl:block 2xl:block">
                <ul className="flex justify-between ">
                    <li className="cursor-pointer hover:text-blue-400 border-b border-transparent hover:border-white transition duration-500 ease-in-out"><Link to="/books">Home</Link></li>
                    <li className="cursor-pointer hover:text-blue-400 border-b border-transparent hover:border-white transition duration-500 ease-in-out "><Link to="/book-track">Book Track</Link></li>
                    <li className="cursor-pointer hover:text-blue-400 border-b border-transparent hover:border-white transition duration-500 ease-in-out"><Link to={{pathname: '/', state: {from: 'signOut'}}}>Sign out</Link></li>
                </ul>
            </div>
            }
            <div className="font-semibold w-1/5 text-right hidden lg:block xl:block 2xl:block">
                <Para text={user_name}/>
             </div>
             {
               role === "seller" &&
             <div className="font-semibold w-1/5 text-right hidden lg:block xl:block 2xl:block">
                <BookNotification/>
             </div>
            }
             <div className="hover:text-blue-500 text-xl pt-1 block lg:hidden xl:hidden 2xl:hidden" onClick={()=>{setShowMenu(true)}}>
              <p ><i class="fa fa-bars" aria-hidden="true"></i></p>
               </div>
             </div>
        </div>
        {/* responsive menu */}
        {showMenu ? 
        role == "seller" ?
        <div className="fixed right-0 top-0 bottom-0 h-full z-50 text-white bg-black w-4/5">
        <div className="pt-6">
          <div className="pt-4 text-2xl text-right w-full pr-4" onClick={()=>{setShowMenu(false)}}> &times;</div>
          <div className="w-full flex justify-center pt-4">
        <ul>
               <li className="cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out"><Link to="/books">Home</Link></li>
               <li className="cursor-pointer hover:text-blue-400 mt-3 transition duration-500 ease-in-out "><Link to="/add-book">Add Book</Link></li>
               <li className="cursor-pointer hover:text-blue-400 mt-3 transition duration-500 ease-in-out "><Link to="/book-status">Your Books</Link></li>
               <li className="cursor-pointer hover:text-blue-400 mt-3 transition duration-500 ease-in-out "><Link to="/book-track">Books Track</Link></li>
               <li className="cursor-pointer hover:text-blue-400 mt-3 transition duration-500 ease-in-out"><Link to={{pathname: '/', state: {from: 'signOut'}}}>Sign out</Link></li>
           </ul>
           </div>
          </div>
       </div>
        :
        <div className="fixed right-0 top-0 bottom-0 h-full z-50 text-white bg-black w-4/5">
        <div className="pt-6">
          <div className="pt-4 text-2xl text-right w-full pr-4" onClick={()=>{setShowMenu(false)}}> &times;</div>
          <div className="w-full flex justify-center pt-4">
        <ul>
               <li className="cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out"><Link to="/books">Home</Link></li>
               <li className="cursor-pointer hover:text-blue-400 mt-3 transition duration-500 ease-in-out "><Link to="/book-track">Book Track</Link></li>
               <li className="cursor-pointer hover:text-blue-400 mt-3 transition duration-500 ease-in-out"><Link to={{pathname: '/', state: {from: 'signOut'}}}>Sign out</Link></li>
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
  