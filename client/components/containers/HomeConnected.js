import { connect } from 'react-redux';
import { addSearch } from '../actions';
import Home from '../Home';

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  onSearch: (prices) => {
    dispatch(addSearch(prices));
  },
});

const HomeConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeConnect;
