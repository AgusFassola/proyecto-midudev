import {create } from 'zustand'

export const useAuthStore = create((set) =>({
    //estado
    isLoggedIn: false,
    //acciones
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false })
})
)