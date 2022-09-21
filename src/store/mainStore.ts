import create from "zustand";

interface Store {
  darkMode: boolean;
  setDarkMode: () => void;
  step: number;
  setStep: (num: number) => void;
}

const useStore = create<Store>((set) => ({
  darkMode: false,
  setDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  step: 0,
  setStep: (num: number) => set(() => ({ step: num })),
}));

export default useStore;
