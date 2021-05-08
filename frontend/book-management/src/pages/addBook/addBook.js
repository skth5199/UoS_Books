import React, {useState} from 'react'
import Para from "../../components/paragrapgh/para";
import Nav from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import "./addBook.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import * as Actions from "../../redux/actions"
import reducer from "../../redux/reducers";
import withReducer from "../../store/withReducer";
import Loader from "../../components/Loader/Loader";
import SnackBarMsg from "../../components/ErrorMessage/ErrorSnackBar";
import setAuthorizationToken from "../../utils/authorization/authorization";
import { useDispatch, useSelector } from "react-redux";

function Addbook() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const [isSnackbar, setIsSnackBar] = useState(false);
  const [snackBarMesssage, setSnackBarMessage] = useState("");
  const [snackBarSverity, setSnackBarSverity] = useState("error");
  const [inputValueState, setInputValueState] = React.useState({
    inputValues:{
      image : "",
      author_name : "",
      category : "",
      book_name : "",
      w3review:"",
  }
}
)
React.useEffect(() => {
  if (localStorage.token) {
    setAuthorizationToken(localStorage.token)
  }
}, []);
const handleSubmit = (e) => {
  e.preventDefault();
  const {inputValues}   = inputValueState;
  dispatch(Actions.addBook(inputValues))
};

const add_confirmation = useSelector(
  ({ AddBookReducers }) => AddBookReducers.addBookReducers
);

React.useEffect(() => {
  console.log(add_confirmation, "data")
  if (add_confirmation && add_confirmation.data && add_confirmation.data.success === true) {
    setIsSnackBar(true)
    setSnackBarSverity("success")
    setSnackBarMessage("successfully added book")
    setIsLoading(false)
    dispatch(Actions.resetaddBook(true))
  }
  else if (add_confirmation.isLoading) {
    setIsLoading(true);
  }
  if (add_confirmation.errMsg) {
    setIsSnackBar(true)
    setSnackBarSverity("error")
    setSnackBarMessage(add_confirmation.errMsg)
    setIsLoading(false)
    dispatch(Actions.resetaddBook(true))
  }

}, [add_confirmation, dispatch]);

const handleChange = (e) => {
  e.preventDefault();
  let { name, value } = e.target;
  if (name === 'image') {
    value = e.target.files[0]
  }
  const {inputValues}   = inputValueState;
  setInputValueState({
      inputValues: {
          ...inputValues,
          [name]: value,
      }
  })
}

  return (
    <>
      <Nav />
      <div className="add-book-hero-image"></div>
      <div className="flex justify-center pt-10 pb-12 ">
        <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
          <div className="pt-5">
            <div className="text-center w-full text-2xl font-medium">
              <Para text="How it works?" />
            </div>
            <div className="text-center pt-3 text-gray-500">
              <Para text="Add a book to sell, with title, author, category and description and get contact details of potential buyer!" />
            </div>
          </div>
        </div>
      </div>
      <div>
      {isSnackbar && <SnackBarMsg snackBarSverity={snackBarSverity} snackBarMesssage={snackBarMesssage} setIsSnackBar={setIsSnackBar}/>}
        {
          isLoading 
          ? <Loader />
          :
         <div className="flex justify-center pt-6 lg:pt-10 xl:pt-10 2xl:pt-10 pb-12 ">
        <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
          <form className="flex justify-center" onSubmit={handleSubmit}>
            <div className="w-full ">
              <div className="w-4/5 pt-4">
                <div className="flex flex-col">
                  <div className="pb-3 text-xl font-semibold">
                    <Para text="Add Book" />
                  </div>
                  <p className="font-bold text-sm pb-1  ">Select cover</p>
                </div>
                <div className="flex ">
                  <input
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    required
                    className="focus:outline-none w-full "
                    name="image"
                    onChange={handleChange}
                  />
                </div>
              </div>
                <div className="w-2/5 pt-4">
                  <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    onChange={handleChange}
                    required
                    className="w-full border rounded-full bg-gray-100 border-gray-200 border-opacity-30 focus:outline-none focus:ring-1 focus:ring-blue-600  bg-transparent pt-2 pb-2 pl-2 outline-none text-black text-base"
                  />
                </div>
                <div className="flex justify-between items-center pt-4">
                <div className="w-2/5">
                  <input
                    type="text"
                    placeholder="Book Name"
                    name="book_name"
                    onChange={handleChange}
                    required
                    className="w-full border rounded-full bg-gray-100 border-gray-200 border-opacity-30 focus:outline-none focus:ring-1 focus:ring-blue-600  bg-transparent pt-2 pb-2 pl-2 outline-none text-black text-base"
                  />
                </div>
                <div className="w-2/5">
                  <input
                    type="text"
                    placeholder="Author Name"
                    name="author_name"
                    onChange={handleChange}
                    required
                    className="w-full border rounded-full bg-gray-100 border-gray-200 border-opacity-30 focus:outline-none focus:ring-1 focus:ring-blue-600  bg-transparent pt-2 pb-2 pl-2 outline-none text-black text-base"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full pt-4">
                  <textarea
                    id="w3review"
                    name="w3review"
                    onChange={handleChange}
                    rows="7"
                    className="resize-none w-full outline-none pl-2 pt-2 bg-gray-100 border-gray-200 border-opacity-30 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Write Book Description..."
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <button className="bg-gray-900 hover:text-blue-500 border border-transparent hover:border-blue-500 rounded-full text-white text-sm pr-4 pl-4 pt-2 pb-2 focus:outline-none ">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
        }
      </div>
      <Footer />
    </>
  );
}
export default withReducer("AddBookReducers", reducer)(Addbook);
