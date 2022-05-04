import React from 'react';
import k  from './MyPosts.module.css'
import Posts from './Posts/Posts';
import {addPost} from "../../../redux/state";


const MyPosts = (props) => {



let Post = props.posts.map(p =>  <Posts key={p.id} message={p.message} likecount={p.likecount} />)

    let newPostElement = React.createRef();
    let addPosts = (props) => {
        let text = newPostElement.current.value;
        addPost(text);
    };

    return (<>
    <div>My post</div>
    <textarea ref={newPostElement}> </textarea>
    <button onClick={addPosts}>Everyone waiting for this!</button>
    <div className={k.item}>
      {Post}
    </div></>
    )
  }

export default MyPosts;