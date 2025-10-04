import { MdOutlineSchedule, MdPersonAdd, MdVideoCall } from "react-icons/md";
import AllMeetings from "../components/AllMeetings";
import { CalendarFAB } from "../components/CalendarFAB";
import MeetingTabs from "../components/MeetingTabs";
import QuickActionButton from "../components/QuickActionButton";
import { SearchFAB } from "../components/SearchFAB";
import { SearchInput } from "../components/SearchInput";
import { useMeetings } from "../hooks/useMeetings";
import PageLayout from "../layouts/PageLayout";

const MeetingsPage = () => {
    const {
        meetings,
        isSearchOpen,
        toggleSearch,
        searchQuery,
        setSearchQuery,
    } = useMeetings();

    const handleCalendarClick = () => {
        console.log("Calendar button clicked");
    };

    const meetingTabs = [
        { id: "upcoming", label: "Upcoming" },
        { id: "previous", label: "Previous" },
    ];

    return (
        <PageLayout
            title="📞 Meetings"
            actionButton={
                <SearchFAB
                    isSearchOpen={isSearchOpen}
                    onToggle={toggleSearch}
                />
            }
        >
            {isSearchOpen && (
                <SearchInput
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for meetings..."
                />
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

            <MeetingTabs tabs={meetingTabs} />
            <AllMeetings meetings={meetings} />

            <CalendarFAB onClick={handleCalendarClick} />
        </PageLayout>
    );
};

export default MeetingsPage;
