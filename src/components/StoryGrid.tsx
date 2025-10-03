import { RiEmotionSadLine } from "react-icons/ri";
import type { Story } from "../types";

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

type StoryGridProps = {
    stories: Story[];
    isLoading: boolean;
};

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
export default StoryGrid;
