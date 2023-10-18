import { createAction, createReducer } from "@reduxjs/toolkit";


const hireMovie = createAction('hire movie');
const buyMovie = createAction('buy movie');

const actionsAmount = {hireMovie, buyMovie};

const initialAmount = 0;

const reducer = createReducer(initialAmount,builder => {
    builder
        .addCase(hireMovie, (state, action) => state + 39)
        .addCase(buyMovie, (state, action) => state + 99)
});

export {reducer, actionsAmount}