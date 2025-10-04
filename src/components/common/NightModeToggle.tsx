import { FaMoon } from "react-icons/fa";
import { useUI } from "../../hooks/useUI";

export const NightModeToggle = () => {
    const { isNightMode, toggleNightMode } = useUI();

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <FaMoon className="w-6 h-6 mr-4" />
                <span className="text-base">Night mode</span>
            </div>
            <button
                onClick={toggleNightMode}
                className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    isNightMode ? "bg-blue-500" : "bg-gray-600"
                }`}
            >
                <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                        isNightMode ? "translate-x-7" : ""
                    }`}
                ></div>
            </button>
        </div>
    );
};
