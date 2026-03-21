export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Centered grid with only 3 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Happy Tummy Foods</h4>
                        <p className="text-gray-400">Nourishing generations with natural goodness and care.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#home" className="hover:text-yellow-500 transition-colors duration-300">Home</a></li>
                            <li><a href="#about" className="hover:text-yellow-500 transition-colors duration-300">About Us</a></li>
                            <li><a href="#products" className="hover:text-yellow-500 transition-colors duration-300">Products</a></li>
                            <li><a href="#contact" className="hover:text-yellow-500 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Products</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#products" className="hover:text-yellow-500 transition-colors duration-300">Baby Cereals</a></li>
                            <li><a href="#products" className="hover:text-yellow-500 transition-colors duration-300">Adult Cereals</a></li>
                            <li><a href="#products" className="hover:text-yellow-500 transition-colors duration-300">Special Blends</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Happy Tummy Foods. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
