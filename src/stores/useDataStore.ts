import { create } from "zustand";
import { fetchCalls, fetchChats, fetchMeetings } from "../services/api";
import type { Call } from "../types/calls";
import type { Chat } from "../types/chat";
import type { Meeting } from "../types/meetings";

type DataStore = {
    calls: Call[];
    chats: Chat[];
    meetings: Meeting[];
    isLoading: boolean;
    error: string | null;
    fetchData: () => Promise<void>;
};

export const useDataStore = create<DataStore>((set) => ({
    calls: [],
    chats: [],
    meetings: [],
    isLoading: false,
    error: null,
    fetchData: async () => {
        set({ isLoading: true, error: null });
        try {
            const [calls, chats, meetings] = await Promise.all([
                fetchCalls(),
                fetchChats(),
                fetchMeetings(),
            ]);
            set({
                calls: calls as Call[],
                chats: chats as Chat[],
                meetings: meetings as Meeting[],
                isLoading: false,
            });
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : String(error),
                isLoading: false,
            });
        }
    },
}));
