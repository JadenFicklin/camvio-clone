import { create } from 'zustand'

interface SectionState {
  sections: {
    [key: string]: {
      y: number
      isVisible: boolean
    }
  }
  setSection: (name: string, y: number, isVisible: boolean) => void
}

export const useSectionsStore = create<SectionState>((set) => ({
  sections: {},
  setSection: (name, y, isVisible) =>
    set((state) => ({
      sections: {
        ...state.sections,
        [name]: { y, isVisible },
      },
    })),
}))
