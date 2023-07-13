import React, { Fragment, useEffect, useState } from 'react'
import { Post } from '../../types/blogTypes'
import { useDispatch } from 'react-redux'
import { addPost, cancelEditPost, finshEditPost } from '../../blog.slice'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
const initalState = {
  id: '',
  name: '',
  imageSrc: '',
  price: '',
  color: '',
  published: false
}
const CreatePost = () => {
  const [formData, setFormData] = useState<Post>(initalState)
  const dispatch = useDispatch()
  const editingPost = useSelector((state: RootState) => state.blog.editingPost)
  console.log('editingPost', editingPost)

  useEffect(() => {
    setFormData(editingPost || initalState)
  }, [editingPost])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (editingPost) {
      dispatch(finshEditPost(formData))
    } else {
      const formDataId = { ...formData }
      dispatch(addPost(formDataId))
      setFormData(initalState)
    }
  }
  const handleCancelEditPost = () => {
    dispatch(cancelEditPost())
  }
  return (
    <form onSubmit={handleSubmit} onReset={handleCancelEditPost}>
      <div className='mb-6'>
        <label className='mb-2  text-sm font-medium text-gray-900 dark:text-gray-300'>name</label>
        <input
          type='text'
          className=' w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5'
          placeholder='Name'
          required
          value={formData.name}
          onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
        />
      </div>
      <div className='mb-6'>
        <label className='mb-2  text-sm font-medium text-gray-900 dark:text-gray-300'>Featured Image</label>
        <input
          type='text'
          className=' w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5'
          placeholder='Url image'
          required
          value={formData.imageSrc}
          onChange={(event) => setFormData((prev) => ({ ...prev, imageSrc: event.target.value }))}
        />
      </div>
      <div className='mb-6'>
        <label className='mb-2  text-sm font-medium text-gray-900 dark:text-gray-300'>Price</label>
        <input
          type='text'
          className=' w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5'
          placeholder='Price'
          required
          value={formData.price}
          onChange={(event) => setFormData((prev) => ({ ...prev, price: event.target.value }))}
        />
      </div>
      <div className='mb-6'>
        <label className='mb-2  text-sm font-medium text-gray-900 dark:text-gray-300'>Color</label>
        <input
          type='text'
          className=' w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5'
          placeholder='color'
          required
          value={formData.color}
          onChange={(event) => setFormData((prev) => ({ ...prev, color: event.target.value }))}
        />
      </div>
      <div className='mb-6'>
        <label className='mb-2  text-sm font-medium text-gray-900 dark:text-gray-300'>Publish</label>
        <input
          type='checkbox'
          className='  rounded-lg border border-gray-300 bg-gray-50 p-2.5'
          required
          checked={formData.published}
          onChange={(event) => setFormData((prev) => ({ ...prev, published: event.target.checked }))}
        />
      </div>
      {editingPost ? (
        <div className='flex'>
          <button type='submit' className='m-2 rounded-md bg-sky-400 px-2'>
            Update Post
          </button>
          <button className='m-2 rounded-md bg-sky-400 px-2' type='reset'>
            Cancel
          </button>
        </div>
      ) : (
        <div className='flex '>
          <button type='submit' className='m-2 rounded-md bg-sky-400 px-2'>
            Publish Post
          </button>
        </div>
      )}
    </form>
  )
}

export default CreatePost
