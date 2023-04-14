import { Button, Grid, Stack, Typography, Icon } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Login() {
    return (
        <Grid container style={GridStyle}>
            <Stack style={StackStyle} spacing={2}>
                <Typography
                    variant="h4"
                    style={TypographyStyle}
                    color="primary"
                >
                    CHAT APP
                </Typography>
                <Button variant="outlined" color="primary">
                    <GoogleIcon></GoogleIcon>&nbsp;Signup with Google
                </Button>
                <Button variant="outlined" color="primary">
                    <FacebookIcon></FacebookIcon>&nbsp;Signup with Facebook
                </Button>
            </Stack>
        </Grid>
    );
}

const GridStyle = {
    margin: "auto",
    minHeight: "80vh",
    minWidth: "80vw",
};
const StackStyle = {
    margin: "auto",
    padding: "4rem",
    borderRadius: "20px",
    border: "2px solid #00b8a9",
};
const TypographyStyle = {
    textAlign: "center",
    marginBottom: "2rem",
};
