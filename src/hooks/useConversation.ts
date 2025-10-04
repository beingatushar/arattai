import { useEffect, useState } from "react";
import { useDataStore } from "../stores/useDataStore";
import type { Chat } from "../types/chat";

export const useConversation = (id: number) => {
    const { chats, messages, isLoading, fetchData } = useDataStore();
    const [conversation, setConversation] = useState<Chat | null>(null);

    useEffect(() => {
        if (chats.length === 0) {
            fetchData();
        }
    }, [chats.length, fetchData]);

    useEffect(() => {
        const chat = chats.find((c) => c.id === id);
        if (chat) {
            const chatMessages = messages.filter((m) => m.chatId === id);
            setConversation({ ...chat, messages: chatMessages });
        }
    }, [id, chats, messages]);

    return {
        conversation,
        isLoading,
    };
};
