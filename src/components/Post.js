import React from 'react';

const Post = (props) => {
  console.log('PROPS', props);
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="well">
            <div className="media-left">
              <img className="media-object" alt="explanation" src ={props.post.image_url}/>
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                {props.post.title}
                |
                <a>
                  <i className="glyphicon glyphicon-arrow-up"></i>
                </a>
                <a>
                  <i className="glyphicon glyphicon-arrow-down"></i>
                </a>
                {props.post.vote_count}
              </h4>
              <div className="text-right">
                {props.post.author}
              </div>
              <p>
                {props.post.body}
              </p>
              <div>
                {props.post.created_at}
                <i className="glyphicon glyphicon-comment"></i>
                <a>
                  {props.post.author}
                </a>
              </div>
              <div className="row">
                <div className="col-md-offset-1">
                  <hr/>
                  <p className="commenty">
                    Comment text
                  </p>
                  <form className="form-inline">
                    <div className="form-group">
                      <input className="form-control formy"/>
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-primary btny"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;
