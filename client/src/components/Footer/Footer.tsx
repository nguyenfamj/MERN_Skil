import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-screen p-4 mt-12 rounded-lg md:flex md:items-center md:justify-between md:p-6'>
      <span className='text-sm text-indigo-900/80 sm:text-center '>
        © 2022{' '}
        <a href='https://github.com/nguyenfamj' className='hover:underline'>
          @nguyenfamj
        </a>
        . All Rights Reserved.
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm text-indigo-900/80 sm:mt-0'>
        <li>
          <Link to='/dashboard' className='mr-4 hover:underline md:mr-6'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to='/about' className='mr-4 hover:underline md:mr-6'>
            About
          </Link>
        </li>
        <li>
          <Link to='/profile' className='mr-4 hover:underline md:mr-6'>
            Profile
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
