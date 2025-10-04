import { create } from "zustand";
import {
    fetchCalls,
    fetchChats,
    fetchMeetings,
    fetchMessages,
} from "../services/api";
import type { Call } from "../types/calls";
import type { Chat, Message } from "../types/chat";
import type { Meeting } from "../types/meetings";

type DataStore = {
    calls: Call[];
    chats: Chat[];
    meetings: Meeting[];
    isLoading: boolean;
    error: string | null;
    fetchData: () => Promise<void>;
    messages: Message[];
};

export const useDataStore = create<DataStore>((set) => ({
    calls: [],
    chats: [],
    meetings: [],
    messages: [],
    isLoading: false,
    error: null,
    fetchData: async () => {
        set({ isLoading: true, error: null });
        try {
            const [calls, chats, meetings, messages] = await Promise.all([
                fetchCalls(),
                fetchChats(),
                fetchMeetings(),
                fetchMessages(),
            ]);
            set({
                calls: calls as Call[],
                chats: chats as Chat[],
                meetings: meetings as Meeting[],
                messages: messages as Message[],
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
