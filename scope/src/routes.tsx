import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ResearcherPage from "./pages/researcher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/researcher",
    element: <ResearcherPage />
  }
]);

export default router;