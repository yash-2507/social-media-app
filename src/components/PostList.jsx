import React from 'react'
import Post from './Post';

const PostList = ({posts}) => {
  return (
    posts.map((post, i) => {
        return (
            <Post key={i} {...post} />
        );
    })
  )
}

export default PostList