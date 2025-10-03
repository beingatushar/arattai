import { type ReactNode, useState } from "react";
import { UIContext } from "./UIContext";

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
