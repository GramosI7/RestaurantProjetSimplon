import axios from "axios";
import { GET_PROFIL, PROFIL_LOADING, CLEAR_CURRENT_PROFIL, GET_ERRORS, SET_CURRENT_USER } from "./types";

export const getCurrentProfil = () => dispatch => {
    dispatch(setProfilLoading());
    axios.get("/api/profil/me")
        .then(res => {
            dispatch({
                type: GET_PROFIL,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_PROFIL,
                payload: {}
            })
        })
}

export const createProfil = (profilData, history) => dispatch => {
    axios.post("/api/profil", profilData)
        .then(response => history.push("/dashboard"))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const deleteAccount = () => dispatch => {
    if(window.confirm("Are you sure ? This can NOT be undone !")) {
        axios.delete("/api/profil")
            .then(response => {
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: {}
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            })
    }
}

export const setProfilLoading = () => {
    return {
        type: PROFIL_LOADING
    }
}

export const clearCurrentProfil = () => {
    return {
        type: CLEAR_CURRENT_PROFIL
    }
}