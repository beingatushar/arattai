import { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
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

    return (
        <PageLayout
            title="📖 Stories"
            actionButton={
                <button
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Open search"
                >
                    <FaSearch size={20} className="dark:text-gray-300" />
                </button>
            }
        >
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
