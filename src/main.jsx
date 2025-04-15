import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { HeroUIProvider } from "@heroui/react";

import { HashRouter, useNavigate } from "react-router";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

import "./index.css";

function HeroUIWrapper({ children }) {
    const navigate = useNavigate(); // ✅ Correct usage inside a functional component
    return <HeroUIProvider navigate={navigate}>{children}</HeroUIProvider>;
}

createRoot(document.getElementById("root")).render(
    <HashRouter>
        <Provider store={store}>
            <HeroUIWrapper>
                <main className="dark text-foreground bg-background">
                    <App />
                </main>
            </HeroUIWrapper>
        </Provider>
    </HashRouter>
);
