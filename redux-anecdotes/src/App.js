import { useSelector, useDispatch } from 'react-redux';
import newAnecdote from './components/AnecdoteForm';
import newVote from './components/AnecdoteList';

const App = () => {
  const anecdotes = useSelector((state) => state);
  // console.log('anecdotes', anecdotes);
  const dispatch = useDispatch();

  const vote = (id) => {
    // console.log('vote', id);
    dispatch(newVote(id));
  };

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(newAnecdote(content));
  };

  const orderedByVote = anecdotes.sort(function (a, b) {
    return b.votes - a.votes;
  });
  // console.log('orderedByVote', orderedByVote);

  return (
    <div>
      <h2>Anecdotes</h2>
      {orderedByVote.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}

      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
