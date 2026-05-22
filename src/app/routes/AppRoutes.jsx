import { createBrowserRouter, RouterProvider } from "react-router";

import { AuthLayout } from "../layouts/AuthLayout";
import { MainLayout } from "../layouts/MainLayout";

import { HomePage } from "../../features/MainLayout/ui/pages/HomePage";
import { Signin } from "../../features/auth/ui/pages/Signin";
import { Signup } from "../../features/auth/ui/pages/Signup";

import { PublicRoute } from "./PublicRoute";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <Signin />,
            },
            {
              path: "signup",
              element: <Signup />,
            },
          ],
        },
      ],
    },

    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
