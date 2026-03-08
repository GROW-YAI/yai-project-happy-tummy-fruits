import Navbar from "../components/features/navbar";
import Footer from "../components/features/footer";

export default function Contact() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="container mx-auto px-4 py-20">
                    <section className="text-center">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Get in touch with us for any inquiries or feedback.
                            We'd love to hear from you!
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

