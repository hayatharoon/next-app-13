import React, { Suspense } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  searchParams: {
    sortOrder: string;
  };
}
const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return (
    <>
      <h1>Users</h1>
      <Link href={'/users/new'} className='btn'>
        Add User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UserPage;
