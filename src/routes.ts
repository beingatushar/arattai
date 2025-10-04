import CallsPage from "./pages/CallsPage";
import ChatPage from "./pages/ChatPage";
import MeetingsPage from "./pages/MeetingsPage";
import StoriesPage from "./pages/StoriesPage";

export const routes = [
    { path: "/stories", component: StoriesPage, exact: true },
    { path: "/meetings", component: MeetingsPage, exact: true },
    { path: "/chat", component: ChatPage, exact: true },
    { path: "/calls", component: CallsPage, exact: true },
];
