import { Routes, Route } from "react-router";

import Root from "./routes/Root";
import Home from "./routes/Home";
import Category from "./routes/Category";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path=":category_id" element={<Category />} />
            </Route>
        </Routes>
    );
}

export default App;
