import type { Chat, Message } from "../types/chat";

export const MOCK_MESSAGES: Message[] = [
    {
        id: 1,
        chatId: 1,
        text: "Hey, are we still on for tomorrow?",
        timestamp: "10:42 AM",
        sender: "other",
        type: "text",
    },
    {
        id: 2,
        chatId: 1,
        text: "Yes, of course!",
        timestamp: "10:43 AM",
        sender: "me",
        type: "text",
    },
    {
        id: 3,
        chatId: 2,
        text: "Just sent you the files.",
        timestamp: "9:30 AM",
        sender: "other",
        type: "text",
    },
];
export const MOCK_CHATS: Chat[] = [
    {
        id: 1,
        name: "Alex G.",
        avatar: "https://picsum.photos/seed/user1/200/200",
        lastMessage: "Hey, are we still on for tomorrow?",
        timestamp: "10:42 AM",
        unreadCount: 2,
        online: true,
        messages: MOCK_MESSAGES.filter((m) => m.chatId === 1),
    },
    {
        id: 2,
        name: "Maria K.",
        avatar: "https://picsum.photos/seed/user2/200/200",
        lastMessage: "Just sent you the files.",
        timestamp: "9:30 AM",
        unreadCount: 0,
        online: false,
        messages: MOCK_MESSAGES.filter((m) => m.chatId === 1),
    },
    {
        id: 3,
        name: "Sam R.",
        avatar: "https://picsum.photos/seed/user3/200/200",
        lastMessage: "That's hilarious! 😂",
        timestamp: "Yesterday",
        unreadCount: 0,
        online: true,
        messages: MOCK_MESSAGES.filter((m) => m.chatId === 2),
    },
];
