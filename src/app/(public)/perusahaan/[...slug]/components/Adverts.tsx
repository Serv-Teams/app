import { Box, Grid, IconButton, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";

export default async function Adverts({ adverts, profile }: { adverts: any[], profile: any }) {
    let fmt = new Intl.DateTimeFormat('id-ID', {
        dateStyle: "long",
        // timeStyle: "short",
        timeZone: "UTC",
        // hour12: false
    });


    return (
        <Grid container spacing={2} columns={12}>
            {
                adverts.map(
                    (a: any, index: any) =>
                        profile._id === a.corpProfileId && (
                            <Grid size={{ xs: 12, md: 4 }} key={index}>
                                <iframe
                                    loading="lazy"
                                    height={280}
                                    width="100%"
                                    style={{ border: "none" }}
                                    src={a.img}
                                    allow="fullscreen"
                                >
                                </iframe>
                                <Box>
                                    <Typography variant="caption">{fmt.format(new Date(a.createdAt))}</Typography>
                                    <IconButton LinkComponent={Link} href={`/perusahaan/${profile.slug}/iklan/${a.slug}`}>
                                        <SendIcon />
                                    </IconButton>
                                </Box>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    {a.description}
                                    {/* features: limit characters to 100 */}
                                </Typography>

                            </Grid>
                        )
                )}
        </Grid>
    )
}

// "use client";

// import * as React from "react";
// import {
//     Avatar,
//     Box,
//     Button,
//     Container,
//     Divider,
//     Grid,
//     IconButton,
//     Tab,
//     Tabs,
//     Typography,
// } from "@mui/material";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import GridOnIcon from "@mui/icons-material/GridOn";
// import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";
// import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
// import Link from "next/link";

// export default function Adverts({ adverts, profile }: { adverts: any[], profile: any }) {
//     const [tab, setTab] = React.useState(0);
//     const posts = Array.from({ length: 12 }).map((_, i) => ({
//         id: i,
//         image: `https://picsum.photos/seed/${i}/400/400`,
//     }));

//     return (

//         <Grid container spacing={1}>
//             {adverts.map((a) => (
//                 <Grid size={{ xs: 12, sm: 6, md: 4 }} key={a._id}>
//                     <Link
//                         href={`/perusahaan/${profile.slug}/iklan/${a.slug}`}
//                         style={{ textDecoration: "none", color: "inherit" }}
//                     >
//                         <Box
//                             sx={{
//                                 position: "relative",
//                                 width: "100%",
//                                 paddingTop: "100%",
//                                 overflow: "hidden",
//                                 bgcolor: "#000",
//                                 cursor: "pointer",
//                                 "&:hover": { opacity: 0.9 },
//                             }}

//                         >
//                             <iframe
//                                 src={a.img}
//                                 title={a.description}
//                                 allowFullScreen={false}
//                                 style={{
//                                     position: "absolute",
//                                     top: 0,
//                                     left: 0,
//                                     width: "100%",
//                                     height: "100%",
//                                     border: "none",
//                                     pointerEvents: "none", // prevents iframe from capturing clicks
//                                 }}
//                             />
//                         </Box>
//                     </Link>
//                 </Grid>
//             ))}
//         </Grid>
//     );
// }
