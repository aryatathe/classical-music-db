import * as React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

interface paramInterface {
  type: string;
  query?: string;
}

const paramsToUrl: {
  [key: string]: string | any;
} = {
  popular: "pop",
  essential: "rec",
  letter: "name",
  period: "epoch",
  search: "search",
};

const CustomGridItem = (props: { item: any; i: number }): JSX.Element => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <ImageListItem
        component={Paper}
        elevation={8}
        onClick={(): void => {
          navigate(`../../works/${props.item.id}/popular`);
        }}
        className="results"
      >
        <img
          style={{
            width: "100%",
            aspectRatio: "1/1",
            background: "#cec2bc",
            zIndex: -1,
            display: loaded ? "none" : "initial",
          }}
        />
        <img
          src={props.item.portrait}
          style={loaded ? {} : { display: "none" }}
          onLoad={(): void => setLoaded(true)}
        />
        <ImageListItemBar
          title={props.item.name}
          subtitle={`${props.item.birth.slice(0, 4)}-${
            props.item.death === null ? "present" : props.item.death.slice(0, 4)
          }`}
        />
      </ImageListItem>
    </Grid>
  );
};

const ComposerList = (): JSX.Element => {
  const [data, setData] = React.useState<any>({
    status: { success: "loading" },
  });

  const params: paramInterface = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setData({
      status: { success: "loading" },
    });
    fetch(
      `https://api.openopus.org/composer/list/${paramsToUrl[params.type]}${
        params.query ? `/${params.query}` : ""
      }.json`
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

  return paramsToUrl[params.type] == undefined ||
    (/popular|essential/.test(params.type) && params.query) ||
    (!/popular|essential/.test(params.type) && params.query === undefined) ? (
    <Typography align="center" color="#ac3b61" variant="h3">
      Invalid URL
    </Typography>
  ) : !data.composers ? (
    <Typography align="center" color="#ac3b61" variant="h3">
      {data.status === undefined || data.status.success === "loading"
        ? "Loading"
        : data.status.error}
    </Typography>
  ) : (
    <Grid container spacing={2} sx={{ padding: 4 }}>
      {data.composers.map(
        (item: any, i: number): JSX.Element => (
          <CustomGridItem key={i} item={item} i={i} />
        )
      )}
    </Grid>
  );
};

export default ComposerList;
