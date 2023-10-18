import { combineReducers } from "redux";
import { reducer as addMovieToCartReducer } from "./addMovieToCart";
import { reducer as cartAmountValue } from "./cartAmountValue";

const rootReducer = combineReducers({
    addMovieToCart : addMovieToCartReducer,
    cartAmountValue : cartAmountValue
})

export {rootReducer};