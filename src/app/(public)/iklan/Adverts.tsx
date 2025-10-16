// 'use client'

// import * as React from 'react';
// import AvatarGroup from '@mui/material/AvatarGroup';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';
// import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
// import { Button, Card, CardActions, CardContent, IconButton, Link } from '@mui/material';
// import { Send } from '@mui/icons-material';



// const StyledTypography = styled(Typography)({
//     display: '-webkit-box',
//     WebkitBoxOrient: 'vertical',
//     WebkitLineClamp: 2,
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
// });

// const TitleTypography = styled(Typography)(({ theme }) => ({
//     position: 'relative',
//     textDecoration: 'none',
//     '&:hover': { cursor: 'pointer' },
//     '& .arrow': {
//         visibility: 'hidden',
//         position: 'absolute',
//         right: 0,
//         top: '50%',
//         transform: 'translateY(-50%)',
//     },
//     '&:hover .arrow': {
//         visibility: 'visible',
//         opacity: 0.7,
//     },
//     '&:focus-visible': {
//         outline: '3px solid',
//         outlineColor: 'hsla(210, 98%, 48%, 0.5)',
//         outlineOffset: '3px',
//         borderRadius: '8px',
//     },
//     '&::before': {
//         content: '""',
//         position: 'absolute',
//         width: 0,
//         height: '1px',
//         bottom: 0,
//         left: 0,
//         backgroundColor: (theme.vars || theme).palette.text.primary,
//         opacity: 0.3,
//         transition: 'width 0.3s ease, opacity 0.3s ease',
//     },
//     '&:hover::before': {
//         width: '100%',
//     },
// }));

// export default function Adverts({ adverts, profiles }: { adverts: any[], profiles: any[] }) {
//     const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
//         null,
//     );

//     const handleFocus = (index: number) => {
//         setFocusedCardIndex(index);
//     };

//     const handleBlur = () => {
//         setFocusedCardIndex(null);
//     };

//     let fmt = new Intl.DateTimeFormat('id-ID', {
//         dateStyle: "long",
//         // timeStyle: "short",
//         timeZone: "UTC",
//         // hour12: false
//     });

//     return (
//         <div>
//             <Typography variant="h2" gutterBottom>
//                 Iklan
//             </Typography>
//             <Grid container spacing={2} columns={12}>
//                 {adverts.map((a: any, index: any) => (
//                     <Grid key={index} size={{ xs: 12, md: 6 }}>
//                         <Card sx={{ maxWidth: 345 }}>
//                             <Box
//                                 component="iframe"
//                                 src={a.img}
//                                 title={a.description}
//                                 allowFullScreen
//                                 sx={{
//                                     width: '100%',
//                                     // height: { sm: 'auto', md: '50%' },
//                                     // aspectRatio: { sm: '16 / 9', md: '' },
//                                     border: 'none',
//                                     // borderBottom: '1px solid',
//                                     borderLeft: '1px solid',
//                                     borderRight: '1px solid',
//                                     borderTop: '1px solid',
//                                     borderColor: 'divider',
//                                     // objectFit: 'cover',
//                                     height: 200,
//                                 }}
//                             />
//                             <CardContent>
//                                 <Box
//                                     sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center', mb: 2 }}
//                                 >
//                                     <AvatarGroup max={3}>
//                                         {profiles.map(
//                                             (p: any, index: any) =>
//                                                 a.companyId === p._id && (
//                                                     <Box
//                                                         component="iframe"
//                                                         src={p.logo}
//                                                         title={p.name}
//                                                         aria-label={p.slug}
//                                                         key={index}
//                                                         sx={{
//                                                             width: 24,
//                                                             height: 24,
//                                                             borderRadius: "50%",
//                                                             border: "none",
//                                                             overflow: "hidden",
//                                                             display: "inline-block",
//                                                         }}
//                                                     />
//                                                 )
//                                         )}
//                                     </AvatarGroup>
//                                     <Typography variant="caption">
//                                         {profiles.map(
//                                             (p: any) =>
//                                                 a.companyId === p._id && (
//                                                     p.name
//                                                 )
//                                         )}
//                                     </Typography>
//                                 </Box>
//                                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                                     {a.description}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 {/* {profiles.map(
//                                     (p: any, index: any) =>
//                                         a.companyId === p._id && (
//                                             <IconButton key={index} href={`/perusahaan/${p.slug}/iklan/${a.slug}`} size="small">
//                                                 <Send />
//                                             </IconButton>
//                                         )
//                                 )} */}
//                             </CardActions>
//                         </Card>

//                     </Grid>
//                 ))}
//             </Grid>
//         </div>
//     );
// }

'use client'

import * as React from 'react';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    Link,
    Snackbar,
} from '@mui/material';
import { Send, Share } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

const TitleTypography = styled(Typography)(({ theme }) => ({
    position: 'relative',
    textDecoration: 'none',
    '&:hover': { cursor: 'pointer' },
    '& .arrow': {
        visibility: 'hidden',
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
    },
    '&:hover .arrow': {
        visibility: 'visible',
        opacity: 0.7,
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '3px',
        borderRadius: '8px',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        width: 0,
        height: '1px',
        bottom: 0,
        left: 0,
        backgroundColor: (theme.vars || theme).palette.text.primary,
        opacity: 0.3,
        transition: 'width 0.3s ease, opacity 0.3s ease',
    },
    '&:hover::before': {
        width: '100%',
    },
}));

export default function Adverts({ adverts, profiles }: { adverts: any[]; profiles: any[] }) {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    const handleShare = async (title: string, slug: string) => {
        const shareUrl = `${window.location.origin}/iklan/${slug}`;
        const shareData = {
            title,
            text: `Lihat iklan menarik: ${title}`,
            url: shareUrl,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareUrl);
                setOpenSnackbar(true);
            }
        } catch (err) {
            console.error('Gagal membagikan link:', err);
        }
    };

    const fmt = new Intl.DateTimeFormat('id-ID', {
        dateStyle: 'long',
        timeZone: 'UTC',
    });

    return (
        <div>
            <Typography variant="h2" gutterBottom>
                Iklan
            </Typography>
            <Grid container spacing={2} columns={12}>
                {adverts.map((a: any, index: any) => (
                    <Grid key={index} size={{ xs: 12, md: 6 }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <Box
                                component="iframe"
                                src={a.img}
                                title={a.description}
                                allowFullScreen
                                sx={{
                                    width: '100%',
                                    height: 200,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: 1,
                                        alignItems: 'center',
                                        mb: 2,
                                    }}
                                >
                                    <AvatarGroup max={3}>
                                        {profiles.map(
                                            (p: any, index: any) =>
                                                a.companyId === p._id && (
                                                    <Box
                                                        component="iframe"
                                                        src={p.logo}
                                                        title={p.name}
                                                        aria-label={p.slug}
                                                        key={index}
                                                        sx={{
                                                            width: 24,
                                                            height: 24,
                                                            borderRadius: '50%',
                                                            border: 'none',
                                                            overflow: 'hidden',
                                                            display: 'inline-block',
                                                        }}
                                                    />
                                                )
                                        )}
                                    </AvatarGroup>
                                    <Typography variant="caption">
                                        {profiles.map(
                                            (p: any) => a.companyId === p._id && p.name
                                        )}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {a.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {profiles.map(
                                    (p: any, idx: any) =>
                                        a.companyId === p._id && (
                                            <React.Fragment key={idx}>
                                                <IconButton
                                                    href={`/perusahaan/${p.slug}/iklan/${a.slug}`}
                                                    size="small"
                                                >
                                                    <NavigateNextRoundedIcon />
                                                </IconButton>

                                                {/* 🔗 Tombol Bagikan */}
                                                <Button
                                                    size="small"
                                                    startIcon={<Share />}
                                                    onClick={() => handleShare(a.description, a.slug)}
                                                >
                                                    Bagikan
                                                </Button>
                                            </React.Fragment>
                                        )
                                )}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* 🔔 Snackbar Notifikasi */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={() => setOpenSnackbar(false)}
                message="Link berhasil disalin ke clipboard!"
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={() => setOpenSnackbar(false)}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </div>
    );
}
