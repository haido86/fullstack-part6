// import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { updateByVote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
  // const anecdotes = useSelector((state) => state.anecdotes);
  // const searchTerm = useSelector((state) => state.filter.searchTerm);

  // console.log('searchTerm', searchTerm);
  // const dispatch = useDispatch();

  const vote = (id) => {
    // console.log('vote', id);
    const voteItem = props.anecdotes.find((anecdote) => anecdote.id === id);
    // dispatch(updateByVote(id, voteItem.votes));
    // dispatch(setNotification(`You voted '${voteItem.content}'`, 5000));
    props.updateByVote(id, voteItem.votes);
    props.setNotification(`You voted '${voteItem.content}'`, 5000);
  };

  const anecdotesForSort = [...props.anecdotes];
  // console.log('anecdotesForSort', anecdotesForSort);
  const filterAnecdotesForSort = anecdotesForSort.filter((n) =>
    n.content.toLowerCase().includes(`${props.searchTerm}`.toLocaleLowerCase())
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    searchTerm: state.filter.searchTerm,
  };
};

const mapDispatchToProps = {
  updateByVote,
  setNotification,
};

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);

export default ConnectedAnecdoteList;
