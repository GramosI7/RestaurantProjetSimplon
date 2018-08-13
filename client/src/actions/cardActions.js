import {ADD_CARD, REMOVE_CARD} from "./types";

export const addCard = (cardData) => dispatch => {
    dispatch({
        type: ADD_CARD,
        payload: cardData
    })
}

export const removeCard = (cardData) => dispatch => {
    dispatch({
        type: REMOVE_CARD,
        payload: cardData
    })
}
