import { connect } from 'react-redux';
import Details from '../Details';

const mapStateToProps = (state) => ({
  search: state.search
})

const mapDispatchToProps = (dispatch) => ({
})

const DetailsConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);

export default DetailsConnect;