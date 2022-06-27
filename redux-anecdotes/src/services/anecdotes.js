import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  //   console.log('response.data', response.data);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const update = async (id, votes) => {
  console.log('votes', votes);
  const response = await axios.patch(`${baseUrl}/${id}`, {
    votes: votes + 1,
  });
  console.log('response.data', response.data);
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew, update };
