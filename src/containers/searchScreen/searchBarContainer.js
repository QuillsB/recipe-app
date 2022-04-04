import { connect } from 'react-redux';

import { getSearchByQuery } from 'actions/searchActions';

import SearchBar from 'screens/searchScreen/components/searchBar';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  getSearchByQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
