import { useState } from 'react'
import camvio from '~/assets/images/camvio.png'
import { cn } from '~/utils/cn'
export const Nav = () => {
  const [currentNav, setCurrentNav] = useState('HOME')
  const navOptions = ['HOME', 'PRODUCTS', 'ABOUT', 'TEAM', 'CLIENTS', 'CONTACT']
  console.log(currentNav)

  return (
    <>
      <nav className="sticky top-0 bg-white lg:bg-opacity-0">
        <div className="flex flex-wrap justify-between w-10/12 py-5 mx-auto duration-150 xl:w-8/12 text-min">
          <div className="duration-150 cursor-pointer w-52 hover:opacity-70">
            <img src={camvio} className="w-full h-full" />
          </div>
          {/* desktop */}
          <div className="items-center hidden lg:flex lg:flex-wrap lg:blocks">
            {navOptions.map((item) => (
              <div
                className={cn(
                  'relative h-full p-4 cursor-pointer group font-extrabold text-[12px]',
                  currentNav === item && 'text-accent',
                )}
                onClick={() => setCurrentNav(item)}
              >
                {item}
                <div className="absolute top-0 w-0 h-full duration-200 -translate-x-1/2 bg-white bg-opacity-20 left-1/2 group-hover:w-full"></div>
              </div>
            ))}

            <div className="p-4 px-6 mx-2 font-extrabold duration-200 rounded-full cursor-pointer bg-accent h-max hover:bg-opacity-75 text-[12px]">
              REQUEST DEMO
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
