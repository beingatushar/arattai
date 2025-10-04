export type Call = {
    id: number;
    name: string;
    avatar: string;
    type: "incoming" | "outgoing" | "missed";
    timestamp: Date;
};
