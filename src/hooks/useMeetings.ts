import { useEffect, useState } from "react";
import { useDataStore } from "../stores/useDataStore";

export const useMeetings = () => {
    const { meetings, isLoading, fetchData } = useDataStore();
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (meetings.length === 0) {
            fetchData();
        }
    }, [meetings.length, fetchData]);

    const toggleSearch = () => {
        setSearchOpen((prev) => !prev);
        if (isSearchOpen) {
            setSearchQuery("");
        }
    };

    return {
        meetings,
        isLoading,
        isSearchOpen,
        toggleSearch,
        searchQuery,
        setSearchQuery,
    };
};
