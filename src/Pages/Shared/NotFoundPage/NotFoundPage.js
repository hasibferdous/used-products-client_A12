import { HandThumbDownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'


const NotFoundPage = () => {
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
      <img src={'https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=740&t=st=1669279703~exp=1669280303~hmac=9728eb70559cc9db9d5942edbf50df7106a0892dde4b91c2c81c4daac816b75d'} className=" rounded-lg lg:w-1/2 shadow-2xl" />
            
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-500'>
            <span className='sr-only'>Error</span>
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            Sorry, We Couldn't Find This Page.
          </p>
          <Link to='/'>
            <button className='px-8 py-3 font-semibold rounded bg-red-200 shadow-2xl'>
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage
