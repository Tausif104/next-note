import { getAllPosts } from '@/app/actions/post-actions'
import PostItem from './PostItem'

const PostList = async () => {
  const { posts } = await getAllPosts()

  return (
    <>
      <div className='grid grid-cols-3 gap-4 mt-4'>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default PostList
