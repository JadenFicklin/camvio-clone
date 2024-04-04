import { useState } from 'react'
import camvio from '~/assets/images/camvio.png'
import { Drawer } from '~/utils/Drawer'
import { HamburgerMenu } from '~/utils/HamburgerMenu'
import { cn } from '~/utils/cn'
export const Nav = () => {
  const [currentNav, setCurrentNav] = useState('HOME')
  const [hamburgerClicked, setHamburgerClicked] = useState(false)
  const navOptions = ['HOME', 'PRODUCTS', 'ABOUT', 'TEAM', 'CLIENTS', 'CONTACT']
  console.log(currentNav)

  return (
    <>
      <nav className="sticky top-0 bg-white lg:bg-opacity-0">
        <div className="flex flex-wrap justify-between w-10/12 py-5 mx-auto duration-150 xl:w-8/12 text-min">
          <div className="w-48 duration-150 cursor-pointer sm:w-52 hover:opacity-70">
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
          {/* mobile */}
          <div
            className="lg:hidden"
            onClick={() => setHamburgerClicked(!hamburgerClicked)}
          >
            <HamburgerMenu clicked={hamburgerClicked} />
          </div>
        </div>
        <div className="absolute w-full bg-white">
          <Drawer show={hamburgerClicked} duration={'500'}>
            {navOptions.map((item) => (
              <div
                className={cn(
                  ' cursor-pointer group font-extrabold text-[12px] text-max hover:text-opacity-60',
                )}
                onClick={() => setCurrentNav(item)}
              >
                {item}
              </div>
            ))}
          </Drawer>
        </div>
      </nav>
    </>
  )
}
