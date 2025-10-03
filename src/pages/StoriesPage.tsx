import { useEffect, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const StoriesPage = () => {
    // State to manage the visibility of the search panel
    const [isSearchOpen, setSearchOpen] = useState(false);
    // Ref to access the input element directly
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Effect to focus the input when the search panel opens
    useEffect(() => {
        if (isSearchOpen) {
            // A small timeout ensures the input is fully visible and rendered before focusing
            setTimeout(() => {
                searchInputRef.current?.focus();
            }, 100);
        }
    }, [isSearchOpen]);

    return (
        <div className="p-6">
            <div className="flex items-center justify-between h-10">
                {/* When search is NOT open, show the title and search icon */}
                {!isSearchOpen && (
                    <>
                        <h1 className="text-2xl font-bold animate-fade-in">
                            📖 Stories
                        </h1>
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                            aria-label="Open search"
                        >
                            <FaSearch size={20} />
                        </button>
                    </>
                )}

                {/* When search IS open, show the search input and close button */}
                {isSearchOpen && (
                    <div className="flex items-center w-full gap-x-2 animate-fade-in">
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search stories..."
                            className="w-full px-3 py-1.5 bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                        <button
                            onClick={() => setSearchOpen(false)}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                            aria-label="Close search"
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StoriesPage;
