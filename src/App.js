import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import ErrorPage from "./Components/ErrorPage";
import RestuarentInfo from "./Components/RestuarentInfo";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Cart from "./Components/Cart";


const App = () => {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        // make an api call
        const data = {
            name: "Tom",
        }
        setUserName(data.name);
    }, []);
    console.log(userName);


    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const Grocery = lazy(() => import("./Components/Grocery"))
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Grocery />
                    </Suspense>
                )
            },
            {
                path: "/restuarentInfo/:id",
                element: <RestuarentInfo />
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ],
        errorElement: <ErrorPage />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
