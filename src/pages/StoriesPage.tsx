import { useEffect, useMemo, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import ActionButtons from "../components/ActionButtons";
import MyStoryCard from "../components/MyStoryCard";
import StoryGrid from "../components/StoryGrid";
import { MOCK_STORIES } from "../data/stories";
import PageLayout from "../layouts/PageLayout";
import type { Story } from "../types";

const StoriesPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [stories, setStories] = useState<Story[]>([]);
    const [isSearchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setStories(MOCK_STORIES);
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const filteredStories = useMemo(
        () =>
            stories.filter((story) =>
                story.user.toLowerCase().includes(searchQuery.toLowerCase())
            ),
        [searchQuery, stories]
    );

    const toggleSearch = () => {
        setSearchOpen((prev) => !prev);
        if (isSearchOpen) {
            setSearchQuery("");
        }
    };

    return (
        <PageLayout
            title="📖 Stories"
            actionButton={
                <button
                    onClick={toggleSearch}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label={isSearchOpen ? "Close search" : "Open search"}
                >
                    {isSearchOpen ? (
                        <FaTimes size={20} className="dark:text-gray-300" />
                    ) : (
                        <FaSearch size={20} className="dark:text-gray-300" />
                    )}
                </button>
            }
        >
            {isSearchOpen && (
                <div className="w-full mb-4">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search recent stories..."
                        className="w-full px-3 py-2 bg-white dark:bg-gray-800 border rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all 
                                   dark:text-white dark:border-gray-600"
                    />
                </div>
            )}
            <MyStoryCard />
            <section className="mt-8">
                <h2 className="text-xl font-semibold mb-4 dark:text-white">
                    Recent Stories
                </h2>
                <StoryGrid stories={filteredStories} isLoading={isLoading} />
            </section>
            <ActionButtons />
        </PageLayout>
    );
};

export default StoriesPage;
