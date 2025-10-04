import { useMemo, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { HiChevronRight, HiHeart } from "react-icons/hi";
import { SearchFAB } from "../components/SearchFAB";
import { SearchInput } from "../components/SearchInput";
import PageLayout from "../layouts/PageLayout";

// Define a type for a single chat item
type Chat = {
    id: number;
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: string;
    unreadCount: number;
    online: boolean;
};

// Mock data for the chat list
const MOCK_CHATS: Chat[] = [
    {
        id: 1,
        name: "Alex G.",
        avatar: "https://picsum.photos/seed/user1/200/200",
        lastMessage: "Hey, are we still on for tomorrow?",
        timestamp: "10:42 AM",
        unreadCount: 2,
        online: true,
    },
    {
        id: 2,
        name: "Maria K.",
        avatar: "https://picsum.photos/seed/user2/200/200",
        lastMessage: "Just sent you the files.",
        timestamp: "9:30 AM",
        unreadCount: 0,
        online: false,
    },
    {
        id: 3,
        name: "Sam R.",
        avatar: "https://picsum.photos/seed/user3/200/200",
        lastMessage: "That's hilarious! 😂",
        timestamp: "Yesterday",
        unreadCount: 0,
        online: true,
    },
];

const ChatPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [chats] = useState<Chat[]>(MOCK_CHATS);
    const [filter, setFilter] = useState<"all" | "direct" | "groups">("all");

    const filters: { id: "all" | "direct" | "groups"; label: string }[] = [
        { id: "all", label: "All" },
        { id: "direct", label: "Direct" },
        { id: "groups", label: "Groups" },
    ];

    const filteredChats = useMemo(
        () =>
            chats.filter((chat) =>
                chat.name.toLowerCase().includes(searchQuery.toLowerCase())
            ),
        [searchQuery, chats]
    );

    const toggleSearch = () => {
        setSearchOpen((prev) => !prev);
        if (isSearchOpen) {
            setSearchQuery("");
        }
    };

    return (
        <PageLayout
            title="💬 Chat"
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
                    placeholder="Search for chats..."
                />
            )}

            {/* Filter Buttons */}
            <div className="flex flex-row gap-2 my-4">
                {filters.map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => setFilter(id)}
                        className={`rounded-lg text-center py-2 px-4 font-semibold text-sm transition-colors duration-200 ${
                            filter === id
                                ? "bg-blue-500 text-white" // Active style
                                : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700" // Inactive style
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                {filteredChats.map((chat) => (
                    <button
                        key={chat.id}
                        className="w-full text-left p-3 flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors duration-200"
                    >
                        <div className="relative">
                            <img
                                src={chat.avatar}
                                alt={chat.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            {chat.online && (
                                <span className="absolute bottom-0 right-0 block h-3 w-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                            )}
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <div className="flex items-center justify-between">
                                <p className="font-bold text-gray-800 dark:text-white truncate">
                                    {chat.name}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {chat.timestamp}
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                    {chat.lastMessage}
                                </p>
                                {chat.unreadCount > 0 && (
                                    <span className="bg-blue-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                                        {chat.unreadCount}
                                    </span>
                                )}
                            </div>
                        </div>
                    </button>
                ))}
                <button className="w-full text-left p-3 flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors duration-200">
                    <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                            <HiHeart
                                className="text-pink-500 dark:text-pink-400"
                                size={24}
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                            <p className="font-bold text-gray-800 dark:text-white truncate">
                                Invite friends
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate text-wrap">
                                Connect with your friends on Arattai
                            </p>
                        </div>
                    </div>
                    <HiChevronRight
                        className="text-gray-400 bg-gray-900 rounded-full dark:text-gray-500 flex-shrink-0 ml-2"
                        size={28}
                    />
                </button>
            </div>

            {/* New Chat FAB */}
            <button
                className="fixed bottom-20 right-4 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center transition-colors z-40 transform hover:scale-105"
                aria-label="New chat"
                title="New chat"
            >
                <BiPlus size={22} />
            </button>
        </PageLayout>
    );
};

export default ChatPage;
