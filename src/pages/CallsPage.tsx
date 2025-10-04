import { IoMdCall } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";
import { SearchFAB } from "../components/SearchFAB";
import { SearchInput } from "../components/SearchInput";
import { useCalls } from "../hooks/useCalls";
import PageLayout from "../layouts/PageLayout";
import type { Call } from "../types/calls";

// Helper function to format time
const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const CallsPage = () => {
    const {
        groupedCalls,
        filter,
        setFilter,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        toggleSearch,
    } = useCalls();

    const filters: { id: "all" | "missed"; label: string }[] = [
        { id: "all", label: "All" },
        { id: "missed", label: "Missed" },
    ];

    const getCallIcon = (type: Call["type"]) => {
        // Return an icon based on the call type
        if (type === "missed") {
            return (
                <span title="Missed call" className="text-red-500">
                    <IoMdCall size={16} />
                </span>
            );
        } else if (type === "incoming") {
            return (
                <span title="Incoming call" className="text-green-500">
                    <IoMdCall size={16} />
                </span>
            );
        } else if (type === "outgoing") {
            return (
                <span title="Outgoing call" className="text-blue-500">
                    <IoMdCall size={16} />
                </span>
            );
        }
        return null;
    };

    return (
        <PageLayout
            title="📞 Calls"
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
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for calls..."
                />
            )}

            <div className="flex flex-row gap-2 my-4">
                {filters.map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => setFilter(id)}
                        className={`rounded-full text-center py-2 px-4 font-semibold text-sm transition-colors duration-200 ${
                            filter === id
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-4">
                {Object.entries(groupedCalls).map(([date, callsInGroup]) => (
                    <div key={date}>
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 px-1">
                            {date}
                        </h2>
                        <div className="flex flex-col gap-2">
                            {(callsInGroup as Call[]).map((call) => (
                                <div
                                    key={call.id}
                                    className="w-full p-3 flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl"
                                >
                                    <img
                                        src={call.avatar}
                                        alt={call.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="flex-1 overflow-hidden">
                                        <p
                                            className={`font-bold ${
                                                call.type === "missed"
                                                    ? "text-red-500"
                                                    : "text-gray-800 dark:text-white"
                                            } truncate`}
                                        >
                                            {call.name}
                                        </p>
                                        <div className="flex items-center gap-2 mt-1">
                                            {getCallIcon(call.type)}
                                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                                {formatTime(call.timestamp)}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                        {call.type === "missed" ? (
                                            <IoMdCall
                                                className="text-red-500"
                                                size={20}
                                            />
                                        ) : (
                                            <IoMdCall
                                                className="text-green-500"
                                                size={20}
                                            />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="fixed bottom-20 right-4 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center transition-colors z-40 transform hover:scale-105"
                aria-label="New call"
                title="New call"
            >
                <MdAddIcCall size={22} />
            </button>
        </PageLayout>
    );
};

export default CallsPage;
