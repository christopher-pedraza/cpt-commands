import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { HeroUIProvider } from "@heroui/react";

import { HashRouter, useNavigate } from "react-router";

import "./index.css";

function HeroUIWrapper({ children }) {
    const navigate = useNavigate(); // ✅ Correct usage inside a functional component
    return <HeroUIProvider navigate={navigate}>{children}</HeroUIProvider>;
}

createRoot(document.getElementById("root")).render(
    <HashRouter>
        <HeroUIWrapper>
            <main className="dark text-foreground bg-background">
                <App />
            </main>
        </HeroUIWrapper>
    </HashRouter>
);
