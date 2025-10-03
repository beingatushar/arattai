import { BiPlus, BiUser } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const MyStoryCard = () => (
    <button className="w-full text-left p-4 mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-all duration-200 hover:shadow-lg relative">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
                <div className="relative">
                    <div className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <BiUser
                            size={24}
                            className="text-gray-600 dark:text-gray-300"
                        />
                    </div>
                    <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800">
                        <BiPlus size={16} className="text-white" />
                    </div>
                </div>
                <div>
                    <p className="font-bold text-lg text-gray-800 dark:text-white">
                        My Stories
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Tap to add a new story
                    </p>
                </div>
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <FiSettings size={22} className="text-blue-500" />
            </div>
        </div>
    </button>
);

export default MyStoryCard;
