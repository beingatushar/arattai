import { BiCalendar, BiCalendarX, BiGroup, BiTime } from "react-icons/bi";
import { MdOutlineSchedule, MdPersonAdd, MdVideoCall } from "react-icons/md";

const MeetingsPage = () => (
    <div className="p-4 md:p-6 min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="mb-8">
            <h1 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                <BiCalendar className="text-blue-600" />
                Meetings
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
                Start, join, or schedule your meetings
            </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="flex flex-col items-center gap-3 text-center p-4 bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <button className="rounded-3xl bg-green-600 hover:bg-green-700 p-4 text-white transition-colors">
                    <MdVideoCall size={28} />
                </button>
                <span className="font-medium dark:text-white">Meet Now</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    Start instant meeting
                </p>
            </div>

            <div className="flex flex-col items-center gap-3 text-center p-4 bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <button className="rounded-3xl bg-yellow-600 hover:bg-yellow-700 p-4 text-white transition-colors">
                    <MdPersonAdd size={28} />
                </button>
                <span className="font-medium dark:text-white">Join</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    Join with code
                </p>
            </div>

            <div className="flex flex-col items-center gap-3 text-center p-4 bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <button className="rounded-3xl bg-blue-600 hover:bg-blue-700 p-4 text-white transition-colors">
                    <MdOutlineSchedule size={28} />
                </button>
                <span className="font-medium dark:text-white">Schedule</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    Plan for later
                </p>
            </div>
        </div>

        {/* Meeting Tabs */}
        <div className="flex gap-2 mb-6 bg-white dark:bg-gray-800 rounded-3xl p-1 shadow-sm justify-between ">
            {/* By adding 'justify-center', the flex items (icon and span) are centered horizontally */}
            <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-3xl flex-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-medium">
                <span>Upcoming</span>
            </button>

            {/* Added 'justify-center' here as well for consistency */}
            <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-3xl flex-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <span>Previous</span>
            </button>
        </div>

        {/* Empty State */}
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

        {/* Quick Stats (Optional) */}
        <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <BiTime className="text-green-600" size={20} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Today
                        </p>
                        <p className="text-lg font-semibold dark:text-white">
                            0 meetings
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <BiGroup className="text-blue-600" size={20} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            This Week
                        </p>
                        <p className="text-lg font-semibold dark:text-white">
                            0 meetings
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default MeetingsPage;
