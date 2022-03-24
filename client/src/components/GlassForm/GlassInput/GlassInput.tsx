import React from 'react';

interface propTypes {
  placeholder: string;
}

const GlassInput = ({ placeholder }: propTypes) => {
  return (
    <div className=''>
      <label>Username</label>
      <input placeholder={placeholder} className='border border-black ' />
    </div>
  );
};

export default GlassInput;
