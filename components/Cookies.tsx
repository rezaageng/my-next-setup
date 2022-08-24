import { FC, useState } from 'react';
import useCookiesStore from '../store';

const Cookies: FC = () => {
  const [count, setCount] = useState(0);
  const cookies = useCookiesStore((state) => state.cookies);
  const addCookies = useCookiesStore((state) => state.increase);

  return (
    <div className="grid place-content-center min-h-screen">
      <p>You clicked {count} times</p>
      <button
        className="bg-indigo-600 text-white"
        type="button"
        onClick={() => setCount((state) => state + 1)}
      >
        Cookies! from useState
      </button>
      <p>You clicked {cookies} times</p>
      <button
        className="bg-indigo-600 text-white"
        type="button"
        onClick={addCookies}
      >
        Cookies! from zustand
      </button>
    </div>
  );
};

export default Cookies;
