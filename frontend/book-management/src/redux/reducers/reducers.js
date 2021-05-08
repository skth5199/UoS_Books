import * as Actions from "../actions";
  
  export const signUpReducers = (  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  }, action) => {
    switch (action.type) {
    case Actions.SIGNUP:
        return{
            ...state,
            errMsg: null,
            isLoading: false,
            data: action.payload,
            success: true,
        };
      case Actions.SIGNUP_FAILED:
        return {
          ...state,
          errMsg: action.payload,
          isLoading: false,
          data: [],
          success: "failed"
        };
      case Actions.SIGNUP_LOADING: 
        return {
          ...state,
          errMsg: null,
          isLoading: true,
          data: [],
          success: false
        }
      case Actions.RESET_SIGN_UP:
        return {
          ...state,
          isLoading: false,
          errMsg: null,
          data: [],
          success: ""
        }
    case Actions.SIGNOUT:
      return {
        ...state,
        errMsg: null,
        data: {},
        isLoading: false,
        success: true,
      };
      default:
        return state;
    }
  };
  
  export const signInReducers = (  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  }, action) => {
    switch (action.type) {
    case Actions.SIGNIN:
        return{
            ...state,
            errMsg: null,
            isLoading: false,
            data: action.payload,
            success: true,
        };
          case Actions.SIGNIN_FAILED:
            return {
              ...state,
              errMsg: action.payload,
              isLoading: false,
              data: [],
              success: "failed"
            };
          case Actions.SINGIN_LOADING: 
            return {
              ...state,
              errMsg: null,
              isLoading: true,
              data: [],
              success: false
            }
          case Actions.RESET_SIGN_IN:
            return {
              ...state,
              isLoading: false,
              errMsg: null,
              data: [],
              success: ""
            }
      default:
        return state;
    }
  };

  export const addBookReducers = (  state = {
    isLoading: false,
    errMsg: null,
    data: {},
    success: "",
  }, action) => {
    switch (action.type) {
    case Actions.ADD_BOOK:
        return{
            ...state,
            errMsg: null,
            isLoading: false,
            data: action.payload,
            success: true,
        };
          case Actions.ADD_BOOK_FAILED:
            return {
              ...state,
              errMsg: action.payload,
              isLoading: false,
              data: {},
              success: "failed"
            };
          case Actions.ADD_BOOK_LOADING: 
            return {
              ...state,
              errMsg: null,
              isLoading: true,
              data: {},
              success: false
            }
          case Actions.RESET_ADD_BOOK:
            return {
              ...state,
              isLoading: false,
              errMsg: null,
              data: {},
              success: ""
            }
      default:
        return state;
    }
  };

  export const getAllBooksByUserReducers = (  state = {
    isLoading: false,
    errMsg: null,
    data: {},
    success: "",
  }, action) => {
    switch (action.type) {
    case Actions.GET_BOOKS_BY_USER:
        return{
            ...state,
            errMsg: null,
            isLoading: false,
            data: action.payload,
            success: true,
        };
          case Actions.GET_BOOKS_BY_USER_FAILDED:
            return {
              ...state,
              errMsg: action.payload,
              isLoading: false,
              data: {},
              success: "failed"
            };
          case Actions.GET_BOOKS_BY_USER_LOADING: 
            return {
              ...state,
              errMsg: null,
              isLoading: true,
              data: {},
              success: false
            }
          case Actions.RESET_GET_BOOKS_BY_USER:
            return {
              ...state,
              isLoading: false,
              errMsg: null,
              data: {},
              success: ""
            }
      default:
        return state;
    }
  };

  export const updateBookStatusReducers = (  state = {
    isLoading: false,
    errMsg: null,
    data: {},
    success: "",
  }, action) => {
    switch (action.type) {
    case Actions.UPDATE_BOOK_STATUS:
        return{
            ...state,
            errMsg: null,
            isLoading: false,
            data: action.payload,
            success: true,
        };
          case Actions.GET_BOOKS_BY_USER_FAILDED:
            return {
              ...state,
              errMsg: action.payload,
              isLoading: false,
              data: {},
              success: "failed"
            };
          case Actions.GET_BOOKS_BY_USER_LOADING: 
            return {
              ...state,
              errMsg: null,
              isLoading: true,
              data: {},
              success: false
            }
          case Actions.RESET_GET_BOOKS_BY_USER:
            return {
              ...state,
              isLoading: false,
              errMsg: null,
              data: {},
              success: ""
            }
          case Actions.DELETE_BOOK:
            return {
              ...state,
              isLoading: false,
              errMsg: null,
              data: action.payload,
              success: true
            }
      default:
        return state;
    }
  };
  
  export const getBookedBooksReducers = (  state = {
    isLoading: false,
    errMsg: null,
    data: {},
    success: "",
  }, action) => {
    switch (action.type) {
    case Actions.GET_BOOKED_BOOKS:
        return{
            ...state,
            errMsg: null,
            isLoading: false,
            data: action.payload,
            success: true,
        };
          case Actions.GET_BOOKS_BY_USER_FAILDED:
            return {
              ...state,
              errMsg: action.payload,
              isLoading: false,
              data: {},
              success: "failed"
            };
          case Actions.GET_BOOKS_BY_USER_LOADING: 
            return {
              ...state,
              errMsg: null,
              isLoading: true,
              data: {},
              success: false
            }
          case Actions.RESET_GET_BOOKS_BY_USER:
            return {
              ...state,
              isLoading: false,
              errMsg: null,
              data: {},
              success: ""
            }
      default:
        return state;
    }
  };

  export const updateBookingStatusReducers = (  state = {
    isLoading: false,
    errMsg: null,
    data: {},
    success: "",
  }, action) => {
    switch (action.type) {
    case Actions.UPDATE_BOOKING_STATUS:
        return{
            ...state,
            errMsg: null,
            isLoading: false,
            data: action.payload,
            success: true,
        };
          case Actions.UPDATE_BOOKING_STATUS_FAILED:
            return {
              ...state,
              errMsg: action.payload,
              isLoading: false,
              data: {},
              success: "failed"
            };
          case Actions.UPDATE_BOOKING_STATUS_LOADING: 
            return {
              ...state,
              errMsg: null,
              isLoading: true,
              data: {},
              success: false
            }
      default:
        return state;
    }
  };

  export const searchByFieldReducers = (  state = {
    isLoading: false,
    errMsg: null,
    data: {},
    success: "",
  }, action) => {
    switch (action.type) {
    case Actions.SEARCH_BY_FIELD:
        return{
            ...state,
            errMsg: null,
            isLoading: false,
            data: action.payload,
            success: true,
        };
          case Actions.SEARCH_BY_FIELD_FAILED:
            return {
              ...state,
              errMsg: action.payload,
              isLoading: false,
              data: {},
              success: "failed"
            };
          case Actions.SEARCH_BY_FIELD_LOADING: 
            return {
              ...state,
              errMsg: null,
              isLoading: true,
              data: {},
              success: false
            }
          case Actions.SEARCH_BY_FIELD_RESET:
            return {
              ...state,
              isLoading: false,
              errMsg: null,
              data: {},
              success: ""
            }
      default:
        return state;
    }
  };

  export const createBookReducers = (  state = {
    isLoading: false,
    errMsg: null,
    data: {},
    success: "",
  }, action) => {
    switch (action.type) {
    case Actions.CREATE_BOOK:
        return{
            ...state,
            errMsg: null,
            isLoading: false,
            data: action.payload,
            success: true,
        };
          case Actions.CREATE_BOOK_FAILED:
            return {
              ...state,
              errMsg: action.payload,
              isLoading: false,
              data: {},
              success: "failed"
            };
          case Actions.CREATE_BOOK_LOADING: 
            return {
              ...state,
              errMsg: null,
              isLoading: true,
              data: {},
              success: false
            }
          case Actions.CREATE_BOOK_RESET:
            return {
              ...state,
              isLoading: false,
              errMsg: null,
              data: {},
              success: ""
            }
      default:
        return state;
    }
  };

  export const getNotificationReducers = (  state = {
    isLoading: false,
    errMsg: null,
    data: {},
    success: "",
  }, action) => {
    switch (action.type) {
    case Actions.GET_NOTIFICATION:
        return{
            ...state,
            errMsg: null,
            isLoading: false,
            data: action.payload,
            success: true,
        };
          case Actions.GET_NOTIFICATION_FAILED:
            return {
              ...state,
              errMsg: action.payload,
              isLoading: false,
              data: {},
              success: "failed"
            };
          case Actions.GET_NOTIFICATION_LOADING: 
            return {
              ...state,
              errMsg: null,
              isLoading: true,
              data: {},
              success: false
            }
          case Actions.GET_NOTIFICATION_RESET:
            return {
              ...state,
              isLoading: false,
              errMsg: null,
              data: {},
              success: ""
            }
      default:
        return state;
    }
  };