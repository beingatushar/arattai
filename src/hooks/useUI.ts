import { useContext } from "react";
import { UIContext } from "../context/UIContext";

// Create a custom hook for easy context consumption
export const useUI = () => {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error("useUI must be used within a UIProvider");
    }
    return context;
};
