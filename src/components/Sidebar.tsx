import { useDrag } from "@use-gesture/react";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { useUI } from "../hooks/useUI";
import { NightModeToggle } from "./common/NightModeToggle";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useUI();

    const bindCloseGesture = useDrag(({ last, movement: [mx] }) => {
        if (last && mx < -50) {
            closeSidebar();
        }
    });

    return (
        <aside
            {...bindCloseGesture()}
            className={`
                fixed top-0 left-0 h-dvh w-72 bg-gray-800 text-gray-200 flex flex-col shadow-2xl z-30
                transform transition-transform duration-300 ease-in-out touch-none
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
        >
            <button
                onClick={closeSidebar}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Close sidebar"
            >
                <FaTimes size={20} />
            </button>

            <div className="flex flex-col items-center justify-center p-6">
                <FaUserCircle size={80} className="text-gray-500 mb-3" />
                <h2 className="font-bold text-xl text-white">Jessica Smith</h2>
            </div>

            <nav className="flex-grow p-4 overflow-y-auto">
                <ul className="space-y-2">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <li key={link.name}>
                                <Link
                                    to={`/${link.name
                                        .toLowerCase()
                                        .replace(/ /g, "-")}`}
                                    className="flex items-center p-3 text-base rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200"
                                >
                                    <Icon className="w-6 h-6 mr-4" />
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="p-6 border-t border-gray-700">
                <NightModeToggle />
            </div>
        </aside>
    );
};

export default Sidebar;
