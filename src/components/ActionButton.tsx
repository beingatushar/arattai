import { type ReactNode } from "react";

interface ActionButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    ariaLabel: string;
    title: string;
}

export const ActionButton = ({
    children,
    onClick,
    className = "",
    ariaLabel,
    title,
}: ActionButtonProps) => {
    return (
        <button
            className={`p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 ${className}`}
            onClick={onClick}
            aria-label={ariaLabel}
            title={title}
        >
            {children}
        </button>
    );
};
