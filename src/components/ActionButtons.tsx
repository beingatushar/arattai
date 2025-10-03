import { BiCamera, BiPencil } from "react-icons/bi";

const ActionButtons = () => {
    return (
        <div className="fixed bottom-20 right-4 flex flex-col gap-3 z-50">
            <button
                className="bg-white dark:bg-gray-700 p-4 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-105"
                aria-label="Create a text story"
                title="Create a text story"
            >
                <BiPencil
                    size={20}
                    className="text-blue-500 dark:text-blue-400"
                />
            </button>
            <button
                className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
                aria-label="Add a photo to your story"
                title="Add a photo to your story"
            >
                <BiCamera size={22} />
            </button>
        </div>
    );
};

export default ActionButtons;
