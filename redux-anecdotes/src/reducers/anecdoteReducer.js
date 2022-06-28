import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
    updatedAnecdotes(state, action) {
      // console.log('action', action);
      return state.map((anecdote) =>
        anecdote.id === action.payload.id
          ? { ...anecdote, votes: action.payload.votes }
          : anecdote
      );
    },
  },
});

export const { addVote, appendAnecdote, setAnecdotes, updatedAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const updateByVote = (id, votes) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.update(id, votes);
    // console.log('updatedAnecdote', updatedAnecdote);
    dispatch(updatedAnecdotes(updatedAnecdote));
  };
};

export default anecdoteSlice.reducer;
