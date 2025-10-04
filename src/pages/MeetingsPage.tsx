import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { MdOutlineSchedule, MdPersonAdd, MdVideoCall } from "react-icons/md";
import AllMeetings from "../components/AllMeetings";
import { CalendarFAB } from "../components/CalendarFAB";
import MeetingTabs from "../components/MeetingTabs";
import QuickActionButton from "../components/QuickActionButton";
import PageLayout from "../layouts/PageLayout";

const MeetingsPage = () => {
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleSearch = () => {
        setSearchOpen((prev) => !prev);
        if (isSearchOpen) {
            setSearchQuery("");
        }
    };

    const handleCalendarClick = () => {
        console.log("Calendar button clicked");
        // Add your calendar logic here
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

            <MeetingTabs />
            <AllMeetings />

            {/* Clean usage with CalendarFAB */}
            <CalendarFAB onClick={handleCalendarClick} />
        </PageLayout>
    );
};

export default MeetingsPage;
