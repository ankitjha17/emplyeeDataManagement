import Link from 'next/link';
import React from 'react';

const Page = () => {

  // const pageStyle = {
  //   backgroundImage: 'url("/ManagementImg.jpg")',
  //   backgroundSize: 'contain',
  //   backgroundRepeat: 'no-repeat',
  // };

  return (
    <div className='bg-slate-900'>
    <div className='flex justify-center items-center h-screen'
    // style={pageStyle}
    >
      <div>
        <Link href='/employee/employeelist'>
          <button
            className='border border-gray-400 rounded-lg font-medium  text-white px-3 py-1.5 mx-2'>
            View Employee Details
          </button>
        </Link>

        <Link href='/employee/addemployee'>
          <button
            className='border border-gray-400 rounded-lg font-medium  text-white px-3 py-1.5 mx-2'>
            Add Employee
          </button>
        </Link>
      </div>
    </div >
    </div>
  );
}



export default Page;