import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ResearcherPage from "./pages/researcher";
import AdminDashboard from "./pages/admindashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/researcher",
    element: <ResearcherPage />
  },
  {
    path: "/admindashboard",
    element: <AdminDashboard/>
  }
]);

export default router;