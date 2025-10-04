import { type ReactNode } from "react";

interface FloatingActionButtonProps {
    children: ReactNode;
    onClick?: () => void;
    ariaLabel: string;
    title: string;
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
    color?: "blue" | "green" | "red" | "gray";
}

export const FloatingActionButton = ({
    children,
    onClick,
    ariaLabel,
    title,
    position = "bottom-right",
    color = "blue",
}: FloatingActionButtonProps) => {
    const positionClasses = {
        "bottom-right": "fixed bottom-20 right-4",
        "bottom-left": "fixed bottom-20 left-4",
        "top-right": "fixed top-20 right-4",
        "top-left": "fixed top-20 left-4",
    };

    const colorClasses = {
        blue: "bg-blue-600 hover:bg-blue-700 text-white",
        green: "bg-green-600 hover:bg-green-700 text-white",
        red: "bg-red-600 hover:bg-red-700 text-white",
        gray: "bg-gray-600 hover:bg-gray-700 text-white",
    };

    return (
        <button
            className={`${positionClasses[position]} ${colorClasses[color]} p-3 rounded-xl shadow-lg flex items-center transition-colors z-40`}
            onClick={onClick}
            aria-label={ariaLabel}
            title={title}
        >
            {children}
        </button>
    );
};
