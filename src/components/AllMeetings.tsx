import { BiUser } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";
import type { Meeting } from "../types/meetings";

const MeetingDetailItem = ({
    icon,
    text,
}: {
    icon: React.ReactNode;
    text: string;
}) => (
    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
        {icon}
        <span>{text}</span>
    </div>
);

const MeetingDuration = ({ duration }: { duration: string }) => (
    <MeetingDetailItem
        icon={
            <IoMdTime size={18} className="text-gray-500 dark:text-gray-400" />
        }
        text={`Duration: ${duration}`}
    />
);

const MeetingOrganizer = ({ organizer }: { organizer: string }) => (
    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
        <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
            <BiUser size={12} className="text-gray-700 dark:text-gray-300" />
        </div>
        <span>Organizer: {organizer}</span>
    </div>
);

const MeetingCard = ({
    date,
    title,
    duration,
    organizer,
}: {
    date: string;
    title: string;
    duration: string;
    organizer: string;
}) => (
    <div className="flex flex-col gap-2 border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
        <h6 className="text-sm text-gray-500 dark:text-gray-400">{date}</h6>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
        </h4>
        <div className="flex flex-col gap-2">
            <MeetingDuration duration={duration} />
            <MeetingOrganizer organizer={organizer} />
        </div>
    </div>
);

const AllMeetings = ({ meetings }: { meetings: Meeting[] }) => {
    return (
        <div className="flex flex-col gap-3">
            {meetings.map((meeting, index) => (
                <MeetingCard
                    key={index}
                    date={meeting.date}
                    title={meeting.title}
                    duration={meeting.duration}
                    organizer={meeting.organizer}
                />
            ))}
        </div>
    );
};

export default AllMeetings;
