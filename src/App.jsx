import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Typography } from "@mui/material";

import { Add, Settings } from "@mui/icons-material";
import styled from "@emotion/styled";

function App() {
    const BlueButton = styled(Button)(({ theme }) => ({
        backgroundColor: theme.palette.otherColor.main,
        color: "#888",
        margin: 5,
        "&:hover": {
            background: "lightblue",
        },
        "&:disabled": {
            background: "gray",
            color: "black",
        },
    }));

    return (
        <div className="App">
            <Button variant="text ">Text</Button>
            <Button
                startIcon={<Settings />}
                variant="contained"
                color="secondary"
                size="small"
            >
                Settings
            </Button>
            <Button color="success" startIcon={<Add />} variant="contained">
                Add new Post
            </Button>
            <Button variant="outlined">outlined</Button>
            <Typography variant="h3" component="p">
                It uses h1 style but it's a p tag
            </Typography>
            <BlueButton>My Button</BlueButton>
            <BlueButton>Another Button</BlueButton>
        </div>
    );
}

export default App;
