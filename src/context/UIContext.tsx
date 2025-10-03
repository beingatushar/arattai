import { createContext, type ReactNode, useContext, useState } from "react";

type UIContextType = {
    isSidebarOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
    isNightMode: boolean;
    toggleNightMode: () => void;
};

// Create the context with a default value
const UIContext = createContext<UIContextType | undefined>(undefined);

// Create the provider component
export const UIProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isNightMode, setIsNightMode] = useState(false);

    const openSidebar = () => setSidebarOpen(true);
    const closeSidebar = () => setSidebarOpen(false);
    const toggleNightMode = () => setIsNightMode((prev) => !prev);

    const value = {
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isNightMode,
        toggleNightMode,
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

// Create a custom hook for easy context consumption
export const useUI = () => {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error("useUI must be used within a UIProvider");
    }
    return context;
};
