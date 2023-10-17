import { combineReducers } from "redux";
import { reducer as addMovieToCartReducer } from "./addMovieToCart";

const rootReducer = combineReducers({
    addMovieToCart : addMovieToCartReducer
})

export {rootReducer};