import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

interface paramInterface {
  id: string;
  type: string;
  query?: string;
}

const paramsToUrl: {
  [key: string]: string | any;
} = {
  popular: "/genre/Popular",
  essential: "/genre/Recommended",
  genre: "",
  search: "/genre/all/search",
};

const WorkList = (): JSX.Element => {
  const [data, setData] = React.useState<any>({
    status: { success: "loading" },
  });

  const params: paramInterface = useParams();

  useEffect(() => {
    setData({
      status: { success: "loading" },
    });
    fetch(
      `https://api.openopus.org/work/list/composer/${params.id}${
        paramsToUrl[params.type]
      }${params.query ? `/${params.query.toLowerCase()}` : ""}.json`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          setData(error);
        }
      );
  }, [params]);

  return (
    <Grid item container columnSpacing={2} rowSpacing={2}>
      {paramsToUrl[params.type] == undefined ||
      (/popular|essential/.test(params.type) && params.query) ||
      (!/popular|essential/.test(params.type) && params.query === undefined) ? (
        <Typography
          component={Grid}
          item
          xs={12}
          align="center"
          color="#ac3b61"
          variant="h3"
        >
          Invalid URL
        </Typography>
      ) : !data.works ? (
        <Typography
          component={Grid}
          item
          xs={12}
          align="center"
          color="#ac3b61"
          variant="h3"
        >
          {data.status === undefined || data.status.success === "loading"
            ? "Loading"
            : data.status.error}
        </Typography>
      ) : (
        data.works
          .sort((a: any, b: any): number =>
            a.title.localeCompare(b.title, "en", { numeric: true })
          )
          .map(
            (work: any, i: number): JSX.Element => (
              <Grid item xs={12} md={6} lg={4} xl={3} key={i}>
                <Paper
                  component={Stack}
                  elevation={8}
                  className="workPaper"
                  direction="column"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography variant="h5">{work.title}</Typography>
                    {work.subtitle !== "" && (
                      <Typography variant="subtitle2">
                        {work.subtitle}
                      </Typography>
                    )}
                  </Box>
                  <Stack direction="row" justifyContent="space-between">
                    <Box>
                      {work.popular === "1" && (
                        <Typography variant="body2">Popular</Typography>
                      )}
                      {work.recommended === "1" && (
                        <Typography variant="body2">Essential</Typography>
                      )}
                    </Box>
                    <Box>
                      <Typography variant="body2">{work.genre}</Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            )
          )
      )}
    </Grid>
  );
};

export default WorkList;
