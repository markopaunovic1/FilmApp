import { createAction, createReducer } from '@reduxjs/toolkit';

const addMovie = createAction('add movie', function prepare(movie) {
  return { payload: movie };
});
const removeMovie = createAction('remove movie');

const clearCart = createAction('clear cart');

const actions = { addMovie, removeMovie, clearCart };

const initialState = {
  cartItems: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addMovie, (state, action) => {
      const movie = {
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        description: action.payload.description,
      };
      state.cartItems = [...state.cartItems, movie];
    })
    .addCase(removeMovie, (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.movieId
      );
    })
    .addCase(clearCart, (state, action) => {
      console.log('Clearing cart');
      state.cartItems = [];
    });
});

export { reducer, actions };
