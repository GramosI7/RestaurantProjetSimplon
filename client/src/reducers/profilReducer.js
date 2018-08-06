import { GET_PROFIL, PROFIL_LOADING, CLEAR_CURRENT_PROFIL } from "../actions/types";

const initialState = {
    profil: null,
    profils: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case PROFIL_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_PROFIL:
            return {
                ...state,
                profil: action.payload,
                loading: false
            }
        case CLEAR_CURRENT_PROFIL:
            return {
                ...state,
                profil: null
            }

        default: 
            return state
    }
}