import "@material-ui/styles";
import {theme} from "@services/constants/theme";

type Theme = typeof theme;

declare module "@material-ui/styles" {
  interface DefaultTheme extends Theme {}
}
