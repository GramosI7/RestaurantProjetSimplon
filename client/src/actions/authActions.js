import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";


export const registerUser = (userData, history) => dispatch => {
    axios.post('api/user/register', userData)
        .then((response) => history.push("/login"))
        .catch((error) => dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        }))
} 

export const loginUser = (userData, history) => dispatch => {
    axios.post('api/user/login', userData)
        .then((response) => {
            console.log(response.data);
            const {token} = response.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded))
            history.push("/")
        })
        .catch((error) => dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        }))
} 

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    } 
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}

