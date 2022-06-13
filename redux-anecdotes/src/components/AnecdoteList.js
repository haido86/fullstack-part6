import { useDispatch, useSelector } from 'react-redux';
import { newVote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state);
  // console.log('anecdotes', anecdotes);
  const dispatch = useDispatch();

  // const newVote = (id) => {
  //   return {
  //     type: 'VOTE',
  //     payload: { id },
  //   };
  // };

  const vote = (id) => {
    // console.log('vote', id);
    dispatch(newVote(id));
  };

  const orderedByVote = anecdotes.sort(function (a, b) {
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
