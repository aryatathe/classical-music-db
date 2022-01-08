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

const periods: string[] = [
  "Medieval",
  "Renaissance",
  "Baroque",
  "Classical",
  "Early Romantic",
  "Romantic",
  "Late Romantic",
  "20th Century",
  "Post-War",
  "21st Century",
];

const ComposerSearch = (): JSX.Element => {
  const navigate = useNavigate();

  const params = useParams();

  const [input, setInput] = React.useState<string>(
    params.type == "search" ? params.query : ""
  );

  return (
    <Grid container sx={{ padding: "20px" }} columnSpacing={2} rowSpacing={1.5}>
      <Grid item xs={6} sm={3} md={2}>
        <Button
          variant={params.type === "popular" ? "contained" : "outlined"}
          component={Link}
          to={"/composers/popular"}
        >
          Popular
        </Button>
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <Button
          variant={params.type === "essential" ? "contained" : "outlined"}
          component={Link}
          to={"/composers/essential"}
        >
          Essential
        </Button>
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <FormControl variant="filled" color="primary">
          <InputLabel className={params.type === "period" ? "important" : ""}>
            Period
          </InputLabel>
          <Select
            disableUnderline
            value={
              params.type === "period"
                ? params.query
                    .toLowerCase()
                    .replace(/(^\w)|([ |-][\w])/g, (match: string): string =>
                      match.toUpperCase()
                    )
                : ""
            }
            label="Period"
            onChange={(event): void => navigate(`period/${event.target.value}`)}
            className={params.type === "period" ? "important" : ""}
          >
            {periods.map(
              (period: string): JSX.Element => (
                <MenuItem key={period} value={period}>
                  {period}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <FormControl variant="filled" color="primary">
          <InputLabel className={params.type === "letter" ? "important" : ""}>
            Alphabet
          </InputLabel>
          <Select
            disableUnderline
            label="Alphabet"
            value={params.type === "letter" ? params.query.toLowerCase() : ""}
            onChange={(event): void =>
              navigate(`letter/${event.target.value.toLowerCase()}`)
            }
            className={params.type === "letter" ? "important" : ""}
          >
            {Array.from(Array(26)).map(
              (x: any, i: number): JSX.Element => (
                <MenuItem key={i} value={String.fromCharCode(i + 97)}>
                  {String.fromCharCode(i + 65)}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
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
              <IconButton component={Link} to={`/composers/search/${input}`}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          onKeyDown={(event): void => {
            if (event.code === "Enter") navigate(`/composers/search/${input}`);
          }}
          className={params.type === "search" ? "important" : ""}
        />
      </Grid>
    </Grid>
  );
};

export default ComposerSearch;
