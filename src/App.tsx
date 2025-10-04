import MainScreen from "./components/MainScreen";
import Navbar from "./components/Navbar";
import { UIProvider } from "./context/UIProvider";
import MainLayout from "./layouts/MainLayout";

const App = () => {
    return (
        <UIProvider>
            <MainLayout>
                <MainScreen />
            </MainLayout>
            <Navbar />
        </UIProvider>
    );
};

export default App;
