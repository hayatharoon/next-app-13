import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <h1 className='p-5 bg-slate-300'>Admin Layout</h1>
      <main>{children}</main>
    </div>
  );
};

export default layout;
