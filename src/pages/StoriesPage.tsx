import { useEffect, useMemo, useRef, useState } from "react";
import { BiCamera, BiPencil, BiPlus, BiUser } from "react-icons/bi";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { RiEmotionSadLine } from "react-icons/ri";

// --- Mock Data ---
const MOCK_STORIES = [
    {
        id: 1,
        user: "Alex G.",
        imageUrl: "https://picsum.photos/seed/picsum/400/600",
    },
    {
        id: 2,
        user: "Maria K.",
        imageUrl: "https://picsum.photos/seed/travel/400/600",
    },
    {
        id: 3,
        user: "Sam R.",
        imageUrl: "https://picsum.photos/seed/food/400/600",
    },
    {
        id: 4,
        user: "John D.",
        imageUrl: "https://picsum.photos/seed/nature/400/600",
    },
    {
        id: 5,
        user: "Lisa B.",
        imageUrl: "https://picsum.photos/seed/people/400/600",
    },
    {
        id: 6,
        user: "Ken T.",
        imageUrl: "https://picsum.photos/seed/tech/400/600",
    },
    {
        id: 7,
        user: "Chris P.",
        imageUrl: "https://picsum.photos/seed/animals/400/600",
    },
    {
        id: 8,
        user: "Zoe W.",
        imageUrl: "https://picsum.photos/seed/city/400/600",
    },
    {
        id: 9,
        user: "Mike S.",
        imageUrl: "https://picsum.photos/seed/cars/400/600",
    },
];

// --- Sub-components ---

interface StoriesHeaderProps {
    isSearchOpen: boolean;
    setSearchOpen: (open: boolean) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const StoriesHeader = ({
    isSearchOpen,
    setSearchOpen,
    searchQuery,
    setSearchQuery,
}: StoriesHeaderProps) => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isSearchOpen) {
            setTimeout(() => searchInputRef.current?.focus(), 100);
        } else {
            setSearchQuery("");
        }
    }, [isSearchOpen, setSearchQuery]);

    return (
        <header className="sticky top-0 bg-gray-50 dark:bg-gray-900 z-20 flex items-center justify-between h-12 mb-6 px-1">
            {!isSearchOpen ? (
                <>
                    <h1 className="text-2xl font-bold animate-fade-in dark:text-white">
                        📖 Stories
                    </h1>
                    <button
                        onClick={() => setSearchOpen(true)}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                        aria-label="Open search"
                    >
                        <FaSearch size={20} className="dark:text-gray-300" />
                    </button>
                </>
            ) : (
                <div className="flex items-center w-full gap-x-2 animate-fade-in">
                    <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search recent stories..."
                        className="w-full px-3 py-2 bg-white dark:bg-gray-800 border rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all 
                                   dark:text-white dark:border-gray-600"
                    />
                    <button
                        onClick={() => setSearchOpen(false)}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                        aria-label="Close search"
                    >
                        <FaTimes size={20} className="dark:text-white" />
                    </button>
                </div>
            )}
        </header>
    );
};

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
const StoryCard = ({ story }: { story: Story }) => (
    <button className="relative aspect-[3/4] group cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-xl overflow-hidden">
        <img
            src={story.imageUrl}
            alt={`Story by ${story.user}`}
            className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <p className="absolute bottom-2 left-2 text-white text-sm font-semibold drop-shadow">
            {story.user}
        </p>
    </button>
);
const StorySkeleton = () => (
    <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
);

type Story = { id: number; user: string; imageUrl: string };

interface StoryGridProps {
    stories: Story[];
    isLoading: boolean;
}
const StoryGrid = ({ stories, isLoading }: StoryGridProps) => {
    if (isLoading) {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
                {Array.from({ length: 10 }).map((_, index) => (
                    <StorySkeleton key={index} />
                ))}
            </div>
        );
    }

    if (stories.length === 0) {
        return (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <RiEmotionSadLine size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold">No Stories Found</h3>
                <p>Try adjusting your search query.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
            {stories.map((story) => (
                <StoryCard key={story.id} story={story} />
            ))}
        </div>
    );
};
// --- Main Page Component ---

const StoriesPage = () => {
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    type Story = { id: number; user: string; imageUrl: string };
    const [stories, setStories] = useState<Story[]>([]);

    // Simulate fetching stories
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
        // --- Page Layout ---
        <main className="p-4 md:p-6 h-full bg-gray-50 dark:bg-gray-900 min-h-screen relative">
            <StoriesHeader
                isSearchOpen={isSearchOpen}
                setSearchOpen={setSearchOpen}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <MyStoryCard />

            <section className="mt-8">
                <h2 className="text-xl font-semibold mb-4 dark:text-white">
                    Recent Stories
                </h2>

                <StoryGrid stories={filteredStories} isLoading={isLoading} />
            </section>

            {/* 👇 place outside section so it's page-level */}
            <ActionButtons />
        </main>
    );
};
// --- ActionButtons ---
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

export default StoriesPage;
