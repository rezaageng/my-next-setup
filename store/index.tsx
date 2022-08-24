import create from 'zustand';

interface ICookies {
  cookies: number;
  increase: () => void;
}

const useCookiesStore = create<ICookies>()((set) => ({
  cookies: 0,
  increase: () => set((state) => ({ cookies: state.cookies + 1 })),
}));

export default useCookiesStore;
