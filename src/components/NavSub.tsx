import { Link } from 'react-router-dom'

export const NavSub = () => {
  return (
    <>
      <nav className="w-full py-3 h-max bg-max">
        <div className="flex flex-wrap justify-center mx-auto space-x-5 sm:w-10/12 xl:w-8/12 lg:justify-start text-min">
          <Link
            to="/announcements"
            className="text-white duration-150 cursor-pointer hover:text-gray-300"
          >
            Announcements
          </Link>
          <Link
            to="/"
            className="text-white duration-150 cursor-pointer hover:text-gray-300"
          >
            Blog
          </Link>
          <Link
            to="/"
            className="text-white duration-150 cursor-pointer hover:text-gray-300"
          >
            Support
          </Link>
        </div>
      </nav>
    </>
  )
}
