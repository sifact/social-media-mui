import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import img from "../assets/user.jpg";
import React from "react";

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
    },
];

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed">
                <Typography variant="h6" fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src={img} />
                    <Avatar alt="Travis Howard" src={img} />
                    <Avatar alt="Cindy Baker" src={img} />
                    <Avatar alt="Agnes Walker" src={img} />
                    <Avatar alt="Trevor Henderson" src={img} />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mb={2} mt={2}>
                    Images
                </Typography>
                <ImageList sx={{ width: 300 }} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography variant="h6" fontWeight={100} mb={2} mt={2}>
                    Recent Comments
                </Typography>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={img} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {
                                        " — I'll be in your neighborhood doing errands this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Travis Howard"
                                src="/static/images/avatar/2.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {
                                        " — Wish I could come, but I'm out of town this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Cindy Baker"
                                src="/static/images/avatar/3.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {
                                        " — Do you have Paris recommendations? Have you ever…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Rightbar;
