/* eslint-disable no-unused-vars */
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Homepage";
import BookingForm from "./components/BookingForm";
import About from "./components/About";
import { Auth0Provider } from "@auth0/auth0-react";
import ErrorPage from "./ErrorPage";
import Payment from "./components/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "bookingForm",
        element: <BookingForm />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-lmkgs053p58ojsig.us.auth0.com"
    clientId="0X1bwb9oXlxVtmcjoRidQtSRYn4D5SNj"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
