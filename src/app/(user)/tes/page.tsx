"use client";

import * as React from "react";
import {
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GridOnIcon from "@mui/icons-material/GridOn";
import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

export default function InstagramProfile() {
    const [tab, setTab] = React.useState(0);
    const posts = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        image: `https://picsum.photos/seed/${i}/400/400`,
    }));

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            {/* HEADER */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 6, mb: 4 }}>
                {/* Profile Avatar */}
                <Avatar
                    src="https://upload.wikimedia.org/wikipedia/en/b/bf/Oasis_-_band_logo.svg"
                    alt="Oasis"
                    sx={{ width: 140, height: 140, bgcolor: "#eee" }}
                />

                {/* Profile Info */}
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                        <Typography variant="h5" fontWeight={500}>
                            oasis
                        </Typography>
                        <Button variant="outlined" size="small">Ikuti</Button>
                        <Button variant="outlined" size="small">Kirim Pesan</Button>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                        <IconButton>
                            <SettingsOutlinedIcon />
                        </IconButton>
                    </Box>

                    {/* Stats */}
                    <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
                        <Typography variant="body2">
                            <strong>436</strong> postingan
                        </Typography>
                        <Typography variant="body2">
                            <strong>2.3M</strong> pengikut
                        </Typography>
                        <Typography variant="body2">
                            <strong>10</strong> mengikuti
                        </Typography>
                    </Box>

                    {/* Bio */}
                    <Box>
                        <Typography fontWeight={600}>Oasis</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rock band from Manchester. 🎸
                        </Typography>
                        <Typography variant="body2" color="primary">
                            oasisinet.com
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Divider sx={{ mb: 2 }} />

            {/* NAVIGATION TABS */}
            <Tabs
                value={tab}
                onChange={(e, v) => setTab(v)}
                centered
                textColor="inherit"
                indicatorColor="primary"
                sx={{
                    "& .MuiTab-root": {
                        minWidth: "unset",
                        mx: 2,
                    },
                }}
            >
                <Tab icon={<GridOnIcon />} iconPosition="start" label="POSTS" />
                <Tab icon={<MovieFilterOutlinedIcon />} iconPosition="start" label="REELS" />
                <Tab icon={<AccountBoxOutlinedIcon />} iconPosition="start" label="TAGGED" />
            </Tabs>

            <Divider sx={{ mb: 3 }} />

            {/* GRID POSTS */}
            <Grid container spacing={1}>
                {posts.map((post) => (
                    <Grid size={{ xs: 4 }} key={post.id}>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                paddingTop: "100%", // 1:1 aspect ratio
                                overflow: "hidden",
                                bgcolor: "#000",
                            }}
                        >
                            <img
                                src={post.image}
                                alt={`Post ${post.id}`}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
