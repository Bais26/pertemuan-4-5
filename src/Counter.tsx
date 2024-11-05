import { useEffect, useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Komponen telah dipasang dan count telah diperbarui", count);

        return () => {
            console.log('Komponen dicopot');
        }
    }, [count]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-semibold text-blue-600 mb-4">Count: {count}</h1>
            <button 
                onClick={() => setCount(count + 1)} 
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Tambah
            </button>
        </div>
    );
};

export default Counter;
