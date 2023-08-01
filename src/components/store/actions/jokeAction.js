import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

// export const changeJoke = createAction('settings/changeJoke');

// eslint-disable-next-line import/prefer-default-export
export const changeJoke = createAsyncThunk(
  'joke/changeJoke',
  async (payload, thunkAPI) => {
    // const { newJoke } = thunkAPI.getState().joke.value;
    const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
    // console.log(data.value);
    return data;
  }
);
