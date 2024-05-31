import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className='font-poppins text-content text-9xl font-bold'>404</h1>
      <h1 className="text-2xl text-black font-semibold font-poppins mb-2">Oops! Page Not Found</h1>
      <p className="text-content mb-4 font-poppins">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to='/'
        className="bg-black font-poppins text-white px-4 py-2 rounded-full transition duration-300"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
