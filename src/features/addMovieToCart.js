import { createAction, createReducer } from "@reduxjs/toolkit";


const addMovie = createAction('add movie');
const removeMovie = createAction('remove movie');

const actions = {addMovie, removeMovie};

const initialState = 0;

const reducer = createReducer(initialState, builder => {
    builder
        .addCase(addMovie, (state, action) => state + 1)
        .addCase(removeMovie, (state, action) => state -1)
});


export {reducer, actions};
