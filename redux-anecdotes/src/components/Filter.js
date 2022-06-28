// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = (props) => {
  // const dispatch = useDispatch();

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault();
    const searchTerm = event.target.value;
    // console.log('filter content', searchTerm);
    // dispatch(setFilter({ searchTerm }));
    props.setFilter({ searchTerm });
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

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

// const mapDispatchToProps = {
//   setFilter,
// };

const ConnectedFilter = connect(mapStateToProps, { setFilter })(Filter);

export default ConnectedFilter;
