// import { Box, Grid, Typography } from "@mui/material";

// export default async function Advert({ img, description, createdAt }: { img: string, description: string, createdAt: string }) {
//     let fmt = new Intl.DateTimeFormat('id-ID', {
//         dateStyle: "long",
//         // timeStyle: "short",
//         timeZone: "UTC",
//         // hour12: false
//     });

//     return (
//         <Grid container spacing={2} columns={12}>
//             <Grid size={{ xs: 12, md: 12 }}>
//                 <iframe loading="lazy" height={280} width="100%" style={{ border: 'none' }}
//                     src={img} allow="fullscreen">
//                 </iframe>

//                 <Typography variant="body2" color="text.secondary" gutterBottom>
//                     {description}
//                     {/* features: limit characters to 100 */}
//                 </Typography>
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         gap: 2,
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         padding: '16px',
//                     }}
//                 >
//                     <Typography variant="caption">{fmt.format(new Date(createdAt))}</Typography>
//                 </Box>
//             </Grid>

//         </Grid>
//     )
// }

"use client";

import * as React from "react";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Advert({ img, description, createdAt, slug, city }: { img: string, description: string, createdAt: string, slug: string, city: string }) {

    let fmt = new Intl.DateTimeFormat('id-ID', {
        dateStyle: "long",
        // timeStyle: "short",
        timeZone: "UTC",
        // hour12: false
    });

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                mt: 4,
                px: 2,
            }}
        >
            <Card sx={{ maxWidth: 870, width: "100%", boxShadow: 3 }}>

                {/* Embed media */}
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: 470,
                        overflow: "hidden",
                        backgroundColor: "#000",
                        mb: 1,
                    }}
                >
                    <iframe
                        src={img}
                        title="Instagram Embed"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        style={{
                            border: "none",
                            display: "block",
                            aspectRatio: "1 / 1",
                        }}
                    />
                </Box>

                {/* Likes */}
                <CardContent sx={{ pt: 0 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                        {fmt.format(new Date(createdAt))}
                    </Typography>

                    {/* Caption */}
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
