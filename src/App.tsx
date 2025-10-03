import MainScreen from "./components/MainScreen";
import Navbar from "./components/Navbar";
import { UIProvider } from "./context/UIContext";
import MainLayout from "./layouts/MainLayout";

const App = () => {
    return (
        <UIProvider>
            <MainLayout>
                {/* <div className="flex flex-col h-screen"> */}
                <MainScreen />
                {/* </div> */}
            </MainLayout>

            <Navbar />
        </UIProvider>
    );
};

export default App;
