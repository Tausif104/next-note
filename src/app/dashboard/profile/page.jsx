import { getUserProfile } from '@/app/actions/user-actions'
import Link from 'next/link'
import { Edit3Icon } from 'lucide-react'

const ProfilePage = async () => {
  const { user } = await getUserProfile()

  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>Profile</h1>
        <Link
          href='/dashboard/profile/edit'
          className='flex items-center gap-3'
        >
          <Edit3Icon width={15} /> Edit Profile
        </Link>
      </div>
      <div className='flex flex-col gap-4 mt-5'>
        <div>
          <p>
            <strong>First Name:</strong> {user?.firstname}
          </p>
        </div>
        <div>
          <p>
            <strong>Last Name:</strong> {user?.lastname}
          </p>
        </div>
        <div>
          <p>
            <strong>email:</strong> {user?.email}
          </p>
        </div>
        <div>
          <p>
            <strong>Address:</strong> {user?.profile?.address}
          </p>
        </div>
        <div>
          <p>
            <strong>Fathers Name:</strong> {user?.profile?.fathersname}
          </p>
        </div>
        <div>
          <p>
            <strong>Mothers Name:</strong> {user?.profile?.mothersname}
          </p>
        </div>
        <div>
          <p>
            <strong>Hobby:</strong> {user?.profile?.hobby}
          </p>
        </div>
        <div>
          <p>
            <strong>Phone:</strong> {user?.profile?.phone}
          </p>
        </div>
        <div>
          <p>
            <strong>Hobby:</strong> {user?.profile?.profession}
          </p>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
