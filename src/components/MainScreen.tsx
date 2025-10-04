import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes";

const MainScreen = () => {
    return (
        <main className="flex-grow bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-y-auto">
            <Routes>
                <Route path="/" element={<Navigate to="/stories" replace />} />
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
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
