import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthLayout } from "../layouts/AuthLayout";
import { Login } from "../../features/auth/ui/pages/Login";
import { Signup } from "../../features/auth/ui/pages/Signup";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../../features/MainLayout/ui/pages/HomePage";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "/home",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};
