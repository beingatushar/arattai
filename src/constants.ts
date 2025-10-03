import { FaUserFriends, FaCog } from "react-icons/fa";
import {
    FaAt,
    FaBookmark,
    FaLink,
    FaMessage,
    FaPhone,
    FaStar,
} from "react-icons/fa6";
import { LiaPaletteSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";

export const navItems = [
    { id: "stories", label: "Stories", icon: LiaPaletteSolid },
    { id: "meetings", label: "Meetings", icon: SlCalender },
    { id: "chat", label: "Chat", icon: FaMessage },
    { id: "calls", label: "Calls", icon: FaPhone },
];
export const navLinks = [
    { name: "Mentions", icon: FaAt },
    { name: "Starred messages", icon: FaStar },
    { name: "Pocket", icon: FaBookmark },
    { name: "Contacts", icon: FaUserFriends },
    { name: "Link a device", icon: FaLink },
    { name: "Settings", icon: FaCog },
];
