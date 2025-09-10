"use client";
import { useState, useEffect } from "react";

export default function ThemeProvider({ children } : { children: React.ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) setTheme(savedTheme);

        const html = document.documentElement;
        html.classList.remove("light", "dark");
        html.classList.add(savedTheme ?? "light");
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        html.classList.remove("light", "dark");
        html.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
            {children}
            <button
                onClick={toggleTheme}
                className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-50"
                aria-label="Toggle Theme"
            >
                {theme === "light" ? "☀️" : "🌙"}
            </button>
        </>
    );
}