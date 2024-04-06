import React, { useRef, useEffect, ReactElement } from 'react'
import { useSectionsStore } from '~/globalState/useSectionStore'

interface UsePositionProps {
  children: ReactElement
  name: string
}

const UsePosition: React.FC<UsePositionProps> = ({ children, name }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const setSection = useSectionsStore((state) => state.setSection)

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

        setSection(name, absoluteTop, isVisible)
      }
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition)

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    }
  }, [children, name, setSection])

  return <div ref={wrapperRef}>{children}</div>
}

export default UsePosition
