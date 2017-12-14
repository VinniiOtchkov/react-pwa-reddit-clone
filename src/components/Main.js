import React, {Component} from 'react';
import PostList from './PostList';
import PostInput from './PostInput';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../actions/posts';

class Main extends Component {

  handleSubmit(value) {
    this.props.postActions.addPost(value);
  }
  render() {
    return (
      <div>
      <main className="container">
        <PostInput onSubmit={this.handleSubmit.bind(this)}/>
        <PostList/>
      </main>
    </div>)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Main);
