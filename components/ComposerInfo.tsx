import * as React from "react";
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";

interface paramInterface {
  id: string;
}

const ComposerInfo = (): JSX.Element => {
  const params: paramInterface = useParams();

  const [data, setData] = React.useState<any>({
    status: { success: "loading" },
  });

  useEffect(() => {
    setData({
      status: { success: "loading" },
    });
    fetch(`https://api.openopus.org/composer/list/ids/${params.id}.json`)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          setData(error);
        }
      );
  }, [params.id]);

  return (
    <Grid
      container
      columnSpacing={2}
      rowSpacing={1.5}
      item
      xs={12}
      sm={3}
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      {data.status.success !== "true" ? (
        <Grid item>
          <Typography align="center" color="#ac3b61" variant="h3">
            {data.status.success == "loading" ? "Loading" : data.status.error}
          </Typography>
        </Grid>
      ) : (
        <>
          <Grid item>
            <ImageListItem
              sx={{ margin: 0, width: "100%", maxWidth: 200, height: "auto" }}
              component={Paper}
              elevation={8}
            >
              <img src={data.composers[0].portrait} />
            </ImageListItem>
          </Grid>
          <Grid item>
            <Typography color="primary" align="center" variant="h4">
              {data.composers[0].complete_name}
            </Typography>
            <Typography color="primary" align="center" variant="body1">
              {data.composers[0].epoch}
            </Typography>
            <Typography
              color="primary"
              align="center"
              variant="body1"
            >{`${data.composers[0].birth.slice(0, 4)}-${
              data.composers[0].death === null
                ? "present"
                : data.composers[0].death.slice(0, 4)
            }`}</Typography>
          </Grid>
          <Grid item>
            <Button component={Link} to={"/"}>
              Browse other composers
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ComposerInfo;
