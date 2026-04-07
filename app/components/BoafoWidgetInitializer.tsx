"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
    useEffect(() => {
        try {
            // API key from environment variable
            const BOAFO_API_KEY = process.env.NEXT_PUBLIC_BOAFO_API_KEY;
            if (BOAFO_API_KEY && typeof window !== "undefined") {
                initializeBoafoWidget(BOAFO_API_KEY);
            }
        } catch (error) {
            console.error("Failed to initialize Boafo widget:", error);
        }
    }, []);

    return null; // Widget renders itself in the DOM
}