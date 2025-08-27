import Image from 'next/image'

const Loading = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center h-full'>
        <Image src='/spinner.gif' width={100} height={100} alt='Spinner.gif' />
      </div>
    </>
  )
}

export default Loading
