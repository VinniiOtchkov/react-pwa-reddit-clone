import React, {Component} from 'react';
import Post from './Post';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../actions/posts';

class PostList extends Component {
  constructor() {
    super();

    this.state ={
      filterCriteria:''
    }
  }

  updateFilter(e) {
    e.preventDefault();
    this.setState({filterCriteria: e.target.value});
  }

  render() {

    let filteredPosts = this.props.posts
      .filter(post => post.title.toLowerCase().includes(this.state.filterCriteria.toLowerCase()))
      .map(post => <Post key={post.id} post={post} />);

    return (
      <div>
      <li role="presentation" className="active">
        <input type="search" value={this.state.filterCriteria} onChange={this.updateFilter.bind(this)} className="form-control input-sm search-form" placeholder="Filter"/>
      </li>
      <ul className="nav nav-pills">

        <div className="form-inline">
          <label htmlFor="sort">
            Sort by
          </label>
          <br />
          <select className="form-control" id="sort">
            <option>Title</option>
            <option>Rating</option>
            <option>Date Added</option>

          </select>
        </div>
      </ul>
      {filteredPosts}
      </div>
    )
  }
}


function mapStateToProps(state, props) {
  return {posts: state.posts};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
