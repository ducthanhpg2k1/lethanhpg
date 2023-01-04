import "./App.css";
import { Route } from "react-router";
import Login from "./container/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./container/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
