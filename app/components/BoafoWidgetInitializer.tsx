"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
    useEffect(() => {
        try {
            // Replace with your actual API key from Boafo dashboard
            const BOAFO_API_KEY = "boafo_5678";
            if (BOAFO_API_KEY && typeof window !== "undefined") {
                initializeBoafoWidget(BOAFO_API_KEY);
            }
        } catch (error) {
            console.error("Failed to initialize Boafo widget:", error);
        }
    }, []);

    return null; // Widget renders itself in the DOM
}