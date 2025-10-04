import { BiCamera, BiPencil } from "react-icons/bi";
import { ActionButton } from "./ActionButton";

interface ActionButtonsProps {
    onTextStoryClick?: () => void;
    onPhotoStoryClick?: () => void;
    className?: string;
}

export const ActionButtons = ({
    onTextStoryClick,
    onPhotoStoryClick,
    className = "",
}: ActionButtonsProps) => {
    return (
        <div
            className={`fixed bottom-20 right-4 flex flex-col gap-3 z-50 ${className}`}
        >
            <ActionButton
                onClick={onTextStoryClick}
                className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                ariaLabel="Create a text story"
                title="Create a text story"
            >
                <BiPencil
                    size={20}
                    className="text-blue-500 dark:text-blue-400"
                />
            </ActionButton>

            <ActionButton
                onClick={onPhotoStoryClick}
                className="bg-blue-500 text-white hover:bg-blue-600"
                ariaLabel="Add a photo to your story"
                title="Add a photo to your story"
            >
                <BiCamera size={22} />
            </ActionButton>
        </div>
    );
};

export default ActionButtons;
