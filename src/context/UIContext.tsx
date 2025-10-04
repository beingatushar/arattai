import { createContext } from "react";

export type UIContextType = {
    isSidebarOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
    isNightMode: boolean;
    toggleNightMode: () => void;
    isLayoutVisible: boolean;
    showLayout: () => void;
    hideLayout: () => void;
};

// Create the context with a default value
export const UIContext = createContext<UIContextType | undefined>(undefined);
