import React, { useRef, useEffect } from 'react'
import { useSectionsStore } from '~/globalState/useSectionStore'

interface UsePositionProps {
  children: React.ReactElement
  name: string
}

const UsePosition: React.FC<UsePositionProps> = ({ children, name }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { setSection, setActiveSection } = useSectionsStore()

  useEffect(() => {
    const isInViewport = (elem: HTMLElement): boolean => {
      const rect = elem.getBoundingClientRect()
      return (
        rect.bottom >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)
      )
    }

    const updatePositionAndVisibility = () => {
      if (wrapperRef.current) {
        const { top } = wrapperRef.current.getBoundingClientRect()
        const absoluteTop = top + window.scrollY
        const isVisible = isInViewport(wrapperRef.current)
        setSection(name, absoluteTop, isVisible)

        if (isVisible) {
          setActiveSection(name)
        }
      }
    }

    updatePositionAndVisibility()
    window.addEventListener('resize', updatePositionAndVisibility)
    window.addEventListener('scroll', updatePositionAndVisibility)

    return () => {
      window.removeEventListener('resize', updatePositionAndVisibility)
      window.removeEventListener('scroll', updatePositionAndVisibility)
    }
  }, [name, setSection, setActiveSection])

  return <div ref={wrapperRef}>{children}</div>
}

export default UsePosition
