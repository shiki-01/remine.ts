import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "renderer/pages/Home";

const Router = () => {
    return (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </MemoryRouter>
    );
};

export default Router;