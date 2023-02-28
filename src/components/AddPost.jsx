import {
    Add,
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import user from "../assets/user.jpg";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

// const UserBox = styled(Box)({
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
// });

const AddPost = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip
                onClick={() => setOpen(true)}
                title="Add a post"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", sm: 30 },
                }}
            >
                <Fab color="primary" aria-label="Add a post">
                    <Add />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    bgcolor="background.default"
                    color="text.primary"
                    width={400}
                    p={3}
                    height={280}
                    borderRadius={1}
                >
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        color="gray"
                        textAlign="center"
                    >
                        Create a post
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        mb={2}
                        mt={2}
                    >
                        <Avatar sx={{ width: 30, height: 30 }} src={user} />
                        <Typography
                            fontSize={16}
                            fontWeight={500}
                            variant="span"
                        >
                            John Doe
                        </Typography>
                    </Stack>
                    <TextField
                        fullWidth
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind"
                        variant="standard"
                    />
                    <Stack direction="row" mb={3} mt={2} spacing={1}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        disableElevation
                        variant="contained"
                        aria-label="Disabled elevation buttons"
                    >
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};

export default AddPost;
