import React from 'react';
import { PostList } from './PostList/PostList';

export const Profile = () => {
  return (
    <>
      <div>mainPicture</div>
      <div>
        <div>avatar</div>
        <div>about me</div>
      </div>
      <PostList />
    </>
  )
}