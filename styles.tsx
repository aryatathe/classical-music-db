import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#123c69",
      light: "#325c89",
      dark: "#022c59",
      contrastText: "#eee2dc",
    },
  },
  typography: {
    fontFamily: "El Messiri",
    h1: {
      fontSize: 96,
      fontWeight: 700,
      lineHeight: 1,
    },
    h2: {
      fontSize: 64,
      fontWeight: 700,
      paddingTop: 20,
    },
    h3: {
      fontSize: 48,
      fontweight: 400,
    },
    h4: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: 1,
    },
    h5: {
      fontSize: 24,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: 1,
    },
    subtitle2: {
      fontSize: 18,
      fontweight: 400,
      lineHeight: 1,
    },
    body1: {
      fontSize: 18,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      display: "inline",
      background: "#edc7b788",
      borderRadius: 4,
      padding: "0 5px",
      marginRight: 3,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: "fit-content",
          backgroundColor: "#eee2dc",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#edc7b7",
          color: "#ac3b61",
          padding: 20,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "100%",
          border: "solid 1px #123c69",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {},
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "100%",
          "& .MuiSvgIcon-root": {
            color: "#123c69",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#123c69",
          "&.important": {
            color: "#eee2dc",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "100%",
          color: "#123c69",
          border: "solid 1px #123c69",
          borderRadius: 4,
          "& .MuiOutlinedInput-notchedOutline": {
            display: "none",
          },
          "& .MuiSvgIcon-root": {
            color: "#123c69",
          },
          "&.important, &.important .MuiSvgIcon-root": {
            backgroundColor: "#123c69",
            color: "#eee2dc",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: "#123c69",
          border: "solid 1px #123c69",
          borderRadius: 4,
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&.Mui-focused": {
            backgroundColor: "transparent",
          },
          "&.important, &.important .MuiSelect-icon": {
            backgroundColor: "#123c69",
            color: "#eee2dc",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          overflow: "hidden",
          "&.MuiMenu-paper": {
            backgroundColor: "#eee2dc",
            color: "#123c69",
          },
          "&.workPaper": {
            height: "100%",
            padding: 10,
            borderTop: "solid 3px #123c69",
            backgroundColor: "inherit",
            color: "#ac3b61",
          },
        },
      },
    },
    MuiImageListItem: {
      styleOverrides: {
        root: {
          width: "100%",
          borderRadius: 10,
          "& .MuiImageListItem-img": {
            borderRadius: 10,
          },
          "&.results": {
            cursor: "pointer",
            "&:hover img": {
              transform: "scale(110%)",
            },
          },
        },
        img: {
          transition: "all 0.3s ease",
        },
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        root: {
          borderRadius: "0 0 10px 10px",
          background: "#4d271788",
        },
      },
    },
  },
});

export default theme;
