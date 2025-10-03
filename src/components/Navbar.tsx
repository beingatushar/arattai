// Navbar.tsx

// 1. Import useLocation
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../constants";

const Navbar = () => {
    // 2. Get the current location object
    const location = useLocation();

    return (
        <nav className="fixed left-0 bottom-0 flex items-center p-1 bg-gray-800 shadow-lg w-full">
            {navItems.map((item) => {
                const { id, label, icon: Icon } = item;

                // 3. Determine if the link is active based on the URL pathname
                // We check if the current URL path includes the item's id.
                const isActive = location.pathname.includes(id);

                return (
                    // 4. Remove the onClick state update, as it's no longer needed
                    <Link
                        key={id}
                        to={`/${id}`}
                        aria-label={label}
                        className={`
                            flex-1 flex flex-col items-center justify-center gap-y-1 py-2
                            rounded-lg transition-colors duration-300 ease-in-out
                            focus:outline-none focus:bg-gray-700
                            ${
                                isActive
                                    ? "text-blue-500" // Active state from URL
                                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                            }
                        `}
                    >
                        <Icon size={22} />
                        <span className="text-xs font-medium">{label}</span>
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
