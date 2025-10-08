'use client'

import * as React from 'react';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import Link from 'next/link';


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

export default function Blogs({ blogs, profiles }: { blogs: any[], profiles: any[] }) {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
        null,
    );

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    let fmt = new Intl.DateTimeFormat('id-ID', {
        dateStyle: "long",
        // timeStyle: "short",
        timeZone: "UTC",
        // hour12: false
    });

    return (
        <div>
            <Typography variant="h2" gutterBottom>
                Blogs
            </Typography>
            <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
                {blogs.map((b: any, index: any) => (
                    <Grid key={index} size={{ xs: 12, sm: 6 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: 1,
                                height: '100%',
                            }}
                        >
                            <Typography gutterBottom variant="caption" component="div">
                                {b.topic}
                            </Typography>

                            {profiles.map(
                                (p: any, index: any) =>
                                    b.corporateId === p._id && (
                                        <Link key={index} href={`/perusahaan/${p.slug}/blog/${b.slug}`}>
                                            <TitleTypography
                                                gutterBottom
                                                variant="h6"
                                                onFocus={() => handleFocus(index)}
                                                onBlur={handleBlur}
                                                tabIndex={0}
                                                className={focusedCardIndex === index ? 'Mui-focused' : ''}
                                            >
                                                {b.title}
                                                <NavigateNextRoundedIcon
                                                    className="arrow"
                                                    sx={{ fontSize: '1rem' }}
                                                />
                                            </TitleTypography>
                                        </Link>
                                    )
                            )}

                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {b.content}
                            </StyledTypography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 2,
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box
                                    sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
                                >
                                    <AvatarGroup max={3}>
                                        {profiles.map(
                                            (p: any, index: any) =>
                                                b.corporateId === p._id && (
                                                    <Box
                                                        component="iframe"
                                                        src={p.logo}
                                                        title={p.name}
                                                        aria-label={p.slug}
                                                        key={index}
                                                        sx={{
                                                            width: 24,
                                                            height: 24,
                                                            borderRadius: "50%",
                                                            border: "none",
                                                            overflow: "hidden",
                                                            display: "inline-block",
                                                        }}
                                                    />
                                                )
                                        )}
                                    </AvatarGroup>
                                    <Typography variant="caption">
                                        {profiles.map(
                                            (p: any) =>
                                                b.corporateId === p._id && (
                                                    p.name
                                                )
                                        )}
                                    </Typography>
                                </Box>
                                <Typography variant="caption">{fmt.format(new Date(b.createdAt))}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}