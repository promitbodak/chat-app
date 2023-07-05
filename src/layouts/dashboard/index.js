import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";

const DashboardLayout = () => {
  const theme = useTheme();

  return (
    <Stack direction="row">
      {/* SideBar component */}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
