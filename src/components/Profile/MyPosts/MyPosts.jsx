import React from 'react';
import k  from './MyPosts.module.css'
import Posts from './Posts/Posts';

const MyPosts = () => {
    return (<>
    <div>My post</div>
    <textarea></textarea>
    <button>Everyone waiting for this!</button>
    <div className={k.item}>
      <Posts message='Hi everyone'  likecount= '65'/>
      <Posts message="It's me, i'm fine. What about you?"  likecount='33'/>
    </div></>
    )
  }

export default MyPosts;