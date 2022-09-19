import create from "zustand";

interface Store {
  darkMode: boolean;
  setDarkMode: () => void;
}

const useStore = create<Store>((set) => ({
  darkMode: false,
  setDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useStore;
