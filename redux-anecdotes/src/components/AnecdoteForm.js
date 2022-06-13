import { getId } from '../reducers/anecdoteReducer';

const newAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    payload: {
      content,
      id: getId(),
      votes: 0,
    },
  };
};

export default newAnecdote;
