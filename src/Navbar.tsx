// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex justify-center space-x-4">
                <li>
                    <Link
                        to="/"
                        className="text-white text-lg font-semibold hover:bg-blue-700 p-2 rounded"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/greeting/Alice"
                        className="text-white text-lg font-semibold hover:bg-blue-700 p-2 rounded"
                    >
                        Greeting Alice
                    </Link>
                </li>
                <li>
                    <Link
                        to="/greeting/Bob"
                        className="text-white text-lg font-semibold hover:bg-blue-700 p-2 rounded"
                    >
                        Greeting Bob
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
