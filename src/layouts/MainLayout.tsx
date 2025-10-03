import { useDrag } from "@use-gesture/react";
import { type ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import { useUI } from "../context/UIContext";

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
    const { isSidebarOpen, openSidebar, closeSidebar } = useUI();

    // The gesture to OPEN the sidebar now lives in the layout
    const bindOpenGesture = useDrag(({ last, movement: [mx] }) => {
        if (last && mx > 50) {
            openSidebar();
        }
    });

    return (
        <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 overflow-x-hidden">
            <Sidebar />

            {/* Gesture Handle to OPEN sidebar */}
            {!isSidebarOpen && (
                <div
                    {...bindOpenGesture()}
                    className="fixed top-0 left-0 h-full w-6 z-40 touch-none"
                    aria-hidden="true"
                />
            )}

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 bg-black/50 z-20"
                    aria-hidden="true"
                ></div>
            )}

            {/* Main content is passed in as children */}
            <main className="flex flex-col flex-1">{children}</main>
        </div>
    );
};

export default MainLayout;
