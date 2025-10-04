import { useEffect, useMemo, useState } from "react";
import { useDataStore } from "../stores/useDataStore";

export const useChats = () => {
    const { chats, isLoading, fetchData } = useDataStore();
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [filter, setFilter] = useState<"all" | "direct" | "groups">("all");

    useEffect(() => {
        if (chats.length === 0) {
            fetchData();
        }
    }, [chats.length, fetchData]);

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

    return {
        chats: filteredChats,
        isLoading,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        toggleSearch,
        filter,
        setFilter,
    };
};
