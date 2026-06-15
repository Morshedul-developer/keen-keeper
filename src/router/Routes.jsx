import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import TimeLine from "../pages/timeLine/TimeLine";
import Stats from "../pages/stats/Stats";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/timeline",
        element: <TimeLine />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/friends/:friendId",
        element: <FriendDetails />,
      }
    ],
  },
]);