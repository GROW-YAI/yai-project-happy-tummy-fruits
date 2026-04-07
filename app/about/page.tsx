import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        About Happy Tummy Foods
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Learn more about our mission to provide natural, healthy products
                        that bring joy and nutrition to families everywhere.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Happy Tummy Foods was founded with a simple mission: to bring the natural
                                goodness of traditional African superfoods to families around the world.
                                We believe that nature provides the best nutrition, and our products
                                reflect that philosophy.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Starting with tiger nuts - a nutrient-rich superfood enjoyed for centuries
                                in West Africa - we've expanded our range to include coconut and banana
                                products, all crafted with the same care and commitment to quality.
                            </p>
                            <p className="text-gray-600">
                                Every product we create is made with 100% natural ingredients, no artificial
                                additives, and a deep respect for the environment and the communities
                                that grow our ingredients.
                            </p>
                        </div>
                        <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/Assets/images/Freda-image.webp"
                                alt="Happy Tummy Foods Founder"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Health First</h3>
                            <p className="text-gray-600">
                                We prioritize your health by offering products that are 100% natural,
                                free from artificial additives, and packed with essential nutrients.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
                            <p className="text-gray-600">
                                We're committed to sustainable sourcing and environmentally responsible
                                practices that protect our planet for future generations.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
                            <p className="text-gray-600">
                                We work closely with local farmers and communities, ensuring fair trade
                                practices and supporting livelihoods across our supply chain.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16 bg-green-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                    <p className="text-xl text-green-100 max-w-3xl mx-auto">
                        To make natural, healthy superfoods accessible to everyone, while
                        supporting sustainable farming practices and empowering communities
                        across Africa and beyond.
                    </p>
                </div>
            </section>
        </main>
    );
}

