import { Navigate, Route, Routes } from "react-router-dom";
import CallsPage from "../pages/CallsPage";
import ChatPage from "../pages/ChatPage";
import MeetingsPage from "../pages/MeetingsPage";
import StoriesPage from "../pages/StoriesPage";

const MainScreen = () => {
    return (
        // THE FIX IS HERE: Add `overflow-y-auto` to the <main> element
        <main className="flex-grow bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-y-auto">
            <Routes>
                <Route path="/" element={<Navigate to="/stories" replace />} />
                <Route path="/stories" element={<StoriesPage />} />
                <Route path="/meetings" element={<MeetingsPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/calls" element={<CallsPage />} />
                <Route
                    path="*"
                    element={
                        <div className="p-6">
                            <h1 className="text-2xl font-bold">
                                404: Page Not Found
                            </h1>
                        </div>
                    }
                />
            </Routes>
        </main>
    );
};

export default MainScreen;
