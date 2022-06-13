import { useDispatch } from 'react-redux';
import { newAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  // const anecdotes = useSelector((state) => state);
  // console.log('anecdotes', anecdotes);
  const dispatch = useDispatch();
  // const newAnecdote = (content) => {
  //   return {
  //     type: 'NEW_ANECDOTE',
  //     payload: {
  //       content,
  //       id: getId(),
  //       votes: 0,
  //     },
  //   };
  // };

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(newAnecdote(content));
  };
  return (
    <form onSubmit={addAnecdote}>
      <div>
        <input name="anecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default AnecdoteForm;
