"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#home" className="flex items-center space-x-2">
                            <Image 
                                src="/Assets/images/happy-tummy-foods-logo.webp" 
                                alt="happy-tummy-foods-logo" 
                                width={144}
                                height={64}
                            />
                        </a>
                    </div>
                    
                    {/* Mobile menu button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex items-center p-2 rounded-md hover:bg-gray-100"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-600 hover:text-yellow-600 transition-colors">Home</a>
                        <a href="#about" className="text-gray-600 hover:text-yellow-600 transition-colors">About</a>
                        <a href="#products" className="text-gray-600 hover:text-yellow-600 transition-colors">Products</a>
                        <a href="#contact" className="text-gray-600 hover:text-yellow-600 transition-colors">Contact</a>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#home" className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Home</a>
                            <a href="#about" className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>About</a>
                            <a href="#products" className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Products</a>
                            <a href="#contact" className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Contact</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
