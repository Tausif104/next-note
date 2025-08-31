const PostItem = ({ post }) => {
  return (
    <>
      <div className='bg-green-200 p-4 rounded-md'>
        <h3>
          <strong>{post?.title}</strong>
        </h3>
        <p>{post?.body}</p>
      </div>
    </>
  )
}

export default PostItem
