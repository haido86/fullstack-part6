import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import {
  showNotification,
  clearNotification,
} from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const searchTerm = useSelector((state) => state.filter.searchTerm);

  // console.log('searchTerm', searchTerm);
  const dispatch = useDispatch();

  const vote = (id) => {
    // console.log('vote', id);
    dispatch(addVote(id));
    const voteItem = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(showNotification({ content: `You voted '${voteItem.content}'` }));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };

  const anecdotesForSort = [...anecdotes];
  // console.log('anecdotesForSort', anecdotesForSort);
  const filterAnecdotesForSort = anecdotesForSort.filter((n) =>
    n.content.includes(`${searchTerm}`)
  );
  // console.log('filterAnecdotesForSort', filterAnecdotesForSort);
  const orderedByVote = filterAnecdotesForSort.sort(function (a, b) {
    return b.votes - a.votes;
  });

  return (
    <>
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
    </>
  );
};
export default AnecdoteList;
