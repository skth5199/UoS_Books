import React, {useState, useEffect} from 'react';
import Nav from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import Chatboot from "../../components/chatbot/chatbot";
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import * as Icon from "react-feather";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button'
import DataTable from 'react-data-table-component';
import * as Actions from "../../redux/actions"
import reducer from "../../redux/reducers";
import withReducer from "../../store/withReducer";
import Loader from "../../components/Loader/Loader";
import SnackBarMsg from "../../components/ErrorMessage/ErrorSnackBar";
import { useDispatch, useSelector } from "react-redux";
import setAuthorizationToken from "../../utils/authorization/authorization";

import jwt_decode from "jwt-decode";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
const customStyles = {
  headRow: {
    style: {
      // border: 'none',
      backgroundColor: "#F5F5F5",
    },
  },
  headCells: {
    style: {
      color: "#202124",
      fontSize: "18px",
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: "rgb(230, 244, 244)",
      borderBottomColor: "#FFFFFF",
      borderRadius: "25px",
      outline: "1px solid #FFFFFF",
    },
  },
  pagination: {
    style: {
      border: "none",
    },
  },
};
function BookStatus(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSnackbar, setIsSnackBar] = useState(false);
  const [snackBarMesssage, setSnackBarMessage] = useState("");
  const [snackBarSverity, setSnackBarSverity] = useState("error");
  const [role, setRole] = useState("")
  const dispatch = useDispatch();
  React.useEffect(() => {
    setIsLoading(true)
    if (localStorage.token) {
      setAuthorizationToken(localStorage.token)
      const decodedToken = jwt_decode(localStorage.token);
      const {role} = decodedToken;
      setRole(role);
    }
    dispatch(Actions.getBookedBooks())
  }, []);
  const history = useHistory();

  const add_confirmation = useSelector(
    ({ BookedBookStatusReducers }) => BookedBookStatusReducers.getBookedBooksReducers
  );
  const book_status_confirmation = useSelector(
    ({ BookedBookStatusReducers }) => BookedBookStatusReducers.updateBookingStatusReducers
  )

  React.useEffect(() => {
    console.log(add_confirmation, "data")
    if (add_confirmation && add_confirmation.data && add_confirmation.data.success === true) {
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

  React.useEffect(() => {
    console.log(book_status_confirmation, "BOOK")
    if (book_status_confirmation && book_status_confirmation.data && book_status_confirmation.data.success === true) {
      console.log(book_status_confirmation.data, "ALIIIIIII")
        setIsSnackBar(true)
        setSnackBarSverity("success")
        setSnackBarMessage(book_status_confirmation.data.msg)
        setIsLoading(false)
       dispatch(Actions.getBookedBooks())

    }
    else if (book_status_confirmation.isLoading) {
      setIsLoading(true);
    }
    if (book_status_confirmation.errMsg) {
      setIsSnackBar(true);
      setSnackBarSverity("error");
      setSnackBarMessage(add_confirmation.errMsg);
      setIsLoading(false);
    }
  
  }, [book_status_confirmation, dispatch]);


  const soldButtonClick = (data) => {
    dispatch(Actions.updateBookingStatus({booking_id: data.id, status:'sold'}))
  };


  const freeButtonClick = (data) => {
    dispatch(Actions.updateBookingStatus({booking_id: data.id, status: 'new'}))
  }

  const columns = [
    {
      name: 'Book Name',
      selector: 'book_name',
      sortable: true,
    },
    {
      name: 'Buyer Name',
      selector: 'buyer_name',
      sortable: true,
      // right: true,
    },
    {
        name: 'Phone No',
        selector: 'phone_no',
        sortable: true,
        // right: true,
    },
    {
        name: 'Address',
        selector: 'address',
        sortable: true,
        // right: true,
    },
    {
      name: "Current Status",
      selector: 'current_status',
      sortable: true,
    },
    {
      name : "Actions",
      cell: (row) => (
        <>
        {row.current_status =="booked" && (
          <>
            <Button
                variant="contained" 
                color="primary"
                // startIcon={<AssignmentTurnedInRoundedIcon/>}
                onClick={() => soldButtonClick(row)} 
                size="small"
            >
                    Sold
            </Button>
            <Button
                style={{margin:"1em"}}
                variant="contained" 
                color="secondary"
                onClick={() => freeButtonClick(row)} 
                // startIcon={<DeleteIcon/>}
                size="small"
            >
                Free
            </Button>
         </>
          )}
        </>        

      ),
    }
  ];

  return (
    <React.Fragment>
      <Nav />
      <Row>
      {isSnackbar && <SnackBarMsg snackBarSverity={snackBarSverity} snackBarMesssage={snackBarMesssage} setIsSnackBar={setIsSnackBar}/>}
        {
        isLoading 
        ? <Loader />
        :
      <Col sm="12">
          <Card className="mt-10 mx-auto" style={{width:"90%"}}>    
            <CardHeader>
              <CardTitle style={{fontSize:"2em", textAlign:"center", fontSize:"3em"}}>Buyer Books Status</CardTitle>
            </CardHeader>
            <CardBody>
              <DataTable
                data={add_confirmation && add_confirmation.data && add_confirmation.data.bookings}
                columns={role === "buyer" ? columns.pop() && columns: columns}
                pagination
                noHeader
                subHeader
                customStyles={customStyles}
                highlightOnHover
                pointerOnHover
                // fixedHeader
                // fixedHeaderScrollHeight="600px"
                // progressPending={loading}
              />
            </CardBody>
          </Card>
        </Col>
        }
     </Row>
      <Footer />
      <Chatboot />
    </React.Fragment>
  );
}

export default withReducer("BookedBookStatusReducers", reducer)(BookStatus);
