import { connect } from 'react-redux'
import Search from '../Search'

const mapStateToProps = (state) => ({
  search: state.search
})

const mapDispatchToProps = (dispatch) => ({
  // onSearch: (prices) => {
  //   dispatch(addSearch(prices))
  // } 
})

const SearchConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchConnect;