import type { Chat } from "../types/chat";

export const MOCK_CHATS: Chat[] = [
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
