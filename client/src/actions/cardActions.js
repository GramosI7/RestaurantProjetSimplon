import {ADD_CARD, REMOVE_CARD} from "./types";

export const addCard = (cardData) => dispatch => {
    dispatch({
        type: ADD_CARD,
        payload: cardData
    })
}

export const removeCard = (cardData) => dispatch => {
    console.log(cardData)
    dispatch({
        type: REMOVE_CARD,
        payload: cardData.id
    })
}
