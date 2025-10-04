import { BiGroup, BiTime } from "react-icons/bi";

const QuickStats = () => (
    <div className="mb-8 grid grid-cols-2 gap-4">
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
);

export default QuickStats;
