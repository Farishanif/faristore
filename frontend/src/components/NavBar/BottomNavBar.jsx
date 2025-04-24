import React from 'react'

const BottomNavBar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 
    dark:text-white duration-200 relative z-40'>
      {/* <NavBar />uppernavbar */}
      <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center px-4'>
          <div>
            <a className='font-bold 
              text-sm sm:text-sm flex gap-2'>
              © 2024 FARISTORE. All rights reserved.
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomNavBar