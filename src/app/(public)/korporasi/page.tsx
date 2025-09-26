// import { getCachedProfiles, getProfile } from "@/actions/corporation/Profile"
// import { notFound } from "next/navigation"

// export default async function Page() {
//     const data = JSON.parse(JSON.stringify(await getCachedProfiles()))

//     if (!data) {
//         notFound()
//     }

//     return (
//         <div>
//             {
//                 data.map((p: any) => (
//                     <div key={p._id}>
//                         <h2>{p.name}</h2>
//                         <p>{p.description}</p>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { getCachedProfiles, getProfile } from "@/actions/corporation/Profile"
import { notFound } from "next/navigation"
import { IconButton } from '@mui/material';
import { Comment, Send } from '@mui/icons-material';

export default async function AlignItemsList() {
    const data = JSON.parse(JSON.stringify(await getCachedProfiles()))

    if (!data) {
        notFound()
    }

    return (
        <List sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper' }}>
            {
                data.map((p: any) => (
                    <div key={p._id}>
                        <ListItem alignItems="flex-start"
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments" href={`/korporasi/${p.slug}`}>
                                    <Send />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                                <div style={{
                                    width: "24px", /* Set your desired width */
                                    height: "24px", /* Set your desired height (must be equal to width) */
                                    borderRadius: "50%", /* Makes the square into a circle */
                                    overflow: "hidden", /* Hides any part of the iframe that extends beyond the circle */
                                    position: "relative"
                                }}>
                                    <iframe src={p.logo}
                                        style={{
                                            width: "100%", /* The iframe will fill the container */
                                            height: "100%", /* The iframe will fill the container */
                                            border: "none", /* Removes the default iframe border */
                                            display: "block"
                                        }}
                                    ></iframe>
                                </div>
                            </ListItemAvatar>
                            <ListItemText
                                primary={p.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'text.primary', display: 'inline' }}
                                        >
                                            {p.industry}
                                        </Typography>
                                        {` — ${p.description}`}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                ))
            }
        </List >
    );
}
