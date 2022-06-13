const newVote = (id) => {
  return {
    type: 'VOTE',
    payload: { id },
  };
};

export default newVote;
