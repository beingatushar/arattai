import { useState } from "react";

const MeetingTabs = () => {
    const [activeTab, setActiveTab] = useState("Upcoming");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="relative mb-6 bg-white dark:bg-gray-800 rounded-3xl p-1 shadow-sm">
            {/* Gradient Background Slider */}
            <div
                className={`absolute top-1 bottom-1 rounded-3xl bg-gradient-to-r from-blue-100 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-900/15 transition-all duration-300 ease-in-out ${
                    activeTab === "Upcoming"
                        ? "left-1 right-1/2"
                        : "left-1/2 right-1"
                }`}
            />

            <div className="relative flex gap-2 justify-between">
                <button
                    onClick={() => handleTabClick("Upcoming")}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-3xl flex-1 font-medium transition-colors relative z-10 ${
                        activeTab === "Upcoming"
                            ? "text-blue-700 dark:text-blue-300"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-gray-700/50"
                    }`}
                >
                    <span>Upcoming</span>
                </button>
                <button
                    onClick={() => handleTabClick("Previous")}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-3xl flex-1 font-medium transition-colors relative z-10 ${
                        activeTab === "Previous"
                            ? "text-blue-700 dark:text-blue-300"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-gray-700/50"
                    }`}
                >
                    <span>Previous</span>
                </button>
            </div>
        </div>
    );
};

export default MeetingTabs;
