import {GET_ERRORS, GET_PLATS} from "./types";
import axios from "axios";



export const addPlat = (platData, history) => dispatch => {
    console.log(platData)
    // const config = { headers: { 'Content-Type': "multipart/form-data" } };
    let formData = new FormData();
    formData.append('title', platData.title);
    formData.append('typePlat', platData.typePlat);
    formData.append('price', platData.price);
    formData.append('body', platData.body);
    formData.append('picture', platData.picture);
    console.log(formData.append('picture', platData.picture));
    console.log(formData);
    

    axios.post('http://localhost:4000/api/plat/', formData)
        .then((response) => history.push("/"))
        .catch((error) => dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        }))
} 

export const getPlat = () => dispatch => {
    axios.get("/api/plat/")
        .then((response) => {
            dispatch({
                type: GET_PLATS,
                payload: response.data
            })
        })
        .catch((error) => console.log(error))
}