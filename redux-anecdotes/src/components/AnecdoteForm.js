import { useDispatch } from 'react-redux';
import { newAnecdote } from '../reducers/anecdoteReducer';
import {
  clearNotification,
  showNotification,
} from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(newAnecdote(content));
    dispatch(
      showNotification({
        content: `You have created new anecdote '${content}'`,
      })
    );
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };
  return (
    <div>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
