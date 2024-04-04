import { cn } from '~/utils/cn'

interface HamburgerMenuProps {
  clicked: boolean
}

export const HamburgerMenu = ({ clicked }: HamburgerMenuProps) => {
  return (
    <div className="p-4 py-4 cursor-pointer group">
      <div className="size-[26px] h-[16px] relative flex flex-col justify-between ">
        <span
          className={cn(
            'w-full h-[2px] rounde-full bg-max group-hover:bg-[rgb(245,89,61)] duration-300 relative',
            clicked && 'rotate-45 top-2',
          )}
        ></span>
        <span
          className={cn(
            'w-full h-[2px] rounde-full bg-max group-hover:bg-[rgb(245,89,61)] duration-200',
            clicked && 'w-0',
          )}
        ></span>
        <span
          className={cn(
            'w-full h-[2px] rounde-full bg-max group-hover:bg-[rgb(245,89,61)] duration-300 relative',
            clicked && '-rotate-45 bottom-2',
          )}
        ></span>
      </div>
    </div>
  )
}
