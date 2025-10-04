import MainScreen from "./components/MainScreen";
import { UIProvider } from "./context/UIProvider";
import MainLayout from "./layouts/MainLayout";

const App = () => {
    return (
        <UIProvider>
            <MainLayout>
                <MainScreen />
            </MainLayout>
        </UIProvider>
    );
};

export default App;
