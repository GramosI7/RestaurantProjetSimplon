import { GET_PLATS} from "../actions/types";

const initialState = {
    plats: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PLATS:
        return {
            ...state,
            plats: action.payload
        }
        default: 
            return state;
    }
}