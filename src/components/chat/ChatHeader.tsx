import { FaArrowLeft, FaEllipsisV, FaPhone, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ChatHeaderProps {
    name: string;
    avatar: string;
}

export const ChatHeader = ({ name, avatar }: ChatHeaderProps) => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center gap-4">
                <Link to="/chat">
                    <FaArrowLeft />
                </Link>
                <img
                    src={avatar}
                    alt={name}
                    className="w-10 h-10 rounded-full"
                />
                <h1 className="text-xl font-bold">{name}</h1>
            </div>
            <div className="flex items-center gap-4">
                <FaVideo />
                <FaPhone />
                <FaEllipsisV />
            </div>
        </header>
    );
};
