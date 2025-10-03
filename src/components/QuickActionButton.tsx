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
}: QuickActionButtonProps) => (
    <div className="flex flex-col items-center gap-3 text-center p-4 bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
        <button
            className={`rounded-3xl bg-${color}-600 hover:bg-${color}-700 p-4 text-white transition-colors`}
        >
            {icon}
        </button>
        <span className="font-medium dark:text-white">{label}</span>
        <p className="text-xs text-gray-500 dark:text-gray-400">
            {description}
        </p>
    </div>
);

export default QuickActionButton;
