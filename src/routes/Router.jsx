import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HomePageLayouts from "../Layoutes/RootLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import JobDetails from "../pages/JobDetails";

import PrivateRoute from "./PrivateRoute";
import ApplyForm from "../pages/ApplyForm";
import MyApplications from "../pages/MyApplications";
import CreateJob from "../pages/CreateJob";
import MyPostJobs from "../pages/MyPostJobs";
import MyCandidates from "../pages/MyCandidates";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "jobs/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "apply/:id",
        element: (
          <PrivateRoute>
            <ApplyForm />
          </PrivateRoute>
        ),
      },
      {
        path: "myApplications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "createJob",
        element: (
          <PrivateRoute>
            <CreateJob />
          </PrivateRoute>
        ),
      },
      {
        path: "myPostJobs",
        element: (
          <PrivateRoute>
            <MyPostJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "myCandidates/:id",
        element: (
          <PrivateRoute>
            <MyCandidates />
          </PrivateRoute>
        ),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
