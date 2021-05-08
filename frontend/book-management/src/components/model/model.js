import React,  {useState, useEffect} from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@material-ui/core"
import * as Actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import reducer from "../../redux/reducers";
import withReducer from "../../store/withReducer";
import setAuthorizationToken from "../../utils/authorization/authorization";
import jwt_decode from "jwt-decode";
import Loader from "../Loader/Loader";
import SnackBarMsg from "../ErrorMessage/ErrorSnackBar";

function FormDialog({handleCloseCallBack, open, bookId}) {
  const [inputValueState, setInputValueState] = React.useState({
    inputValues:{
      phone_number : "",
      address : ""
    }
  })
  const [buyerId, setBuyerId] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [modelFlag, setModelFlag] = useState(false)
  const [isSnackbar, setIsSnackBar] = useState(false);
  const [snackBarMesssage, setSnackBarMessage] = useState("");
  const [snackBarSverity, setSnackBarSverity] = useState("error");

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
  const dispatch = useDispatch();
  const add_confirmation = useSelector(
    ({ createBookReducer }) => createBookReducer.createBookReducers
  );
  useEffect(()=>{
    if (localStorage.token) {
      setAuthorizationToken(localStorage.token)
      const decodedToken = jwt_decode(localStorage.token);
      const {id} = decodedToken;
      setBuyerId(id)
    }
  }, [])

  useEffect(()=>{
    modelFlag && !isLoading && handleCloseCallBack()
  }, [isLoading])

  useEffect(() => {
    setIsSnackBar(false)
    if (add_confirmation && add_confirmation.data && add_confirmation.data.success === true) {
      setIsSnackBar(true)
      setSnackBarSverity("success")
      setSnackBarMessage("Book was successfully Booked")
      setIsLoading(false)
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

  const onSubmitHandler = () =>{
    const createBookObj = {
      book_id: bookId,
      buyer_id: buyerId,
      ...inputValueState.inputValues,
    }
    dispatch(Actions.createBook(createBookObj))
    setIsLoading(true)
    setModelFlag(true)
  }
  return (
    <div>
      {isSnackbar && <SnackBarMsg snackBarSverity={snackBarSverity} snackBarMesssage={snackBarMesssage} setIsSnackBar={setIsSnackBar}/>}
      <Dialog open={open} onClose={handleCloseCallBack} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">User Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Please add phone no and address so we reach you better
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="phoneNo"
            label="Phone No"
            fullWidth
            type="number"
            name="phone_number"
            onChange = {handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            fullWidth
            name="address"
            onChange = {handleChange}
          />
          {isLoading&& <Loader />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCallBack} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmitHandler} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withReducer("createBookReducer", reducer)(FormDialog);