import { User, BookCopy, ChartBarStacked } from 'lucide-react'

const Dashboard = async () => {
  return (
    <>
      <div className='grid grid-cols-4 gap-5'>
        <div className='text-center bg-white py-5 rounded-lg'>
          <User
            className='text-green-300 mx-auto mb-3'
            width={40}
            height={40}
          />
          <h3 className='font-bold text-2xl'>20 Users</h3>
        </div>
        <div className='text-center bg-white py-5 rounded-lg'>
          <BookCopy
            className='text-green-300 mx-auto mb-3'
            width={40}
            height={40}
          />
          <h3 className='font-bold text-2xl'>45 Posts</h3>
        </div>
        <div className='text-center bg-white py-5 rounded-lg'>
          <ChartBarStacked
            className='text-green-300 mx-auto mb-3'
            width={40}
            height={40}
          />
          <h3 className='font-bold text-2xl'>15 Categories</h3>
        </div>
        <div className='text-center bg-white py-5 rounded-lg'>
          <User
            className='text-green-300 mx-auto mb-3'
            width={40}
            height={40}
          />
          <h3 className='font-bold text-2xl'>20 Users</h3>
        </div>
      </div>
    </>
  )
}

export default Dashboard
