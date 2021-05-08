import React, {useState, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsIcon from '@material-ui/icons/Notifications';
import * as Actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import reducer from "../../redux/reducers";
import withReducer from "../../store/withReducer";
import setAuthorizationToken from "../../utils/authorization/authorization";
import jwt_decode from "jwt-decode";
import Loader from "../Loader/Loader";
import SnackBarMsg from "../ErrorMessage/ErrorSnackBar";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSnackbar, setIsSnackBar] = useState(false);
  const [snackBarMesssage, setSnackBarMessage] = useState("");
  const [snackBarSverity, setSnackBarSverity] = useState("error");
  const [notifications, setNotifications] = useState([])

  const dispatch = useDispatch();
  const add_confirmation = useSelector(
    ({ getNotificationReducer }) => getNotificationReducer.getNotificationReducers
  );
  useEffect(()=>{
    if (localStorage.token) {
      setAuthorizationToken(localStorage.token)
    }
    dispatch(Actions.getNotification())
  }, [])

  useEffect(() => {
    setIsSnackBar(false)
    if (add_confirmation && add_confirmation.data && add_confirmation.data.success === true) {
      setNotifications(add_confirmation.data.notifications)
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <NotificationsIcon
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
        />
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
          {
            notifications && notifications.map((notifacation)=>{
              return(
                <StyledMenuItem>
                  <ListItemText primary={notifacation.message} />
                </StyledMenuItem>
              )
            })
          }
          {isLoading && <Loader />}
          {isSnackbar && <SnackBarMsg snackBarSverity={snackBarSverity} snackBarMesssage={snackBarMesssage} setIsSnackBar={setIsSnackBar}/>}
        </StyledMenu>
    </div>
  );
}

export default withReducer("getNotificationReducer", reducer)(CustomizedMenus);