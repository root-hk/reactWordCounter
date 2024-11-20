import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar title="TextUtils" link="About Us" />
                <TextForm />
            </>
        ),
    },
    {
        path: "/about",
        element: (
            <>
                <Navbar title="TextUtils" link="About Us" />
                <AboutUs />
            </>
        ),
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
