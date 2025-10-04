import type { Call } from "../types/calls";

export const MOCK_CALLS: Call[] = [
    {
        id: 1,
        name: "Maria K.",
        avatar: "https://picsum.photos/seed/user2/200/200",
        type: "missed",
        timestamp: new Date("2025-10-04T15:30:00"), // Yesterday
    },
    {
        id: 2,
        name: "Alex G.",
        avatar: "https://picsum.photos/seed/user1/200/200",
        type: "outgoing",
        timestamp: new Date("2025-10-05T11:15:00"), // Today
    },
    {
        id: 3,
        name: "Sam R.",
        avatar: "https://picsum.photos/seed/user3/200/200",
        type: "incoming",
        timestamp: new Date("2025-10-03T20:00:00"), // October 3, 2025
    },
    {
        id: 4,
        name: "John D.",
        avatar: "https://picsum.photos/seed/user4/200/200",
        type: "incoming",
        timestamp: new Date("2025-10-04T09:20:00"), // Yesterday
    },
    {
        id: 5,
        name: "Maria K.",
        avatar: "https://picsum.photos/seed/user2/200/200",
        type: "incoming",
        timestamp: new Date("2025-10-05T09:05:00"), // Today
    },
];
