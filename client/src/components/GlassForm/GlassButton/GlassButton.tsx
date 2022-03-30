import React from 'react';

interface propTypes {
  title: string;
}

const GlassButton = ({ title }: propTypes) => {
  return (
    <button
      title='button'
      type='button'
      className='p-2 mt-4 text-white bg-gradient-to-r from-indigo-900 to-indigo-800/80 w-72 rounded-xl'
    >
      {title}
    </button>
  );
};

export default GlassButton;
