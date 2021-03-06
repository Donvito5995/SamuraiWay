import React from 'react';
import k from './MyPosts.module.css'
import Posts from './Posts/Posts';


const MyPosts = (props) => {


    let Post = props.posts.map(p => <Posts key={p.id} message={p.message} likecount={p.likecount}/>)

    let newPostElement = React.createRef();
    let addPosts = () => {
        let text = newPostElement.current.value;
        props.addPosts(text);
        newPostElement.current.value = '';

    };

    return (<>
            <div>My post</div>
            <textarea ref={newPostElement}> </textarea>
            <button onClick={addPosts}>Everyone waiting for this!</button>
            <div className={k.item}>
                {Post}
            </div>
        </>
    )
}

export default MyPosts;