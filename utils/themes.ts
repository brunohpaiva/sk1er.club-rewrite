import grey from "@material-ui/core/colors/grey"
import { createMuiTheme } from "@material-ui/core/styles"

export const light = createMuiTheme({
  palette: {
    primary: { main: "#EC6952" },
    secondary: { main: "#6D7077" },
    type: "light",
  },
})

export const dark = createMuiTheme({
  palette: {
    primary: { main: grey[200] },
    secondary: { main: grey[400] },
    type: "dark",
  },
})
