'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const AddUserPage = () => {
  const router = useRouter();
  return (
    <div>
      <button className='btn btn-primary' onClick={() => router.push('/users')}>
        Create
      </button>
    </div>
  );
};

export default AddUserPage;
