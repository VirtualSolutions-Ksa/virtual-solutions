'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Navlink {
    text: string;
    url: string;
}

interface HamburgerMenuProps {
    navLinks: Array<Navlink>
}

export default function HamburgerMenu({ navLinks }: HamburgerMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (link: string) => {
        router.push(link);
        toggleMenu();
    };

    return (
        <nav className="block lg:hidden">
            <div className="flex items-center justify-between">
                <button
                    className="p-2 rounded-md focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg
                        className={`w-8 h-8 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                            className={isOpen ? 'hidden' : 'block'}
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                            className={isOpen ? 'block' : 'hidden'}
                        />
                    </svg>

                </button>
            </div>
            {isOpen && (
                <div
                    className="absolute bg-white top-full right-0 w-full bg-gray-900 text-dark-blue shadow-lg rounded-md mt-2 py-4 z-10 transform transition-transform duration-500 ease-out"
                >
                    {navLinks.map((link, idx) => (
                        <div
                            key={idx}
                            className="font-rubik text-lg font-semibold px-6 py-3 border-b border-gray/15 cursor-pointer hover:bg-gray-800 hover:underline transition-all duration-300"
                            onClick={() => handleClick(link.url)}
                        >
                            {link.text}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
}
