import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex bg-slate-300 p-5 '>
      <Link href={'/'} className='mr-5'>
        NextJs
      </Link>
      <Link href={'/users'}>Users</Link>
    </div>
  );
};

export default Navbar;
