import { MOCK_CALLS } from "../data/calls";
import { MOCK_CHATS, MOCK_MESSAGES } from "../data/chats";
import { MOCK_MEETINGS } from "../data/meetings";
import { MOCK_STORIES } from "../data/stories";

const simulateApiCall = (data: unknown) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
};

export const fetchStories = () => simulateApiCall(MOCK_STORIES);
export const fetchCalls = () => simulateApiCall(MOCK_CALLS);
export const fetchChats = () => simulateApiCall(MOCK_CHATS);
export const fetchMeetings = () => simulateApiCall(MOCK_MEETINGS);
export const fetchMessages = () => simulateApiCall(MOCK_MESSAGES);
