import Navbar from "../components/features/navbar";
import Footer from "../components/features/footer";

export default function About() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="container mx-auto px-4 py-20">
                    <section className="text-center">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            About Us
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Learn more about Happy Tummy Foods and our mission to provide
                            natural, healthy products for all ages.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

