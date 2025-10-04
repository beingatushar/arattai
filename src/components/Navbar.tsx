// Navbar.tsx

import { Link, useLocation } from "react-router-dom";
import { navItems } from "../constants";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="fixed left-0 bottom-0 flex items-center p-1 bg-gray-800 shadow-lg w-full">
            {navItems.map((item) => {
                const { id, label, icon: Icon } = item;

                // Improved active state logic
                const isActive =
                    location.pathname === `/${id}` ||
                    location.pathname.startsWith(`/${id}/`);

                return (
                    <Link
                        key={id}
                        to={`/${id}`}
                        aria-label={label}
                        className={`
                            flex-1 flex flex-col items-center justify-center gap-y-1 py-2
                            rounded-lg transition-colors duration-300 ease-in-out
                            ${
                                // ""
                                isActive
                                    ? "" // Active state
                                    : "text-gray-400 hover:text-gray-200" // Added hover for inactive states
                            }
                        `}
                    >
                        <Icon
                            size={28}
                            className={`
                                focus:outline-none focus:bg-gray-700 rounded-md p-1
                                ${
                                    isActive
                                        ? "text-blue-500" // Active state
                                        : "text-gray-400 hover:text-gray-200" // Added hover for inactive states
                                }
                            `}
                        />
                        <span className="text-xs font-medium">{label}</span>
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
