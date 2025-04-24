import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import Logo from '../../assets/Logo.png';
import DarkMode from '../DarkMode';
import { Link } from 'react-router-dom';

// const Menu = [
//   {
//     id: 1,
//     name: "Beranda",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Top Up",
//     link: "/topup",
//   },
//   {
//     id: 3,
//     name: "Joki",
//     link: "/joki",
//   },
//   {
//     id: 4,
//     name: "Pulsa",
//     link: "/pulsa",
//   }
// ];

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Popular Products",
//     link: "/popular",
//   },
//   {
//     id: 2,
//     name: "Best Selling",
//     link: "/bestsell",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     link: "/toprated",
//   },
// ];

const NavBar = () => {

  return (
    <div className='shadow-md bg-white dark:bg-gray-900 
    dark:text-white duration-200 relative z-40'>
      {/* <NavBar />uppernavbar */}
      <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center px-4'>
          <div>
            <Link to={`/`}>
            <p className='font-bold 
              text-2xl sm:text-3xl flex gap-2'>
              <img src={Logo} alt='Logo'
                className='object-contain w-10 h-10 rounded-full custom-position' />
              FARISTORE
            </p>
            </Link>
          </div>
          {/* search bar */}
          <div className='flex justify-between
             items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input type='text'
                placeholder='search'
                className='w-[200px] sm:w-[200px] group-hover:w-[300px] 
                transition-all duration-300 rounded-full border border-gray-300 
                px-2 py-1 focus:outline-none focus:border-1 focus:border-primary
                dark:border-gray-500 dark:bg-gray-800'
              />
              <IoMdSearch
                className='text-gray-500 group-hover:text-primary 
                absolute top-1/2 -translate-y-1/2 right-3'
              />
            </div>
            {/* invoice button */}
            <Link to={`/invoices`}>
              <button
                // onClick={() => alert("Invoice not available yet")}
                className='bg-gradient-to-r from-primary to-secondary 
              transition-all duration-200 py-1 px-4 
              rounded-full flex items-center gap-3 group'
              >
                <span
                  className='group-hover:block hidden group-hover:w-[100px]
                 transition-all duration-1000'
                >Cek Transaksi</span>
                <FaCartShopping
                  className='text-xl drop-shadow-sm 
                cursor-pointer'
                />
              </button>
            </Link>
            {/* SignIn */}
            <div>
            <Link to={`/Login`}>
              <button
                  className='bg-gradient-to-r from-primary to-secondary 
                  py-1 px-4 rounded-full flex items-center gap-3 group'
                >
                  <p>Sign In</p>
              </button>
              </Link>
            </div>
            {/* DarkMode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* <NavBar />lowernavbar */}
      {/* <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-12 divide-x 
        border-2 rounded-md border-spacing-8 dark:border-gray-500'>
          {
            Menu.map((data) => (
              <li key={data.id} className='justify-between'>
                <a href={data.link}
                  className='inline-block px-1 py-1 text-2sm 
                hover:text-primary duration-200'>
                  {data.name}
                </a>
              </li>
            ))} */}
      {/* simple dropdown and links*/}
      {/* <li className='group relative cursor-pointer'>
            <a
              href='#'
              className='flex items-center 
              text-2sm gap-[12px] px-2 py-1
              hover:text-primary duration-200'>
              Popular
              <span>
                <FaCaretDown
                  className='transition-all duration-200
                  group-houver:rotate-180'/>
              </span>
            </a>
            <div className='absolute z-[9999] hidden
            group-hover:block w-[150px] rounded-md
            bg-white p-2 text-black shadow-md'>
              <ul>
                {DropdownLinks.map((data) => (
                  <React.Fragment key={data.id}>
                    <li>
                      <a href={data.link}
                      className='inline-block w-full rounded-md
                      p-2 hover:bg-primary/20 '>
                        {data.name}
                      </a>
                    </li>
                  </React.Fragment>
                ))
                }
              </ul>
            </div>
          </li> 
        </ul>
      </div> */}
    </div>
  );
};

export default NavBar