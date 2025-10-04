import { useState } from "react";

type Tab = {
    id: string;
    label: string;
};

type MeetingTabsProps = {
    tabs: Tab[];
};

const MeetingTabs = ({ tabs }: MeetingTabsProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="relative mb-6 bg-white dark:bg-gray-800 rounded-3xl p-1 shadow-sm">
            {/* Gradient Background Slider */}
            <div
                className={`absolute top-1 bottom-1 rounded-3xl bg-gradient-to-r from-blue-100 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-900/15 transition-all duration-300 ease-in-out ${
                    activeTab === tabs[0].id
                        ? "left-1 right-1/2"
                        : "left-1/2 right-1"
                }`}
            />

            <div className="relative flex gap-2 justify-between">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-3xl flex-1 font-medium transition-colors relative z-10 ${
                            activeTab === tab.id
                                ? "text-blue-700 dark:text-blue-300"
                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-gray-700/50"
                        }`}
                    >
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MeetingTabs;
