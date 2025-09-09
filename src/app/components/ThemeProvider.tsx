"use client";
import { useState, useEffect } from "react";

export default function ThemeProvider({ children } : { children: React.ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div className={theme === "light" ? "bg-white text-black" : "bg-black text-white"}>
            {children}
            <button
                onClick={toggleTheme}
                className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-800 flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-50"
                aria-label="Toggle Theme"
            >
                {theme === "light" ? "☀️" : "🌙"}
            </button>
        </div>
    );
}