import { useEffect, useMemo, useState } from "react";
import { useDataStore } from "../stores/useDataStore";
import type { Call } from "../types/calls";

export const useCalls = () => {
    const { calls, isLoading, fetchData } = useDataStore();
    const [filter, setFilter] = useState<"all" | "missed">("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        if (calls.length === 0) {
            fetchData();
        }
    }, [calls.length, fetchData]);

    const toggleSearch = () => {
        setSearchOpen((prev) => !prev);
        if (isSearchOpen) {
            setSearchQuery("");
        }
    };

    const filteredCalls = useMemo(() => {
        return calls
            .filter((call) => {
                if (filter === "missed") return call.type === "missed";
                return true;
            })
            .filter((call) =>
                call.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
    }, [filter, searchQuery, calls]);

    const groupedCalls = useMemo(() => {
        const groups: { [key: string]: Call[] } = {};
        const today = new Date("2025-10-05T12:03:00");
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        filteredCalls.forEach((call) => {
            const callDate = call.timestamp;
            let groupKey: string;

            if (callDate.toDateString() === today.toDateString()) {
                groupKey = "Today";
            } else if (callDate.toDateString() === yesterday.toDateString()) {
                groupKey = "Yesterday";
            } else {
                groupKey = callDate.toLocaleDateString([], {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                });
            }

            if (!groups[groupKey]) {
                groups[groupKey] = [];
            }
            groups[groupKey].push(call);
        });
        return groups;
    }, [filteredCalls]);

    return {
        groupedCalls,
        isLoading,
        filter,
        setFilter,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        toggleSearch,
    };
};
