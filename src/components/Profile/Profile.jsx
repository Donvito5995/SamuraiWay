import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import k  from './Profile.module.css';
import ProfilePage from './ProfilePage/ProfilePage';

const Profile = (props) => {



    return  <div className={k.content}>
    <ProfilePage />
    <MyPosts posts={props.posts} addPosts={props.addPost} />
  </div>
}

export default Profile;