import { create } from "zustand";

export const useUserStore = create((set) => ({
    userId: -1,
    username: "",
    isAuthenticated: false,
    setUser: (user) => set({ userId: user.id, username: user.username, isAuthenticated: true }),
    setUsername: (username) => set({ username: username }),
    logOut: () => set({ userId: "", username: user.username, isAuthenticated: false })
}));