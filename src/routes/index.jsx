import { createHashRouter } from "react-router-dom";
import Layout from "../Layouts";
import { HomePage, DestinationPage, CrewPage, TechPage } from "../pages";
const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/destination", element: <DestinationPage /> },
  { path: "/crew", element: <CrewPage /> },
  { path: "/tech", element: <TechPage /> },
];

const router = createHashRouter([
  { path: "/", element: <Layout />, children: [...routes] },
]);

export default router;
