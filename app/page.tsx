export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-20">
                <section className="text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Welcome to Happy Tummy Foods
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Natural goodness for all ages. Our products are carefully crafted
                        to provide nutrition and delight in every bite.
                    </p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                        Explore Products
                    </button>
                </section>

                <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Natural Ingredients
                        </h3>
                        <p className="text-gray-600">
                            We use only the finest natural ingredients sourced responsibly.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Healthy & Nutritious
                        </h3>
                        <p className="text-gray-600">
                            Packed with essential nutrients and vitamins for your wellbeing.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Family Approved
                        </h3>
                        <p className="text-gray-600">
                            Trusted by families across the world for quality and taste.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
