import React, {useState} from 'react'
import Input from "../../components/input/input";
import google from "../../assets/images/google.png";
import fb from "../../assets/images/fb.png";
import { useDispatch, useSelector } from "react-redux";
import "./signUp.css";
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";
import * as Actions from "../../redux/actions"
import reducer from "../../redux/reducers";
import withReducer from "../../store/withReducer";
import Loader from "../../components/Loader/Loader";
import SnackBarMsg from "../../components/ErrorMessage/ErrorSnackBar";
import setAuthorizationToken from "../../utils/authorization/authorization";

function Signup(props) {
  const dispatch = useDispatch();
  const history= useHistory();
  const [isLoading, setIsLoading] = useState(false)
  const [isSnackbar, setIsSnackBar] = useState(false);
  const [snackBarMesssage, setSnackBarMessage] = useState("");
  const [snackBarSverity, setSnackBarSverity] = useState("error");
  const [inputValueState, setInputValueState] = React.useState({
      inputValues:{
        first_name : "",
        last_name : "",
        email : "",
        password : "",
        confirm_password:"",
        role :"buyer"
    }
  }
  )



  const add_confirmation = useSelector(
    ({ SignUpReducers }) => SignUpReducers.signUpReducers
  );

  const sign_in_confirmation = useSelector(
    ({ SignUpReducers }) => SignUpReducers.signInReducers
  )
  React.useEffect(()=> {
    if (props.location && props.location.state && props.location.state.from == "signOut") {
      localStorage.clear()
      add_confirmation.data = {};
      sign_in_confirmation.data = {};
      dispatch(Actions.signOut(true));
      dispatch(Actions.resetSignIn({}));
    }
  }, [props.location.state])


  React.useEffect(() => {
    console.log(add_confirmation.data, "data")
    if (add_confirmation.data && add_confirmation.data.success === true) {
      setIsLoading(false)
      localStorage.setItem('token', add_confirmation.data.user.token);
      localStorage.setItem('userName', add_confirmation.data.user.userName);
      setAuthorizationToken(add_confirmation.data.user.token)
      history.push({
        pathname: "/books"
      })
    }
    else if (add_confirmation.isLoading) {
      setIsLoading(true);
    }
    if (add_confirmation.errMsg) {
      setIsSnackBar(true)
      setSnackBarSverity("error")
      setSnackBarMessage(add_confirmation.errMsg)
      setIsLoading(false)
    }

  }, [add_confirmation, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {inputValues}   = inputValueState;
    const {password, confirm_password} = inputValues
    if(password.length >=8 && password === confirm_password && confirm_password.length >=8 ){
      setIsLoading(true)
      dispatch(Actions.signUpService(inputValues))
      // signUpService(inputValues)
    }
    else{
      setIsSnackBar(true)
      setSnackBarSverity("error")
      setSnackBarMessage("password did match or password should be greater than 8 length")
      setIsLoading(false)
      // alert("password did match or password should be greater than 8 length");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const {inputValues}   = inputValueState;
    setInputValueState({
        inputValues: {
            ...inputValues,
            [name]: value,
        }
    })
  }
  return (
    <div>
      {isSnackbar && <SnackBarMsg snackBarSverity={snackBarSverity} snackBarMesssage={snackBarMesssage} setIsSnackBar={setIsSnackBar}/>}
    {
      isLoading 
      ? <Loader />
      :
      <div className="flex">
      <div className="hidden lg:block xl:block 2xl:block sign-up w-3/5">
      </div>
      <div className=" w-full  lg:w-2/5 xl:w-2/5 2xl:w-2/5 h-screen bg-gray-900  flex flex-col justify-center items-center" required>
        <form onSubmit={handleSubmit} className="w-3/5">
          <div className="flex justify-center pb-2">
            <p className="text-2xl font-semibold text-white text-lg">Sign Up</p>
          </div>
          <div className="flex justify-center pb-4">
            <div className="rounded-full p-2  text-white">
            <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div>
            <Input placeholder="First Name" type="text" name={"first_name"} onChange={handleChange}/>
          </div>
          <div className="pt-2">
            <Input placeholder="Last Name" type="text" name={"last_name"}  onChange={handleChange}/>
          </div>
          <div className="pt-2">
            <Input placeholder="Email" type="email" name={"email"}  onChange={handleChange}/>
          </div>
          <div className="pt-2">
            <Input placeholder="Password" type="password" name={"password"}  onChange={handleChange}/>
          </div>
          <div className="pt-2">
            <Input placeholder="Confirm Password" type="password" name={"confirm_password"}  onChange={handleChange}/>
          </div>
          <div className="pt-2">
            <select  onChange={handleChange} name="role" style={{background: "#111827"}} className="w-full border rounded border-gray-200 border-opacity-30 focus:outline-none focus:ring-1 focus:ring-blue-600  bg-transparent pt-2 pb-2 pl-2 outline-none text-white text-base">
              <option value="seller">Seller</option>
              <option value="buyer" selected>Buyer</option>
            </select>
          </div>
          <div className="flex justify-center pt-4">
            <button className="w-full bg-blue-600 rounded focus:outline-none pt-1 pb-1 pl-3 pr-3 text-white text-lg hover:bg-blue-500">
              Sign Up
            </button>
          </div>
        </form>
        <div className="pt-4">
          <p className="text-gray-700 text-sm">
            &#x23AF; &#x23AF; &#x23AF; &#x23AF; &#x23AF;Or Connect With&#x23AF;
            &#x23AF; &#x23AF; &#x23AF; &#x23AF;
          </p>
        </div>
        <div className="flex justify-center pt-4">
          <div>
            <button className="flex items-center mr-2 border-2 border-blue-600 border-opacity-40 focus:outline-none rounded pt-1 pb-1 pl-3 pr-3 text-white text-lg hover:bg-blue-500">
              <img src={google} className="mr-2" alt="google"/>Google
            </button>
          </div>
          <div>
            <button className="flex items-center ml-2 border-2 border-blue-600 border-opacity-40 focus:outline-none rounded pt-1 pb-1 pl-3 pr-3 text-white text-lg hover:bg-blue-500">
            <img src={fb} className="mr-2" alt="facebook"/>Facebook
            </button>
          </div>
        </div>
        <div className="flex justify-center pt-4 text-gray-700 text-sm">
          <p>Already have an account? <span className="text-blue-600 cursor-pointer hover:text-blue-500" onClick={()=>{history.push('/sign-in')}}>Log In</span></p>
        </div>
      </div>
    </div>
    }
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.app.users,
//     userRecord: state.app.importProductRecord,
//     user: state.app.user,
//   };
// };
export default withReducer("SignUpReducers", reducer)(Signup);

// export default connect(null, mapDispatchToProps)(Signup);
