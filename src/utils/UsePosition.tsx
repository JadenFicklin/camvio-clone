import React, {
  useRef,
  useEffect,
  ReactElement,
  FunctionComponent,
  ComponentClass,
} from 'react'

interface UsePositionProps {
  children: ReactElement
}

const UsePosition: React.FC<UsePositionProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isInViewport = (elem: HTMLElement): boolean => {
      const rect = elem.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    const updatePosition = () => {
      if (wrapperRef.current) {
        const { top } = wrapperRef.current.getBoundingClientRect()
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const absoluteTop = top + scrollTop
        const isVisible = isInViewport(wrapperRef.current)

        let componentName = 'Component'
        if (typeof children.type === 'string') {
          componentName = children.type
        } else if (React.isValidElement(children)) {
          const childType = children.type as FunctionComponent | ComponentClass
          componentName = childType.displayName || childType.name || 'Component'
        }

        console.log(`${componentName}, ${absoluteTop}, ${isVisible}`)
      }
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition)

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    }
  }, [children])

  return <div ref={wrapperRef}>{children}</div>
}

export default UsePosition
