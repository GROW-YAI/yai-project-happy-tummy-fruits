import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/features/navbar";
import Footer from "./components/features/footer";
import BoafoWidgetInitializer from "./components/BoafoWidgetInitializer";

export const metadata: Metadata = {
    title: "Happy Tummy Foods - Natural Goodness for All Ages",
    description: "Premium cereals crafted with care for both babies and adults",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <BoafoWidgetInitializer />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
