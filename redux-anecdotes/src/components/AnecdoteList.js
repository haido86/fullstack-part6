import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);

  console.log('anecdotes', anecdotes);
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log('vote', id);
    dispatch(addVote(id));
  };

  const anecdotesForSort = [...anecdotes];

  const orderedByVote = anecdotesForSort.sort(function (a, b) {
    return b.votes - a.votes;
  });

  return (
    <div>
      {orderedByVote.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AnecdoteList;
