import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import GifList from '../components/GifList';
import GifModal from '../components/GifModal';
import SearchBar from '../components/SearchBar';
import '../styles/app.css';

class App extends React.Component {
  render() {
    // onTermChange is a prop that we pass to SearchBar and we call requestGifs with what onTermChange passes
    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
        <GifList gifs={ this.props.gifs } onGifSelect={ selectedGif => this.props.actions.openModal({selectedGif}) } />
        <GifModal modalIsOpen= {this.props.modalIsOpen }
                  selectedGif= {this.props.selectedGif }
                  onRequestClose= { ()=> this.props.actions.closeModal() } />
      </div>
    );
  }
}

/**
 * this is how we get info from state (the Store) to the props (the container - smart component)
 * like how we pass it into GifList up there.  makes result of reducers available to container as props
 * mapping data from state to props
 * @param { object } state 
 */
function mapStateToProps(state) {
  return {
    gifs: state.gifs.data,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.selectedGif
  };
}
/**
 * adds the action creators to props
 * this is passing data from the container (App.js) to the store. provides ability for the container
 * to tell the store that it needs to change and enables this by adding action creators to our
 * container as props 
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);