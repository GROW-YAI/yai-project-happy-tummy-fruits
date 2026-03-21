import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Tiger Nut Pouch",
        description: "Premium tiger nuts packed with fiber, vitamins, and minerals. A delicious and nutritious snack for all ages.",
        image: "/Assets/images/tigernut-pouch-front-design-new.webp",
    },
    {
        id: 2,
        name: "Coconut Pouch",
        description: "Natural coconut products rich in healthy fats and tropical flavor. Perfect for cooking and snacking.",
        image: "/Assets/images/Coconut-pouch-front-design-with.webp",
    },
    {
        id: 3,
        name: "Banana Pouch",
        description: "Wholesome banana products packed with potassium and natural sweetness. Great for smoothies and baking.",
        image: "/Assets/images/Banana-Pouch-design-112-1-742x10.webp",
    },
];

export default function Products() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Our Products
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore our range of natural, healthy food products
                        crafted with care for the whole family.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <div className="relative h-64 w-full bg-gray-100">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {product.description}
                                    </p>
                                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Why Our Products?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">100% Natural</h3>
                            <p className="text-gray-600 text-sm">No artificial additives or preservatives</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
                            <p className="text-gray-600 text-sm">Rigorously tested for purity</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Family Friendly</h3>
                            <p className="text-gray-600 text-sm">Safe and healthy for all ages</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Sustainably Sourced</h3>
                            <p className="text-gray-600 text-sm">Ethically harvested ingredients</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

