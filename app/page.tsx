"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
    const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

    const products = [
        {
            id: 1,
            name: "Baby's First Cereal",
            description: "Gentle, easily digestible cereal perfect for introducing solid foods.",
            details: "Contains: Organic oats, coconut milk powder, vitamins. Suitable for 6+ months.",
            image: "/Assets/images/Coconut-pouch-front-design-with.webp",
        },
        {
            id: 2,
            name: "Mixed Grain Blend",
            description: "A nutritious mix of carefully selected grains for the whole family.",
            details: "Contains: Quinoa, millet, brown rice, chia seeds. Rich in fiber and protein.",
            image: "/Assets/images/Banana-Pouch-design-112-1-742x10.webp",
        },
        {
            id: 3,
            name: "Adult Wellness Cereal",
            description: "Premium blend with added nutrients for adult dietary needs.",
            details: "Contains: Tiger nuts, almonds, flaxseeds, probiotics. Supports gut health.",
            image: "/Assets/images/tigernut-pouch-front-design-new.webp",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center">
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.7] animate-fade-in"
                    style={{ backgroundImage: "url('/Assets/images/Artboard-2-3.png')" }}
                />
                <div className="relative z-10 text-center md:text-left text-white px-4 max-w-4xl mx-auto md:ml-[90px] md:max-w-[580px] animate-slide-up">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 md:mb-6">
                        Nourishing Generations with Natural Goodness
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8">
                        Premium cereals crafted with care for both babies and adults
                    </p>
                    <a 
                        href="#products"
                        className="inline-block bg-yellow-500 text-gray-900 px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
                    >
                        Discover Our Products
                    </a>
                </div>
            </section>

            {/* About Products Section */}
            <section id="about" className="py-12 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
                        Why Choose Our Cereals?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Natural Ingredients</h3>
                            <p className="text-gray-600">Carefully selected grains and natural ingredients for optimal nutrition</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Age-Appropriate</h3>
                            <p className="text-gray-600">Specially formulated for different age groups and dietary needs</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Health-Focused</h3>
                            <p className="text-gray-600">Rich in essential nutrients for healthy growth and development</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Innovator Section */}
            <section className="py-12 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-2 md:order-1 flex justify-center">
                            <Image 
                                src="/Assets/images/Freda-image.png" 
                                alt="Freda Araba Obiri"
                                width={300}
                                height={400}
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div className="order-1 md:order-2 text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Freda Araba Obiri</h2>
                            <p className="text-gray-600 mb-6">
                                A passionate innovator from Sekondi-Takoradi, Western Region, Freda is dedicated to revolutionizing 
                                the cereal industry with nutritious options for everyone. Her vision stems from identifying the need 
                                for high-quality, versatile cereals that cater to both babies and adults.
                            </p>
                            <div className="flex items-center mb-4">
                                <svg className="w-6 h-6 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span>Innovator & Nutrition Enthusiast</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Sekondi-Takoradi, Western Region</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-12 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-left mb-12 md:mb-16">
                        Our Products
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                        {products.map((product) => (
                            <div 
                                key={product.id}
                                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                            >
                                <Image 
                                    src={product.image} 
                                    alt={product.name}
                                    width={400}
                                    height={192}
                                    className="w-full h-48 object-contain"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <button 
                                        onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200"
                                    >
                                        {expandedProduct === product.id ? 'View Less' : 'View More'}
                                    </button>
                                    {expandedProduct === product.id && (
                                        <div className="mt-4">
                                            <p className="text-gray-700">{product.details}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-12 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-left mb-12 md:mb-16">Get in Touch</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+233 (0) 20 123 4567</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>contact@fredascereals.com</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>Sekondi-Takoradi, Western Region, Ghana</span>
                                </div>
                                <div className="flex space-x-4 mt-6">
                                    <a href="https://www.facebook.com/profile.php?id=100081530135792" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/happy.tummyfoodsgh/?utm_source=ig_web_button_share_sheet" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                    <a href="https://x.com/happytummyfood1" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}

function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-200"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-200"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-200"
                    required
                />
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors duration-300 disabled:bg-yellow-400"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
