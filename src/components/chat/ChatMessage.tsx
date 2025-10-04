import type { Message } from "../../types/chat";

interface ChatMessageProps {
    message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
    const isMyMessage = message.sender === "me";

    return (
        <div
            className={`flex ${
                isMyMessage ? "justify-end" : "justify-start"
            } mb-4`}
        >
            <div
                className={`rounded-lg p-3 ${
                    isMyMessage
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700"
                }`}
            >
                <p>{message.text}</p>
            </div>
        </div>
    );
};
