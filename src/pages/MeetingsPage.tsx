import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { MdOutlineSchedule, MdPersonAdd, MdVideoCall } from "react-icons/md";
import MeetingTabs from "../components/MeetingTabs";
import QuickActionButton from "../components/QuickActionButton";
import PageLayout from "../layouts/PageLayout";
import AllMeetings from "../components/AllMeetings";

const MeetingsPage = () => {
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleSearch = () => {
        setSearchOpen((prev) => !prev);
        if (isSearchOpen) {
            setSearchQuery("");
        }
    };

    return (
        <PageLayout
            title="📞 Meetings"
            actionButton={
                <button
                    onClick={toggleSearch}
                    className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label={isSearchOpen ? "Close search" : "Open search"}
                >
                    {isSearchOpen ? (
                        <FaTimes size={20} className="dark:text-gray-300" />
                    ) : (
                        <FaSearch size={20} className="dark:text-gray-300" />
                    )}
                </button>
            }
        >
            {isSearchOpen && (
                <div className="w-full mb-4">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for meetings..."
                        className="w-full px-3 py-2 bg-white dark:bg-gray-800 border rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all 
                                   dark:text-white dark:border-gray-600"
                    />
                </div>
            )}
            <div className="grid grid-cols-3 gap-4 mb-8">
                <QuickActionButton
                    icon={<MdVideoCall size={24} />}
                    label="Meet Now"
                    description=""
                    color="green"
                />
                <QuickActionButton
                    icon={<MdPersonAdd size={24} />}
                    label="Join"
                    description=""
                    color="yellow"
                />
                <QuickActionButton
                    icon={<MdOutlineSchedule size={24} />}
                    label="Schedule"
                    description=""
                    color="blue"
                />
            </div>
            {/* <QuickStats /> */}
            <MeetingTabs />
            <AllMeetings />

            {/* <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BiCalendarX size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold dark:text-white mb-2">
                    No meetings scheduled
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Your scheduled meetings will appear here.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-1 mx-auto transition-colors">
                    <MdOutlineSchedule size={18} />
                    Schedule Meeting
                </button>
            </div> */}
        </PageLayout>
    );
};

export default MeetingsPage;
