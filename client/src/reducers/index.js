import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profilReducer from "./profilReducer";
import platReducer from "./platReducer";


export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    profil : profilReducer,
    plat: platReducer
});