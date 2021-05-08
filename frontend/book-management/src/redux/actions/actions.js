// import {
//     SIGNUP
// } from "./action-types";
import axios from 'axios';

export const SIGNUP = "SIGNUP";
export const RESET_SIGN_UP= "RESET_SIGN_UP";
export const SIGNUP_FAILED = "SIGNUP_FAILED";
export const SIGNUP_LOADING = "SIGNUP_LOADING";

export const SIGNOUT = "SIGNOUT";

export const SIGNIN = "SIGNIN";
export const RESET_SIGN_IN = "RESET_SIGN_IN";
export const SIGNIN_FAILED = "SIGNIN_FAILED";
export const SINGIN_LOADING = "SINGIN_LOADING";

export const GET_BOOKS = "GET_BOOKS";
export const GET_BOOKS_FAILDED = "GET_BOOKS_FAILDED"
export const GET_BOOKS_LOADING = "GET_BOOKS_LOADING"
export const RESET_GET_BOOKS = "RESET_GET_BOOKS"


export const ADD_BOOK = "ADD_BOOK";
export const ADD_BOOK_FAILED = "ADD_BOOK_FAILED";
export const ADD_BOOK_LOADING = "ADD_BOOK_LOADING";
export const RESET_ADD_BOOK = "RESET_ADD_BOOK";

export const GET_BOOKS_BY_USER = "GET_BOOKS_BY_USER";
export const GET_BOOKS_BY_USER_FAILDED = "GET_BOOKS_BY_USER_FAILDED";
export const GET_BOOKS_BY_USER_LOADING = "GET_BOOKS_BY_USER_LOADING";
export const RESET_GET_BOOKS_BY_USER = "RESET_GET_BOOKS_BY_USER";

export const UPDATE_BOOK_STATUS = "UPDATE_BOOK_STATUS";

export const DELETE_BOOK = "DELETE_BOOK";

export const GET_BOOKED_BOOKS = "GET_BOOKED_BOOKS";

export const UPDATE_BOOKING_STATUS = "UPDATE_BOOKING_STATUS";
export const SEARCH_BY_FIELD = "SEARCH_BY_FIELD";
export const SEARCH_BY_FIELD_FAILED = "SEARCH_BY_FIELD_FAILED"
export const SEARCH_BY_FIELD_LOADING= "SEARCH_BY_FIELD_LOADING"
export const SEARCH_BY_FIELD_RESET = "SEARCH_BY_FIELD_RESET"

export const CREATE_BOOK = "CREATE_BOOK";
export const CREATE_BOOK_FAILED = "CREATE_BOOK_FAILED"
export const CREATE_BOOK_LOADING= "CREATE_BOOK_LOADING"
export const CREATE_BOOK_RESET = "CREATE_BOOK_RESET"

export const GET_NOTIFICATION = "GET_NOTIFICATION";
export const GET_NOTIFICATION_FAILED = "GET_NOTIFICATION_FAILED"
export const GET_NOTIFICATION_LOADING= "GET_NOTIFICATION_LOADING"
export const GET_NOTIFICATION_RESET = "GET_NOTIFICATION_RESET"

const baseUrl = "http://ec2-15-206-157-166.ap-south-1.compute.amazonaws.com/api/v1/"
// const localBaseUrl = "http://localhost:3000/api/v1/"
const signUp = (data) => ({
        type: SIGNUP,
        payload: data
})


export const resetSignUp = (ms) => ({
    type: RESET_SIGN_UP,
    payload: ms
})
export const signUpFailed = (ms) => ({
    type: SIGNUP_FAILED,
    payload: ms
})
export const signUpLoading = (ms) => ({
    type: SIGNUP_LOADING,
    payload: ms
})


export const signOut = (ms) =>({
    type: SIGNOUT,
    payload: ms
})


export const resetSignIn = (ms) =>({
    type: RESET_SIGN_IN,
    payload: ms
})
export const signInFailed = (ms) => ({
    type: SIGNIN_FAILED,
    payload: ms
})
export const signInLoading = (ms) => ({
    type: SINGIN_LOADING,
    payload: ms
})


export const getBooksLoading = (ms) => ({
    type: GET_BOOKS_LOADING,
    payload: ms
})
export const getBooksFailed = (ms) => ({
    type: GET_BOOKS_FAILDED,
    payload: ms
})
export const resetBooks = (ms) => ({
    type: RESET_GET_BOOKS,
    payload: ms
})


export const addBookLoading = (ms) => ({
    type: ADD_BOOK_LOADING,
    payload: ms
})
export const addBookFailed = (ms) => ({
    type: ADD_BOOK_FAILED,
    payload: ms
})
export const resetaddBook = (ms) => ({
    type: RESET_ADD_BOOK,
    payload: ms
})

export const getUserBooksLoadings = (ms) => ({
    type: GET_BOOKS_BY_USER_LOADING,
    payload: ms
})
export const getUserBooksFailed = (ms) => ({
    type: GET_BOOKS_BY_USER_FAILDED,
    payload: ms
})
export const resetgetUserBooks = (ms) => ({
    type: RESET_GET_BOOKS_BY_USER,
    payload: ms
})


export const signUpService = (data) =>{
    const request = axios.post(`${baseUrl}user/registerUser`,data);

    return (dispatch) => {
        dispatch(signUpLoading(true));

        request.then((response) => {
            console.log(response)
            if (response.status == "200") {
                dispatch({
                    type: SIGNUP,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            console.log(error);
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(signUpFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(signUpFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(signUpFailed("Network Error"))
            }
            else {
                dispatch(signUpFailed(error.message))
            }
        })
    }
}


export const signInService = (data) =>{
    const request = axios.post(`${baseUrl}user/signInUser`,data);

    return (dispatch) => {
        dispatch(signInLoading(true));

        request.then((response) => {
            // console.log(response)
            if (response.status == "200") {
                dispatch({
                    type: SIGNIN,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            // console.log(error);
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(signInFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(signInFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(signInFailed("Network Error"))
            }
            else {
                dispatch(signInFailed(error.message))
            }
        })
    }
}


export const getAllBooks = (data) =>{
    const request = axios.post(`${baseUrl}books/signInUser`,data);

    return (dispatch) => {
        dispatch(signInLoading(true));

        request.then((response) => {
            // console.log(response)
            if (response.status == "200") {
                dispatch({
                    type: SIGNIN,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            // console.log(error);
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(signInFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(signInFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(signInFailed("Network Error"))
            }
            else {
                dispatch(signInFailed(error.message))
            }
        })
    }
}

export const addBook = (data) => {
    let newData = new FormData();
    console.log(data.image);
    newData.append("image", data.image);
    newData.append("book_title", data.book_name);
    newData.append("author_name", data.author_name);
    newData.append("category", data.category)
    newData.append("description", data.w3review)
    const request = axios.post(`${baseUrl}book/addBook`,
    newData,
    );
    return (dispatch) => {
        dispatch(addBookLoading(true));

        request.then((response) => {
            // console.log(response)
            if (response.status == "200") {
                console.log(response)
                dispatch({
                    type: ADD_BOOK,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            console.log(error)
            // console.log(error);
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(addBookFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(addBookFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(addBookFailed("Network Error"))
            }
            else {
                dispatch(addBookFailed(error.message))
            }
        })
    }   
}

export const getAllBooksByUser = () => {
    const request = axios.post(`${baseUrl}book/getAllBooksByUser`);

    return (dispatch) => {
        dispatch(getUserBooksLoadings(true));

        request.then((response) => {
            if (response.status == "200") {
                dispatch({
                    type: GET_BOOKS_BY_USER,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            // console.log(error);
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(getUserBooksFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(getUserBooksFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(getUserBooksFailed("Network Error"))
            }
            else {
                dispatch(getUserBooksFailed(error.message))
            }
        })
    }
}

export const updateBookstatus = (data) => {
    const request = axios.post(`${baseUrl}book/updateBookStatus`, data);

    return (dispatch) => {
        dispatch(getUserBooksLoadings(true));

        request.then((response) => {
            if (response.status == "200") {
                dispatch({
                    type: UPDATE_BOOK_STATUS,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            // console.log(error);
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(getUserBooksFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(getUserBooksFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(getUserBooksFailed("Network Error"))
            }
            else {
                dispatch(getUserBooksFailed(error.message))
            }
        })
    }
}

export const delteBook = (data) => {
    const request = axios.post(`${baseUrl}book/deleteBook`, data);

    return (dispatch) => {
        dispatch(getUserBooksLoadings(true));

        request.then((response) => {
            if (response.status == "200") {
                dispatch({
                    type: DELETE_BOOK,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            // console.log(error);
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(getUserBooksFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(getUserBooksFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(getUserBooksFailed("Network Error"))
            }
            else {
                dispatch(getUserBooksFailed(error.message))
            }
        })
    }
}

export const getBookedBooks = (data) => {
    const request = axios.post(`${baseUrl}booking/getAllBookingsByUser`);

    return (dispatch) => {
        dispatch(getUserBooksLoadings(true));

        request.then((response) => {
            console.log(response, 'response')
            if (response.status == "200") {
                dispatch({
                    type: GET_BOOKED_BOOKS,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            // console.log(error);
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(getUserBooksFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(getUserBooksFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(getUserBooksFailed("Network Error"))
            }
            else {
                dispatch(getUserBooksFailed(error.message))
            }
        })
    }
}

export const UPDATE_BOOKING_STATUS_LOADING = "UPDATE_BOOKING_STATUS_LOADING";
export const UPDATE_BOOKING_STATUS_FAILED = "UPDATE_BOOKING_STATUS_FAILED";

export const updateBookingStatusLoading = (ms) => ({
    type: UPDATE_BOOKING_STATUS_LOADING,
    payload: ms
})

export const updateBookingStatusFailed = (ms) => ({
    type: UPDATE_BOOKING_STATUS_FAILED,
    payload: ms
})
export const updateBookingStatus = (data) => {
    const request = axios.post(`${baseUrl}booking/updateBookingStatus`, data);

    return (dispatch) => {
        dispatch(updateBookingStatusLoading(true));

        request.then((response) => {
            console.log(response, 'response')
            if (response.status == "200") {
                dispatch({
                    type: UPDATE_BOOKING_STATUS,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            // console.log(error);
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(updateBookingStatusFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(updateBookingStatusFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(updateBookingStatusFailed("Network Error"))
            }
            else {
                dispatch(updateBookingStatusFailed(error.message))
            }
        })
    }
}

//Home changes
//search by field actions
export const searchByFieldLoading = (ms) => ({
    type: SEARCH_BY_FIELD_LOADING,
    payload: ms
})
export const searchByFieldFailed = (ms) => ({
    type: SEARCH_BY_FIELD_FAILED,
    payload: ms
})
export const searchByFieldReset = (ms) => ({
    type: SEARCH_BY_FIELD_RESET,
    payload: ms
})

export const searchByField = (data) => {
    const token = window.localStorage.getItem('token');
    const request = axios.post(`${baseUrl}book/searchByField`,
    data
    );
    return (dispatch) => {
        dispatch(searchByFieldLoading(true));

        request.then((response) => {
            if (response.status == "200") {
                dispatch({
                    type: SEARCH_BY_FIELD,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(searchByFieldFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(searchByFieldFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(searchByFieldFailed("Network Error"))
            }
            else {
                dispatch(searchByFieldFailed(error.message))
            }
        })
    }   
}

//create book actions
export const createBookLoading = (ms) => ({
    type: CREATE_BOOK_LOADING,
    payload: ms
})
export const createBookFailed = (ms) => ({
    type: CREATE_BOOK_FAILED,
    payload: ms
})
export const createBookReset = (ms) => ({
    type: CREATE_BOOK_RESET,
    payload: ms
})

export const createBook = (data) => {
    const token = window.localStorage.getItem('token');
    const request = axios.post(`${baseUrl}booking/createBooking`,
    data
    );
    return (dispatch) => {
        dispatch(createBookLoading(true));

        request.then((response) => {
            if (response.status == "200") {
                dispatch({
                    type: CREATE_BOOK,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(createBookFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(createBookFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(createBookFailed("Network Error"))
            }
            else {
                dispatch(createBookFailed(error.message))
            }
        })
    }   
}


//get notification actions
export const getNotificationLoading = (ms) => ({
    type: GET_NOTIFICATION_LOADING,
    payload: ms
})
export const getNotificationFailed = (ms) => ({
    type: GET_NOTIFICATION_FAILED,
    payload: ms
})
export const getNotificationReset = (ms) => ({
    type: GET_NOTIFICATION_RESET,
    payload: ms
})

export const getNotification = (data) => {
    const token = window.localStorage.getItem('token');
    const request = axios.post(`${baseUrl}notification/getNotifications`,
    data
    );
    return (dispatch) => {
        dispatch(getNotificationLoading(true));

        request.then((response) => {
            if (response.status == "200") {
                dispatch({
                    type: GET_NOTIFICATION,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(getNotificationFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(getNotificationFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(getNotificationFailed("Network Error"))
            }
            else {
                dispatch(getNotificationFailed(error.message))
            }
        })
    }   
}