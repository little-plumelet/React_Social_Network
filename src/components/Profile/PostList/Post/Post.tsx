import React from 'react';

interface IPostProps {
  message: string;
  likes: string;
}
export const Post = (props: IPostProps) => {
  return (
    <>
      <div>{props.message}</div>
      <div>
        likes:
        <span>{props.likes}</span>
      </div>
    </>
    
  )
}
