import React, { useState, useEffect } from 'react';
import '../app.css';

export default function App() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    function askName() {
      const name = prompt("Введите имя");
      if (name && name.trim() !== '') {
        setUserName(name.trim());
      } else {
        askName();
      }
    }

    askName();
  }, []);

  const data = new Date().toLocaleDateString();
  const random = Math.floor(Math.random() * 100) + 1;
  const hour = new Date().getHours();
  const light = hour >= 6 && hour < 18;

  return (
    <div className={`min-h-[100vh] mx- ${light ? 'bg-gray-300 text-black' : 'bg-gray-800 text-white'}`}>
      <main className='flex items-center justify-center min-h-screen'>
        <div className={`${light ? 'bg-white text-black' : 'bg-gray-900 text-white'} p-10 rounded`}>
          <h2 className='text-[50px] font-bold mb-[30px]'>
            Имя: <span className='text-yellow-300'>{userName}</span>
          </h2>
          <h2 className='text-[50px] font-bold mb-[30px]'>
            Дата: <span className='text-yellow-300'>{data}</span>
          </h2>
          <h2 className='text-[50px] font-bold mb-[30px]'>Рандомное число от 1 до 100</h2>
          <h1 className='text-[80px] font-bold'>{random}</h1>
        </div>
      </main>
    </div>
  );
}
