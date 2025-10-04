import { FaSearch, FaTimes } from "react-icons/fa";
import { ActionButton } from "./ActionButton";

interface SearchFABProps {
    isSearchOpen: boolean;
    onToggle: () => void;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export const SearchFAB = ({
    isSearchOpen,
    onToggle,
    position = "top-right",
}: SearchFABProps) => {
    const positionClasses = {
        "top-right": "fixed top-4 right-4",
        "top-left": "fixed top-4 left-4",
        "bottom-right": "fixed bottom-20 right-4",
        "bottom-left": "fixed bottom-20 left-4",
    };

    return (
        <ActionButton
            onClick={onToggle}
            className={`${positionClasses[position]} bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700`}
            ariaLabel={isSearchOpen ? "Close search" : "Open search"}
            title={isSearchOpen ? "Close search" : "Open search"}
        >
            {isSearchOpen ? (
                <FaTimes size={20} className="dark:text-gray-300" />
            ) : (
                <FaSearch size={20} className="dark:text-gray-300" />
            )}
        </ActionButton>
    );
};
