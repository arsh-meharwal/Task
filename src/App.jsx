import Collections from "./Collections";
import Events from "./Events";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Events />,
    },
    {
      path: "/collection",
      element: <Collections />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
