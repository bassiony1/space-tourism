import { createHashRouter } from "react-router-dom";
import Layout from "../Layouts";
import { HomePage, DestinationPage, CrewPage, TechPage } from "../pages";
import Moon from "../components/DestinationPage/Moon";
import Mars from "../components/DestinationPage/Mars";
import Europa from "../components/DestinationPage/Europa";
import Titan from "../components/DestinationPage/Titan";
const routes = [
  { path: "/", element: <HomePage /> },
  {
    path: "destination/",
    element: <DestinationPage />,
    children: [
      { path: "mars", element: <Mars /> },
      { path: "europa", element: <Europa /> },
      { path: "titan", element: <Titan /> },
    ],
  },
  { path: "crew/", element: <CrewPage /> },
  { path: "tech/", element: <TechPage /> },
];

const router = createHashRouter([
  { path: "/", element: <Layout />, children: [...routes] },
]);

export default router;
