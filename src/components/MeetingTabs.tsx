import { useState } from "react";

const MeetingTabs = () => {
    const [activeTab, setActiveTab] = useState("Upcoming");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex gap-2 mb-6 bg-white dark:bg-gray-800 rounded-3xl p-1 shadow-sm justify-between ">
            <button
                onClick={() => handleTabClick("Upcoming")}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-3xl flex-1 font-medium transition-colors ${
                    activeTab === "Upcoming"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
                <span>Upcoming</span>
            </button>
            <button
                onClick={() => handleTabClick("Previous")}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-3xl flex-1 font-medium transition-colors ${
                    activeTab === "Previous"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
                <span>Previous</span>
            </button>
        </div>
    );
};

export default MeetingTabs;
