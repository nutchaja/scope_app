import { createBrowserRouter } from "react-router-dom";
// import Login from "./pages/login";
// import Register from "./pages/register";
import App from "./App";
import ResearcherPage from "./pages/researcher";


const router = createBrowserRouter([
    {
        path: "/", element: <App />, children: [
            // { index: true, element: <Register /> }
            // { path: "register", element: <Register /> },
            // { path: "login", element: <Login /> },
        ]
    },
    {
        path: "researcher", element: <ResearcherPage/>
    }
]);

export default router;