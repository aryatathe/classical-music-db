import * as React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

const genres: string[] = [
  "All",
  "Chamber",
  "Keyboard",
  "Orchestral",
  "Stage",
  "Vocal",
];

interface paramInterface {
  id: string;
  type: string;
  query?: string;
}
const ComposerSearch = (): JSX.Element => {
  const params: paramInterface = useParams();
  const navigate = useNavigate();

  const [input, setInput] = React.useState<string>(
    params.type === "search" ? params.query : ""
  );

  return (
    <Grid item container columnSpacing={2} rowSpacing={1.5}>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Button
          variant={params.type === "popular" ? "contained" : "outlined"}
          component={Link}
          to={`/works/${params.id}/popular`}
        >
          Popular
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Button
          variant={params.type === "essential" ? "contained" : "outlined"}
          component={Link}
          to={`/works/${params.id}/essential`}
        >
          Essential
        </Button>
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={2}>
        <FormControl variant="filled" color="primary">
          <InputLabel className={params.type === "genre" ? "important" : ""}>
            Genre
          </InputLabel>
          <Select
            disableUnderline
            value={
              params.type === "genre"
                ? params.query
                    .toLowerCase()
                    .replace(/(^\w)/, (match: string): string =>
                      match.toUpperCase()
                    )
                : ""
            }
            label="Genre"
            onChange={(event): void => navigate(`genre/${event.target.value}`)}
            className={params.type === "genre" ? "important" : ""}
          >
            {genres.map(
              (genre: string): JSX.Element => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3} lg={6}>
        <OutlinedInput
          value={input}
          placeholder="Search"
          onChange={(
            event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ): void => {
            setInput(event.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                component={Link}
                to={`/works/${params.id}/search/${input}`}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          onKeyDown={(event): void => {
            if (event.code === "Enter")
              navigate(`/works/${params.id}/search/${input}`);
          }}
          className={params.type === "search" ? "important" : ""}
        />
      </Grid>
    </Grid>
  );
};

export default ComposerSearch;
