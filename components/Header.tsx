import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const Header = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Typography variant="h1">Classical Music DB</Typography>
      <Typography variant="subtitle1">Open Opus API</Typography>
    </AppBar>
  );
};

export default Header;
