import React from "react";

// Admin Imports
import SmartHome from "views/admin/smarthome";

// Icon Imports
import {
  MdHome,
} from "react-icons/md";

const routes = [
  {
    name: "Smart Home",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <SmartHome />,
  },
];
export default routes;
