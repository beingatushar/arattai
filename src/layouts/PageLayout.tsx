import { type ReactNode } from "react";

type PageLayoutProps = {
    title: string;
    actionButton?: ReactNode;
    children: ReactNode;
};

const PageLayout = ({ title, actionButton, children }: PageLayoutProps) => (
    <div className="p-4 md:p-6 min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="flex items-center justify-between h-12 mb-6 px-1">
            <h1 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                {title}
            </h1>
            {actionButton}
        </header>
        {children}
    </div>
);

export default PageLayout;
