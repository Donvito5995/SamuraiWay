import React from 'react';
import k  from './MyPosts.module.css'
import Posts from './Posts/Posts';

const MyPosts = () => {
    return (<>
    <div>My post</div>
    <div className={k.item}>
      <Posts message='Hi everyone'  like= '65'/>
      <Posts message="It's me, i'm fine. What about you?"  like='33'/>
    </div></>
    )
  }

export default MyPosts;