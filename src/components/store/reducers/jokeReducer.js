import { createReducer } from '@reduxjs/toolkit';
import { changeJoke } from '../actions/jokeAction';

const initialState = {
  value: 'ceci est une blague',
  id: 2,
};

const jokeReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeJoke.fulfilled, (state, action) => {
    state.value = action.payload.value;
  });
});

export default jokeReducer;
