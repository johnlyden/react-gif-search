import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SearchBar from '../components/SearchBar';
import '../styles/app.css';

class App extends React.Component {
  render() {
    // onTermChange is a prop that we pass to SearchBar and we call requestGifs with what onTermChange passes
    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}
// this adds the action creators to props
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);