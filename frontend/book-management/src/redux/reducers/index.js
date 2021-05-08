import { combineReducers } from "redux";
import { signUpReducers, signInReducers, addBookReducers,
     getAllBooksByUserReducers, updateBookStatusReducers,
      getBookedBooksReducers, updateBookingStatusReducers, searchByFieldReducers, createBookReducers, getNotificationReducers } from "./reducers";

const reducer = combineReducers({
    signUpReducers,
    signInReducers,
    addBookReducers, 
    getAllBooksByUserReducers,
    updateBookStatusReducers, 
    getBookedBooksReducers,
    updateBookingStatusReducers,
    addBookReducers,
    searchByFieldReducers,
    createBookReducers,
    getNotificationReducers
});

export default reducer;
