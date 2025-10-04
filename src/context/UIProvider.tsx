import { type ReactNode, useState } from "react";
import { UIContext } from "./UIContext";

// Create the provider component
export const UIProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isNightMode, setIsNightMode] = useState(false);
    const [isLayoutVisible, setIsLayoutVisible] = useState(true);

    const openSidebar = () => setSidebarOpen(true);
    const closeSidebar = () => setSidebarOpen(false);
    const toggleNightMode = () => setIsNightMode((prev) => !prev);
    const showLayout = () => setIsLayoutVisible(true);
    const hideLayout = () => setIsLayoutVisible(false);

    const value = {
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isNightMode,
        toggleNightMode,
        isLayoutVisible,
        showLayout,
        hideLayout,
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
