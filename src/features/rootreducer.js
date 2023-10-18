import { combineReducers } from 'redux';
import { reducer as addMovieToCartReducer } from './addMovieToCart';
import { reducer as cartAmountValueReducer } from './cartAmountValue';

const rootReducer = combineReducers({
  cart: addMovieToCartReducer,
  cartAmountValue: cartAmountValueReducer,
});

export { rootReducer };
