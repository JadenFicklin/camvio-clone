import { create } from 'zustand'

type NavName = 'HOME' | 'PRODUCTS' | 'ABOUT' | 'TEAM' | 'CLIENTS' | 'CONTACT'

interface NavState {
  nav: NavName
  setNav: (navName: NavName) => void
}

export const useNavStore = create<NavState>()((set) => ({
  nav: 'HOME',
  setNav: (navName) => set({ nav: navName }),
}))
