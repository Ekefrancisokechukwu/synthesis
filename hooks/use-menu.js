import { create } from "zustand";

export const useMenu = create((set) => ({
  isOpen: false,
  handleToggle: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set((state) => ({ isOpen: false })),
}));
