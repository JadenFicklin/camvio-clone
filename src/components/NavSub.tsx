export const NavSub = () => {
  return (
    <>
      <nav className="w-full py-3 h-max bg-max">
        <div className="flex flex-wrap justify-center w-8/12 mx-auto space-x-5 lg:justify-start text-min">
          <div className="duration-150 cursor-pointer hover:text-gray-300">
            Announcements
          </div>
          <div className="duration-150 cursor-pointer hover:text-gray-300">
            Blog
          </div>
          <div className="duration-150 cursor-pointer hover:text-gray-300">
            Support
          </div>
        </div>
      </nav>
    </>
  )
}
