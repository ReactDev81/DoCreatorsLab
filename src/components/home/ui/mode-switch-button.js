'use client'
import { useEffect, useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';

const ModeSwtichButton = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="bottom-18 fixed bottom-5 right-5 z-10">
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full text-white"
        style={{
          background:
            'linear-gradient(265.2deg, #48AAFF 5.21%, #0475DC 43.25%)',
        }}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
      </button>
    </div>
  );
};

export default ModeSwtichButton;
