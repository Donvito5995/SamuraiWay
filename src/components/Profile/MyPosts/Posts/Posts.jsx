import React from 'react';
import k  from './Posts.module.css'

const Posts = (props) => {
    return <div className={k.item}>
      <img src='https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg'/>
      {props.message}
      <span> like {props.like}</span>
    </div>

  }

export default Posts;