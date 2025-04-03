"use client"; // Đánh dấu là Client Component

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function ThemeClient() {
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return null; // Không render UI, chỉ để xử lý theme
}
