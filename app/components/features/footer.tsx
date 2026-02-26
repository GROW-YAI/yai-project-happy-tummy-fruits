"use client";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">My Website</h3>
                        <p className="text-gray-400">
                            Providing accessible solutions for everyone.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Products</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">Contact</h4>
                        <p className="text-gray-400">Email: contact@mywebsite.com</p>
                        <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400">
                    <p>&copy; 2024 My Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}