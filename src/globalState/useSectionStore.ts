import create from 'zustand'

interface SectionState {
  sections: {
    [key: string]: {
      y: number
      isVisible: boolean
    }
  }
  activeSection: string | null // Add an activeSection state to track the currently active section
  setSection: (name: string, y: number, isVisible: boolean) => void
  setActiveSection: (name: string | null) => void // Method to update the active section
}

export const useSectionsStore = create<SectionState>((set) => ({
  sections: {},
  activeSection: null, // Initialize activeSection as null
  setSection: (name, y, isVisible) =>
    set((state) => ({
      sections: {
        ...state.sections,
        [name]: { y, isVisible },
      },
    })),
  setActiveSection: (name) => set(() => ({ activeSection: name })),
}))
