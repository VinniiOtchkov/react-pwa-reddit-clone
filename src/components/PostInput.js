import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostInput extends Component {

  showForm() {
    let x = document.getElementById('newPost');
    x.style.display === 'none' ? x.style.display = 'block' : x.style.display = 'none';
  }

  render() {
    const {handleSubmit} = this.props;

    let formStyle = {
      display: 'none'
    }
    return (
      <div>
        <div className="pull-right">
          <p>
            <button className="btn btn-info" onClick={this.showForm}>New Post</button>
          </p>
        </div>

        <div className="row">
          <div className="col-md-8">
            <form id="newPost" style ={formStyle}>
              <div>
                <label htmlFor="title">Title</label>
                <Field component="input" type="text" name="title" id="title" className="form-control"/>
              </div>
              <div>
                <label htmlFor="body">Body</label>
                <Field component="input" type="textarea" name="body" id="body" className="form-control"/>
              </div>
              <div>
                <label htmlFor="author">Author</label>
                <Field component="input" type="text" name="author" id="author" className="form-control"/>
              </div>
              <div>
                <label htmlFor="image-url">Image URL</label>
                <Field component="input" type="text" name="image_url" id="image_url" className="form-control"/>
              </div>
              <div className="form-group">
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                  Create Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

PostInput=reduxForm({form:'posts'})(PostInput);

export default PostInput;
