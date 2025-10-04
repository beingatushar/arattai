export type Chat = {
    id: number;
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: string;
    unreadCount: number;
    online: boolean;
    messages: Message[];
};
export type Message = {
    id: number;
    chatId: number;
    text: string;
    timestamp: string;
    sender: "me" | "other";
    type: "text" | "image" | "video" | "audio" | "sticker" | "emoji";
    url?: string;
};
