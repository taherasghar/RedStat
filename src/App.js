import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import About from "./components/About";
import { ErrorElement } from "./components/ErrorElement";
import Products from "./components/Products";
import ProductId from "./components/ProductId.js";
import { Provider } from "react-redux";
import store from "./app/store.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorElement />,
    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <ErrorElement />,
    children: [{ path: ":productId", element: <ProductId /> }],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
