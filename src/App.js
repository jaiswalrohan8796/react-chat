import Login from "./pages/Login.js";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme.js";
export default function App() {
    return (
        <ThemeProvider theme={themeOptions}>
            <Login></Login>
        </ThemeProvider>
    );
}
