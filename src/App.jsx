import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
    Button,
    Container,
    createTheme,
    Stack,
    ThemeProvider,
    Typography,
} from "@mui/material";

import { Box } from "@mui/system";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";

function App() {
    const [mode, setMode] = useState("dark");

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor="background.default" color="text.primary">
                <Navbar />

                <Stack
                    direction="row"
                    spacing={2}
                    mt={3}
                    justifyContent="space-between"
                >
                    <Sidebar setMode={setMode} mode={mode} />
                    <Feed />
                    <Rightbar />
                </Stack>
                <AddPost />
            </Box>
        </ThemeProvider>
    );
}

export default App;
