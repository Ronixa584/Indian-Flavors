import React, { Suspense, lazy, useState } from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import{RouterProvider, Outlet} from "react-router-dom";
import useAppRouter from "./utils/useAppRouter";
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
import { Provider } from "react-redux";
import store from "./utils/store";
// import { CityProvider } from "./utils/CityProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import apiContext from "./utils/apiContext.jsx";
import useRestaurantList from "./utils/useRestaurantList.jsx";
import { cityContext } from "./components/Header.jsx";
import { CityProvider } from "./utils/cityContext.jsx";

export const AppLayout = () =>{
return (
  <>
    <Provider store={store}>
        <ToastContainer position="top-right" />
        <Header />
        <Outlet />
        <Footer />
    </Provider>
  </>
);
};


const appRouter = useAppRouter();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <cityContext>
    <CityProvider>
      <RouterProvider router={appRouter} />
    </CityProvider>
  // </cityContext>
);
