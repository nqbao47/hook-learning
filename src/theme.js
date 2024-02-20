import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

// A custom theme for this app
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: pink[600],
        },
      },
    },

    dark: {
      palette: {
        primary: {
          main: pink[400],
        },
      },
    },
  },
  // ...other properties
});

export default theme;
