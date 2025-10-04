import { MdCalendarMonth } from "react-icons/md";
import { FloatingActionButton } from "./FloatingActionButton";

interface CalendarFABProps {
    onClick?: () => void;
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}

export const CalendarFAB = ({
    onClick,
    position = "bottom-right",
}: CalendarFABProps) => {
    return (
        <FloatingActionButton
            onClick={onClick}
            ariaLabel="Open calendar"
            title="Open calendar"
            position={position}
            color="blue"
        >
            <MdCalendarMonth size={28} />
        </FloatingActionButton>
    );
};
