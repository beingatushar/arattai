import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChatHeader } from "../components/chat/ChatHeader";
import { ChatInput } from "../components/chat/ChatInput";
import { ChatMessage } from "../components/chat/ChatMessage";
import { useConversation } from "../hooks/useConversation";
import { useUI } from "../hooks/useUI";

const ConversationPage = () => {
    const { id } = useParams<{ id: string }>();
    const { conversation, isLoading } = useConversation(Number(id));
    const { showLayout, hideLayout } = useUI();

    useEffect(() => {
        hideLayout();
        return () => {
            showLayout();
        };
    }, [hideLayout, showLayout]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!conversation) {
        return <div>Conversation not found</div>;
    }

    return (
        <div className="flex flex-col h-dvh bg-white dark:bg-gray-900">
            <ChatHeader name={conversation.name} avatar={conversation.avatar} />
            <div className="flex-grow p-4 overflow-y-auto">
                {conversation.messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                ))}
            </div>
            <ChatInput />
        </div>
    );
};

export default ConversationPage;
