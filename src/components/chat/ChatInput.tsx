import { FaPaperPlane } from "react-icons/fa";

export const ChatInput = () => {
    return (
        <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-900">
            <input
                type="text"
                placeholder="Type a message"
                className="w-full px-3 py-2 bg-white dark:bg-gray-800 border rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all 
                           dark:text-white dark:border-gray-600"
            />
            <button className="ml-4 p-3 bg-blue-500 text-white rounded-full">
                <FaPaperPlane />
            </button>
        </div>
    );
};
