import * as React from "react";
import { Route, Navigate, Routes, Outlet } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";
import ComposerList from "./components/ComposerList";
import ComposerSearch from "./components/ComposerSearch";
import ComposerInfo from "./components/ComposerInfo";
import WorkSearch from "./components/WorkSearch";
import WorkList from "./components/WorkList";

import theme from "./styles";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/composers/popular" />} />
        <Route
          path="composers"
          element={
            <>
              <Typography color="primary" align="center" variant="h2">
                Composers
              </Typography>
              <ComposerSearch />
              <Outlet />
            </>
          }
        >
          <Route path="/composers" element={<Navigate to="/popular" />} />
          <Route path=":type" element={<ComposerList />}>
            <Route path=":query" element={<></>} />
          </Route>
        </Route>
        <Route
          path="works/:id"
          element={
            <>
              <Typography color="primary" align="center" variant="h2">
                Compositions
              </Typography>
              <Grid
                container
                direction="row-reverse"
                sx={{ padding: "20px" }}
                columnSpacing={2}
                rowSpacing={1.5}
              >
                <ComposerInfo />
                <Grid
                  item
                  container
                  columnSpacing={2}
                  rowSpacing={4}
                  direction="column"
                  xs={12}
                  sm={9}
                >
                  <WorkSearch />
                  <Outlet />
                </Grid>
              </Grid>
            </>
          }
        >
          <Route path=":type" element={<WorkList />}>
            <Route path=":query" element={<></>}></Route>
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
