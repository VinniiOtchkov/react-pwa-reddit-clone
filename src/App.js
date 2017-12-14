import React, { Component } from 'react';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as postActions from './actions/posts';


import Nav from './components/Nav';
import Main from './components/Main';

export class App extends Component {

  componentDidMount(){
    this.props.postActions.fetchPosts();
  }

  onChange(e){
    let searchText = this.state.searchText
    searchText = e.target.value;
    this.setState(searchText);
  }

  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {posts: state.posts};
}

function mapDispatchToProps(dispatch){
  return{
    postActions:bindActionCreators(postActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
