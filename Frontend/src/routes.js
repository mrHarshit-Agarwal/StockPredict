
import Dashboard from "./views/Dashboard.js";
import UserProfile from "./views/UserProfile.js";
import TableList from "./views/TableList.js";
// import Typography from "./views/Typography.js";
// import Icons from "./views/Icons.js";
// import Maps from "./views/Maps.js";
// import Notifications from "./views/Notifications.js";
// import Upgrade from "./views/Upgrade.js";
import Feedback from "./views/Feedback"
import Information from "./views/Information.js"
const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin",
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Time Series",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  }, 
  {
    path: "/information",
    name: "View Information",
    icon: "nc-icon nc-paper-2",
    component: Information,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  {
    path: "/feedback",
    name: "Feedback",
    icon: "nc-icon nc-bell-55",
    component: Feedback,
    layout: "/admin",
  }
];

export default dashboardRoutes;
