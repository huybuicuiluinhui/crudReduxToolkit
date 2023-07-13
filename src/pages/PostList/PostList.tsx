import React from 'react'
import PostItem from '../PostItem/PostItem'
import { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { deletePost, editPost } from '../../blog.slice'
const PostList = () => {
  const products = useSelector((state: RootState) => state.blog.postList)
  const dispatch = useDispatch()
  const handleDelete = (postId: String) => {
    dispatch(deletePost(postId))
  }
  const handleEditing = (postId: String) => {
    dispatch(editPost(postId))
  }
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Customers also purchased</h2>

        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => (
            <PostItem post={product} handleDelete={handleDelete} handleEditing={handleEditing} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostList
