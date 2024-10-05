"use client";

import React, { useState, useEffect } from "react";

const StopWatchPage = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (value) => {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-gray-700 text-white text-5xl font-bold py-6 px-4 rounded-lg shadow-lg">
        {formatTime(time)}
      </div>
      <div className="flex gap-x-4 mt-6">
        <button
          onClick={start}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Pause
        </button>
        <button
          onClick={reset}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatchPage;
