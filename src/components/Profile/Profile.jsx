import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import k  from './Profile.module.css';
import ProfilePage from './ProfilePage/ProfilePage';

const Profile = () => {
    return  <div className={k.content}>
    <ProfilePage />
    <MyPosts />
  </div>
}

export default Profile;