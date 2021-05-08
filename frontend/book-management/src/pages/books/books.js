import React, {useState, useEffect} from 'react';
import Card from "../../components/card/card";
import Para from "../../components/paragrapgh/para";
import Book from "../../assets/images/book-1.jpg";
import Book2 from "../../assets/images/300-questions.jpg";
import Chatboot from "../../components/chatbot/chatbot";
import Nav from "../../components/navBar/navBar";
import Search from "../../components/searchBook/searchBook";
import Footer from "../../components/footer/footer";
import * as Actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import reducer from "../../redux/reducers";
import withReducer from "../../store/withReducer";
import setAuthorizationToken from "../../utils/authorization/authorization";
// import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '@material-ui/core/Button'
import UserModel from "../../components/model/model";
import Loader from "../../components/Loader/Loader";
import SnackBarMsg from "../../components/ErrorMessage/ErrorSnackBar";
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

import "./book.css";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
function Books() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [booksRows, setBooksRows] = useState([])
  const [bookId, setBookId] = useState("")
  const [isSnackbar, setIsSnackBar] = useState(false);
  const [snackBarMesssage, setSnackBarMessage] = useState("");
  const [snackBarSverity, setSnackBarSverity] = useState("error");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setPage] = React.useState(1);
  const [totalLength, setTotalLength]= React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [defaultBooks , setDefaultBooks] = useState([])

  const classes = useStyles();
  const TOTAL_ITEM_PER_PAGE = 13;
  
  const add_confirmation = useSelector(
    ({ searchByFieldReducer }) => searchByFieldReducer.searchByFieldReducers
  );


  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(()=>{
    if (localStorage.token) {
      setAuthorizationToken(localStorage.token)
    }
    dispatch(Actions.searchByField({search: ""}))
  }, [])
  
  const onSearchClickHandler = (inputValues) =>{
    setIsLoading(true);
    dispatch(Actions.searchByField({...inputValues}))
    setPage(1)
  }
  useEffect(() => {
    setIsSnackBar(false)
    if (add_confirmation && add_confirmation.data && add_confirmation.data.success === true) {
      const booksRows = chunkBooks(add_confirmation.data.response, 5)
      setDefaultBooks(add_confirmation.data.response)
      setTotalLength(add_confirmation.data.response.length)
      const totalPages = Math.ceil(add_confirmation.data.response.length / TOTAL_ITEM_PER_PAGE);
      setTotalPages(totalPages)
      if(add_confirmation.data.response && add_confirmation.data.response.length > 0){
        setIsSnackBar(true)
        setSnackBarSverity("success")
        setSnackBarMessage("Book found sucessfully")
      }
      else{
        setIsSnackBar(true)
        setSnackBarSverity("error")
        setSnackBarMessage("Book was not found")
      }
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
      // dispatch(Actions.resetaddBook(true))
    }
  
  }, [add_confirmation, dispatch]);

  useEffect(() => {
    let startIndex = 0;
    let endIndex = 0;
    if (endIndex > totalLength) {
      endIndex = totalLength - 1;
    }
    if (currentPage-1 === 0) {
      startIndex = 0;
      endIndex = TOTAL_ITEM_PER_PAGE;
    }
    else{
      startIndex = (currentPage-1) * TOTAL_ITEM_PER_PAGE;
      endIndex =
        ((currentPage-1) * TOTAL_ITEM_PER_PAGE - 1) + (TOTAL_ITEM_PER_PAGE + 1);
    }
    const perPageHF = defaultBooks.slice(startIndex, endIndex);
    
    const chunkedBooks = chunkBooks(perPageHF, 5)
    setBooksRows(chunkedBooks);
  }, [currentPage, defaultBooks]);

  const chunkBooks = (books, chunk_size)=>{
    var index = 0;
    var chunkedArray = [];
    
    for (index = 0; index < books.length; index === 5 ? index += 3 : index += chunk_size) {
        const myChunk = books.slice(index, index === 5 ? index+3 : index+chunk_size);
        // Do something if you want with the group
        chunkedArray.push(myChunk);
    }

    return chunkedArray;
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleBuy = (id)=> {
    handleClickOpen()
    setBookId(id)
  }
  return (
    <>
      <Nav />
      <UserModel open={open} handleCloseCallBack={handleClose} bookId={bookId} />
      {isSnackbar && <SnackBarMsg snackBarSverity={snackBarSverity} snackBarMesssage={snackBarMesssage} setIsSnackBar={setIsSnackBar}/>}
      { isLoading ? <Loader />:
      <div>
      <div className="books-list-hero-image">
        <div className="w-full lg:w-3/5 xl:w-3/5 2xl:w-3/5 ">
          <div className="w-full  text-center text-white text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl  font-semibold pb-4">
            <Para text="Buy and Sell Books" />
          </div>
          <div className="flex justify-center  pb-4 pt-2 lg:pt-4 xl:pt-4 2xl:pt-4" >
          <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
          <div className="w-full flex ">
            <Search onSearchClickHandler={onSearchClickHandler}/>
          </div>
          </div>
          </div>
        </div>
      </div>
      {/* About and how it work */}
      <div id="about" className="pb-4"></div>
      <div className="flex justify-center pt-10 pb-12" >
        <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
          <div>
            <div className="text-center w-full text-2xl font-medium">
              <Para text="About" />
            </div>
            <div className="text-center pt-3 text-gray-500">
              <Para text="A marketplace for selling books" />
            </div>
          </div>
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
      {/* About and how it work ends */}
      {
        booksRows && booksRows.map((row, index)=>{
          return(
            index === 0 
            ? <div className="flex justify-center pt-10 pb-12">
              <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
                <div className="flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row justify-between">
                  {/* single book card full width */}
                  {row.map((bookData)=>{
                  return(
                      <div className="book-card mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 w-full lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
                          <Card src={bookData.image} heading= {bookData.title} />
                          <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                              <div className="flex w-full h-full justify-center items-center">
                              <div>
                                  <div className="w-full text-center text-xl">
                                  <Para text={bookData.title} />
                                  </div>
                                  <div className="w-full text-center text-sm">
                                  <Para text={`By: ${bookData.author}`} />
                                  </div>
                                  <div className="text-sm pt-2">
                                  <Para text={bookData.description} />
                                  </div>
                                  <div>
                                  <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary"  size="medium" onClick={()=>handleBuy(bookData.id)}>Buy Book</Button>
                                  </div>
                              </div>
                              </div>
                          </div>
                      </div>
                      )
                    })}
                </div>
              </div>
            </div>
            : index === 1
            ? 
            <div className="lib-book-bg flex  justify-center pt-10 pb-10">
            <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
              <div className="flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row  justify-between">
                {/* single book card full width */}
                {
                  row.map((bookData)=>{
                    return(
                      <div className="book-card w-full lg:w-3/12 xl:w-3/12 2xl:w-3/12 mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 relative bg-white cursor-pointer">
                      <Card src={bookData.image} heading={bookData.title} />
                        <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                          <div className="flex w-full h-full justify-center items-center">
                            <div>
                              <div className="w-full text-center text-xl">
                                <Para text={bookData.title} />
                              </div>
                              <div className="w-full text-center text-sm">
                                <Para text={`By: ${bookData.author}`} />
                              </div>
                              <div className="text-sm pt-2">
                                <Para text={bookData.description}  />
                              </div>
                              <div>
                                <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={()=>handleBuy(bookData.id)}  size="medium">Buy Book</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                {/* single book card full width end */}
              </div>
            </div>
          </div>
          : <div className="flex justify-center pt-10 pb-12">
          <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
            <div className="flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row justify-between">
              {/* single book card full width */}
              {row.map((bookData)=>{
              return(
                  <div className="book-card mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 w-full lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
                      <Card src={bookData.image} heading= {bookData.title} />
                      <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                          <div className="flex w-full h-full justify-center items-center">
                          <div>
                              <div className="w-full text-center text-xl">
                              <Para text={bookData.title} />
                              </div>
                              <div className="w-full text-center text-sm">
                              <Para text={`By: ${bookData.author}`} />
                              </div>
                              <div className="text-sm pt-2">
                              <Para text={bookData.description} />
                              </div>
                              <div>
                              <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary"  size="medium" onClick={()=>handleBuy(bookData.id)}>Buy Book</Button>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
                  )
                })}
            </div>
          </div>
        </div>
          )
        })
      }
      {
       defaultBooks && defaultBooks.length >0 && <div style={{marginTop: "20px", marginBottom: "20px", display: "flex", alignItems: "center",
        justifyContent: "center" }}>
          <div className={classes.root}>
            <Pagination variant="outlined" color="secondary" count={totalPages} page={currentPage} onChange={handleChange} />
          </div>
        </div> 
      
        }
      </div>
      }
      <Footer />
      <Chatboot />
    </>
  );
}

export default withReducer("searchByFieldReducer", reducer)(Books);
