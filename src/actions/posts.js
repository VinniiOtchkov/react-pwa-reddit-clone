import axios from 'axios';

export const fetchPosts = () => {
  return {
    type: 'FETCH',
    payload: axios.get(`https://thecontactsdb.herokuapp.com/posts`)
  };
};

export const addPost = (post) => {
  return {
    type:'ADD',
    payload:axios.post(`https://thecontactsdb.herokuapp.com/posts`, post)
  };
};
