import { BiCalendarX } from "react-icons/bi";
import { MdOutlineSchedule, MdPersonAdd, MdVideoCall } from "react-icons/md";
import MeetingTabs from "../components/MeetingTabs";
import QuickActionButton from "../components/QuickActionButton";
import QuickStats from "../components/QuickStats";
import PageLayout from "../layouts/PageLayout";

const MeetingsPage = () => (
    <PageLayout title="📞 Meetings">
        <div className="grid grid-cols-3 gap-4 mb-8">
            <QuickActionButton
                icon={<MdVideoCall size={28} />}
                label="Meet Now"
                description="Start instant meeting"
                color="green"
            />
            <QuickActionButton
                icon={<MdPersonAdd size={28} />}
                label="Join"
                description="Plan for later"
                color="yellow"
            />
            <QuickActionButton
                icon={<MdOutlineSchedule size={28} />}
                label="Schedule"
                description="Plan for later"
                color="blue"
            />
        </div>

        <MeetingTabs />

        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <BiCalendarX size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold dark:text-white mb-2">
                No meetings scheduled
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                Schedule your first meeting to get started
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto transition-colors">
                <MdOutlineSchedule size={18} />
                Schedule Meeting
            </button>
        </div>

        <QuickStats />
    </PageLayout>
);

export default MeetingsPage;
