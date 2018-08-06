import {GET_ERRORS, ADD_PLAT, GET_PLATS} from "./types";
import axios from "axios";


export const addPlat = (platData, history) => dispatch => {
    axios.post('api/plat/', platData)
        .then((response) => history.push("/"))
        .catch((error) => dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        }))
} 

export const getPlat = () => dispatch => {
    axios.get("api/plat/")
        .then((response) => {
            dispatch({
                type: GET_PLATS,
                payload: response.data
            })
        })
        .catch((error) => console.log(error))
}