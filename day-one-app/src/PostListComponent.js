import React, { Component, Fragment } from 'react';
import getData from './api';
import './post.css'
import Post from './Post';

class PostListComponent extends Component {
    render() {
        console.log(this.props.posts)
        let postContainer = [];
         if(this.props.posts){
             this.props.posts.forEach((value, index) => {
                 postContainer.push(<Post post={value} key={index}></Post>)
             });
         }
     return (
            <div className="row">
                 {postContainer}
            </div>
 
         )
     } 
 }
 export default PostListComponent;