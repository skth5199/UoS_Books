import React, {useState} from 'react';
import Nav from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
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

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Container,
  Col,
  Badge,
  Input,
  Alert,
  UncontrolledTooltip
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
  React.useEffect(() => {
    setIsLoading(true)
    if (localStorage.token) {
      setAuthorizationToken(localStorage.token)
    }
    dispatch(Actions.getAllBooksByUser())
  }, []);
  const dispatch = useDispatch();
  const add_confirmation = useSelector(
    ({ BookStatusReducers }) => BookStatusReducers.getAllBooksByUserReducers
  );
  const book_status_confirmation = useSelector(
    ({ BookStatusReducers }) => BookStatusReducers.updateBookStatusReducers
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
        setIsSnackBar(true)
        setSnackBarSverity("success")
        setSnackBarMessage(book_status_confirmation.data.response)
        setIsLoading(false)
        dispatch(Actions.resetaddBook(true))
       dispatch(Actions.getAllBooksByUser())

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

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/books");
  };

  const soldButtonClick = (data) => {
    console.log("clicked", data);

    dispatch(Actions.updateBookstatus({book_id: data.id, status:'sold'}))
  };


  const deleteButtonClick = (data) => {
    dispatch(Actions.delteBook({book_id: data.id}))
  }
  const columns = [
    {
      name: 'Book Name',
      selector: 'book_name',
      sortable: true,
    },
    {
      name: 'Author Name',
      selector: 'author_name',
      sortable: true,
      // right: true,
    },
    {
      name: "Current Status",
      selector: 'status',
      sortable: true,
    },
    {
      name : "Actions",
      cell: (row) => (
        <>
        {row.status !=="booked" && (
          <>
                    <Button
                    variant="contained" 
                    color="primary"
                    startIcon={<AssignmentTurnedInRoundedIcon/>}
                    onClick={() => soldButtonClick(row)} 
                    size="small">Sold
                    </Button>
                    <Button
                    style={{margin:"1em"}}
                    variant="contained" 
                    color="secondary"
                    onClick={() => deleteButtonClick(row)} 
                    startIcon={<DeleteIcon/>}
                    size="small">Delete
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
          <Card className="mt-10 mx-auto" style={{width:"80%"}}>    
            <CardHeader>
              <CardTitle style={{fontSize:"2em", textAlign:"center", fontSize:"3em"}}>Books Status</CardTitle>
            </CardHeader>
            <CardBody>
              <DataTable
                data={add_confirmation && add_confirmation.data.success === true && add_confirmation.data.books}
                columns={columns}
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
    </React.Fragment>
  );
}

export default withReducer("BookStatusReducers", reducer)(BookStatus);
