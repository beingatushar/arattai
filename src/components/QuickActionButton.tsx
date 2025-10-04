import { type ReactNode } from "react";

type QuickActionButtonProps = {
    icon: ReactNode;
    label: string;
    description: string;
    color: "green" | "yellow" | "blue";
};

const QuickActionButton = ({
    icon,
    label,
    description,
    color,
}: QuickActionButtonProps) => {
    // Map color props to actual Tailwind classes
    const colorClasses = {
        green: "bg-green-600 hover:bg-green-700",
        yellow: "bg-yellow-600 hover:bg-yellow-700",
        blue: "bg-blue-600 hover:bg-blue-700",
    };

    return (
        <div className="flex flex-col items-center text-center p-3 gap-2 bg-white dark:bg-gray-800 rounded-xl shadow-3xl hover:shadow-md transition-shadow">
            <button
                className={`rounded-2xl ${colorClasses[color]} p-3 text-white transition-colors`}
            >
                {icon}
            </button>
            <span className="font-medium dark:text-white">{label}</span>
            <p className="text-xs text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </div>
    );
};

export default QuickActionButton;
