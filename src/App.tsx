import './App.scss'
import { useState } from "react";

export default function App() {
  const [randomNumbers1, setRandomNumbers1] = useState<number[]>([]);
  const [randomNumbers2, setRandomNumbers2] = useState<number[]>([]);
  const [commonNumbersCount, setCommonNumbersCount] = useState<number>(0);


  const generateRandomNumbers = () => {
    const newRandomNumbers1 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
    setRandomNumbers1(newRandomNumbers1);

    const newRandomNumbers2 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
    setRandomNumbers2(newRandomNumbers2);

    // Calculate the number of common elements between the two arrays
    const commonNumbers = newRandomNumbers1.filter((number) => newRandomNumbers2.includes(number));
    setCommonNumbersCount(commonNumbers.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={generateRandomNumbers}
      >
        Losuj
      </button>
      <div className="flex">
        <div className="flex flex-col items-center mx-4">
          <p className="text-lg font-bold mb-2">Liczby Wylosowane:</p>
          {randomNumbers1.map((number, index) => (
            <p
              key={index}
              className={`text-lg rounded-full py-2 px-4 mb-2 ${
                randomNumbers2.includes(number) ? 'bg-green-200' : 'bg-red-100'
              }`}
              style={{ width: '55px', height: '45px', textAlign: 'center' }}
            >
              {number}
            </p>
          ))}
        </div>
        <div className="flex flex-col items-center mx-4">
          <p className="text-lg font-bold mb-2">Liczby wygrywające:</p>
          {randomNumbers2.map((number, index) => (
            <p
              key={index}
              className={`text-lg rounded-full py-2 px-4 mb-2 ${
                randomNumbers1.includes(number) ? 'bg-green-200' : 'bg-red-100'
              }`}
              style={{ width: '55px', height: '45px', textAlign: 'center' }}
            >
              {number}
            </p>
          ))}
        </div>
      </div>
      <p className="mt-4">
        Licznik takich samych liczb: <span className="font-bold">{commonNumbersCount}</span>
      </p>
    </div>
  );
}