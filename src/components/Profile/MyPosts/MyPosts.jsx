import React from 'react';
import k  from './MyPosts.module.css'
import Posts from './Posts/Posts';


const MyPosts = () => {

let PostsData = [
  { message:'Hi everyone' , likecount: '65'},
  {message:"It's me, i'm fine. What about you?" , likecount:'33'}
]

const Post = PostsData.map(p =>  <Posts message={p.message} likecount={p.likecount} />)


    return (<>
    <div>My post</div>
    <textarea></textarea>
    <button>Everyone waiting for this!</button>
    <div className={k.item}>
      {Post}
    </div></>
    )
  }

export default MyPosts;