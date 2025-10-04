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
    <div className="flex flex-col items-center  text-center p-2 bg-white dark:bg-gray-800 rounded-xl shadow-3xl hover:shadow-md transition-shadow">
        <button
            className={`rounded-xl bg-${color}-600 hover:bg-${color}-700 p-2 text-white transition-colors`}
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
