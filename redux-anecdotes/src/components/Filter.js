import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = () => {
  // const filter = useSelector((state) => state.filter);
  // console.log('filter', filter);
  const dispatch = useDispatch();
  // console.log('filter', filter);
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault();
    const searchTerm = event.target.value;
    // console.log('filter content', searchTerm);
    dispatch(setFilter({ searchTerm }));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <>
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    </>
  );
};

export default Filter;
