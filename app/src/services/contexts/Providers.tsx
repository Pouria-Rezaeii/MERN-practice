import {ThemeProvider} from "@material-ui/styles";
import {theme} from "@services/constants/theme";
import {PropsWithChildren} from "react";

export default function Providers(props: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
