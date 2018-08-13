import {ADD_CARD, REMOVE_CARD} from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_CARD:
            return [...state, {
                id: action.payload._id,
                title: action.payload.title,
                body: action.payload.body,
                typePlat: action.payload.typePlat,
                price: action.payload.price
            }]
        case REMOVE_CARD:
            console.log(action.payload)
            return state.filter(productId => productId.id !== action.payload)
        default: 
            return state;
    }
}