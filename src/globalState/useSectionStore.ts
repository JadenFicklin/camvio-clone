import create from 'zustand'

interface SectionState {
  sections: {
    [key: string]: {
      y: number
      isVisible: boolean
    }
  }
  activeSection: string | null
  setSection: (name: string, y: number, isVisible: boolean) => void
  setActiveSection: (name: string | null) => void
}

export const useSectionsStore = create<SectionState>((set) => ({
  sections: {},
  activeSection: null,
  setSection: (name, y, isVisible) =>
    set((state) => ({
      sections: {
        ...state.sections,
        [name]: { y, isVisible },
      },
    })),
  setActiveSection: (name) => set(() => ({ activeSection: name })),
}))
