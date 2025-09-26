'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';

const cardData = [
    {
        img: 'https://picsum.photos/800/450?random=1',
        tag: 'Engineering',
        title: 'Revolutionizing software development with cutting-edge tools',
        description:
            'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
        authors: [
            { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
            { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
        ],
    },
    {
        img: 'https://picsum.photos/800/450?random=2',
        tag: 'Product',
        title: 'Innovative product features that drive success',
        description:
            'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
        authors: [{ name: 'Erica Johns', avatar: '/static/images/avatar/6.jpg' }],
    },
    {
        img: 'https://picsum.photos/800/450?random=3',
        tag: 'Design',
        title: 'Designing for the future: trends and insights',
        description:
            'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
        authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
    },
    {
        img: 'https://picsum.photos/800/450?random=4',
        tag: 'Company',
        title: "Our company's journey: milestones and achievements",
        description:
            "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
        authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
    },
    {
        img: 'https://picsum.photos/800/450?random=45',
        tag: 'Engineering',
        title: 'Pioneering sustainable engineering solutions',
        description:
            "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
        authors: [
            { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
            { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
        ],
    },
    {
        img: 'https://picsum.photos/800/450?random=6',
        tag: 'Product',
        title: 'Maximizing efficiency with our latest product updates',
        description:
            'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
        authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
    },
];

const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: (theme.vars || theme).palette.background.paper,
    '&:hover': {
        backgroundColor: 'transparent',
        // cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));

const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
        paddingBottom: 16,
    },
});

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});


export function Search() {
    return (
        <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
            <OutlinedInput
                size="small"
                id="search"
                placeholder="Search…"
                sx={{ flexGrow: 1 }}
                startAdornment={
                    <InputAdornment position="start" sx={{ color: 'text.primary' }}>
                        <SearchRoundedIcon fontSize="small" />
                    </InputAdornment>
                }
                inputProps={{
                    'aria-label': 'search',
                }}
            />
        </FormControl>
    );
}

export default function Body({ adverts, profiles }: { adverts: any, profiles: any }) {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
        null,
    );

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };


    let fmt = new Intl.DateTimeFormat('id-ID', {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "UTC",
        hour12: false
    });

    return (
        <>
            <div>
                <Typography variant="h1" gutterBottom>
                    Iklan
                </Typography>
                <Typography>Menampilkan daftar iklan yang sedang dipromosikan.</Typography>
            </div>
            <Grid container spacing={2} columns={12}>
                {
                    adverts.map((a: any, index: any) => (
                        // <div key={index}>
                        //     {d.description}
                        // </div>
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <SyledCard
                                variant="outlined"
                                onFocus={() => handleFocus(2)}
                                onBlur={handleBlur}
                                tabIndex={0}
                                className={focusedCardIndex === 2 ? 'Mui-focused' : ''}
                                sx={{ height: '100%' }}
                            >
                                {/* <CardMedia
                            component="img"
                            alt="green iguana"
                            image={cardData[2].img}
                            sx={{
                                height: { sm: 'auto', md: '50%' },
                                aspectRatio: { sm: '16 / 9', md: '' },
                            }}
                        /> */}

                                <iframe loading="lazy" height={280} width="100%" style={{ border: 'none' }}
                                    src={a.img} allow="fullscreen">
                                </iframe>
                                <SyledCardContent>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        {a.description}
                                        {/* features: limit characters to 100 */}
                                    </Typography>
                                </SyledCardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: 2,
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '16px',
                                    }}
                                >
                                    <Box
                                        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
                                    >
                                        <AvatarGroup max={3}>
                                            {profiles.map((p: any, index: any) => (
                                                p._id === a.corpProfileId &&
                                                <div key={index} style={{
                                                    width: "24px", /* Set your desired width */
                                                    height: "24px", /* Set your desired height (must be equal to width) */
                                                    borderRadius: "50%", /* Makes the square into a circle */
                                                    overflow: "hidden", /* Hides any part of the iframe that extends beyond the circle */
                                                    position: "relative"
                                                }}>
                                                    <iframe src={p.logo} style={{
                                                        width: "100%", /* The iframe will fill the container */
                                                        height: "100%", /* The iframe will fill the container */
                                                        border: "none", /* Removes the default iframe border */
                                                        display: "block"
                                                    }}></iframe>
                                                </div>
                                            ))}

                                        </AvatarGroup>
                                        <Typography variant="caption">
                                            {profiles.map((p: any) => p._id === a.corpProfileId && p.name)}
                                        </Typography>
                                    </Box>
                                    <Typography variant="caption">{fmt.format(new Date(a.createdAt))}</Typography>
                                </Box>
                            </SyledCard>
                        </Grid>
                    ))
                }

            </Grid>
        </>
    );
}
