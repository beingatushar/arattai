import { useEffect, useMemo, useState } from "react";
import ActionButtons from "../components/ActionButtons";
import MyStoryCard from "../components/MyStoryCard";
import { SearchFAB } from "../components/SearchFAB";
import { SearchInput } from "../components/SearchInput";
import StoryGrid from "../components/StoryGrid";
import PageLayout from "../layouts/PageLayout";
import { fetchStories } from "../services/api";
import type { Story } from "../types";

const StoriesPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [stories, setStories] = useState<Story[]>([]);
    const [isSearchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        const getStories = async () => {
            const fetchedStories = (await fetchStories()) as Story[];
            setStories(fetchedStories);
            setIsLoading(false);
        };

        getStories();
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
                <SearchFAB
                    isSearchOpen={isSearchOpen}
                    onToggle={toggleSearch}
                />
            }
        >
            {isSearchOpen && (
                <SearchInput
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Search recent stories..."
                />
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
