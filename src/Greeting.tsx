// src/components/Greeting.tsx
import React from "react";
import { useParams } from "react-router-dom";

const Greeting: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Menampilkan pesan sapaan */}
      <h1 className="text-4xl font-semibold text-blue-600 mb-4">
        Halo, {name}!
      </h1>
      <p className="text-lg text-gray-700">Selamat datang di halaman Greeting!</p>
    </div>
  );
};

export default Greeting;
