import React from 'react';

import { Post } from './Post';

export const PostList = () => {
  return (
    <>
      <Post 
        message='Hello! How are you?'
        likes='12'
      />
      <Post 
        message='Hello! This is my first post'
        likes='34'
      />
    </>
  )
}