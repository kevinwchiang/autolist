import { connect } from 'react-redux';
import { addVehicle } from '../actions';
import Search from '../Search';

const mapStateToProps = (state) => ({
  search: state.search
})

const mapDispatchToProps = (dispatch) => ({
  onLink: (vehicle) => {
    dispatch(addVehicle(vehicle));
  }
})

const SearchConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchConnect;