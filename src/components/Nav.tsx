import { useEffect, useState } from 'react'
import camvio from '~/assets/images/camvio.png'
import { Drawer } from '~/utils/Drawer'
import { HamburgerMenu } from '~/utils/HamburgerMenu'
import { cn } from '~/utils/cn'
export const Nav = () => {
  const [currentNav, setCurrentNav] = useState('HOME')
  const [hamburgerClicked, setHamburgerClicked] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const navOptions = ['HOME', 'PRODUCTS', 'ABOUT', 'TEAM', 'CLIENTS', 'CONTACT']

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'sticky top-0 bg-white z-40',
          isSticky ? 'bg-white shadow-2xl' : 'lg:bg-opacity-0',
        )}
      >
        <div
          className={cn(
            'flex flex-wrap justify-between w-10/12 mx-auto duration-150 py-7 xl:w-8/12 text-min',
            isSticky && 'text-max py-3',
          )}
        >
          <div className="w-48 duration-150 cursor-pointer sm:w-52 hover:opacity-70">
            <img src={camvio} alt="camvio" className="w-full h-full" />
          </div>
          {/* desktop */}
          <div className="items-center hidden lg:flex lg:flex-wrap lg:blocks">
            {navOptions.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'relative h-full p-4 cursor-pointer group font-extrabold text-[12px] text-min',
                  isSticky && 'hover:text-accent duration-150 text-max',
                  currentNav === item && 'text-accent',
                )}
                onClick={() => setCurrentNav(item)}
              >
                {item}
                <div className="absolute top-0 w-0 h-full duration-200 -translate-x-1/2 bg-min bg-opacity-20 left-1/2 group-hover:w-full"></div>
              </div>
            ))}
            <div className="p-4 px-7 mx-2 font-extrabold duration-200 rounded-full cursor-pointer bg-accent h-max hover:bg-opacity-75 text-[12px] text-min">
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
        <div className="absolute w-full bg-white lg:hidden">
          <Drawer show={hamburgerClicked} duration={'500'}>
            <div className="w-10/12 py-3 mx-auto">
              {navOptions.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    ' cursor-pointer group font-extrabold text-[12px] text-max hover:text-opacity-60 py-4',
                  )}
                  onClick={() => setCurrentNav(item)}
                >
                  {item}
                </div>
              ))}
              <div className="p-4 my-2 px-6 font-extrabold duration-200 rounded-full cursor-pointer bg-accent h-max hover:bg-opacity-75 text-[12px] text-min">
                REQUEST DEMO
              </div>
            </div>
          </Drawer>
        </div>
      </nav>
    </>
  )
}
