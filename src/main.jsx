import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataContextProvider from "./contexts/DataContextProvider.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, Properties, PropertyDetail } from "./pages";
import { CityHotels, ErrorPage } from "./components";
import "./Mirage/mirageServer.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route path='' element={<Home />} />
      <Route path='properties' element={<Properties />}>
        <Route path=':city' element={<CityHotels />} />
      </Route>
      <Route path='properties/:city/:id' element={<PropertyDetail />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <RouterProvider router={router} />
  </DataContextProvider>
);
