import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResearcherPage from "./pages/researcher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/researcher",
    element: <ResearcherPage />
  }
]);

export default router;