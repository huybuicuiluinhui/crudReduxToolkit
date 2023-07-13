import React from 'react'
import { Post } from '../../types/blogTypes'
interface PostItemType {
  post: Post
  handleDelete: (postId: String) => void
  handleEditing: (postId: String) => void
}
const PostItem = ({ post, handleDelete, handleEditing }: PostItemType) => {
  return (
    <div key={post.id} className='group'>
      <div className='aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
        <img src={post.imageSrc} className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <a>
              <span aria-hidden='true' />
              {post.name}
            </a>
          </h3>
          <p className='mt-1 text-sm text-gray-500'>{post.color}</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>{post.price}</p>
        <button
          className='rounded-xl bg-orange-300 px-4 text-sm  font-medium text-gray-900'
          onClick={() => {
            handleDelete(post.id)
          }}
        >
          Delete
        </button>
        <button
          className='rounded-xl bg-orange-300 px-4 text-sm  font-medium text-gray-900'
          onClick={() => {
            handleEditing(post.id)
          }}
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default PostItem
