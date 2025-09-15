import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
    {
        icon: <SettingsSuggestRoundedIcon />,
        title: 'Performa yang dapat disesuaikan',
        description:
            'Produk kami dengan mudah disesuaikan dengan kebutuhan Anda, meningkatkan efisiensi dan menyederhanakan tugas Anda.',
    },
    {
        icon: <ConstructionRoundedIcon />,
        title: 'Dibuat untuk bertahan lama',
        description:
            'Rasakan daya tahan yang tak tertandingi, yang melampaui investasi yang bertahan lama.',
    },
    {
        icon: <ThumbUpAltRoundedIcon />,
        title: 'Pengalaman pengguna yang luar biasa',
        description:
            'Integrasikan produk kami ke dalam rutinitas Anda dengan antarmuka yang intuitif dan mudah digunakan.',
    },
    {
        icon: <AutoFixHighRoundedIcon />,
        title: 'Fungsionalitas inovatif',
        description:
            'Tetap unggul dengan fitur-fitur yang menetapkan standar baru, menjawab kebutuhan Anda yang terus berkembang lebih baik daripada yang lain.',
    },
    {
        icon: <SupportAgentRoundedIcon />,
        title: 'Dukungan yang dapat diandalkan',
        description:
            'Andalkan dukungan pelanggan kami yang responsif, yang menawarkan bantuan yang lebih dari sekadar pembelian.',
    },
    {
        icon: <QueryStatsRoundedIcon />,
        title: 'Ketepatan dalam setiap detail',
        description:
            'Nikmati produk yang dibuat dengan sangat teliti, di mana sentuhan-sentuhan kecil memberikan dampak signifikan pada keseluruhan pengalaman Anda.',
    },
];

export default function Highlights() {
    return (
        <Box
            id="highlights"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                // color: 'white',
                // bgcolor: 'grey.900',
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography component="h2" variant="h4" gutterBottom>
                        Standar Kami
                    </Typography>
                    <Typography variant="body1"
                        sx={{ color: 'text.secondary' }}
                    >
                        Jelajahi mengapa produk kami mempunyai keunggulan dibandingkan yang lain
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Stack
                                direction="column"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    color: 'inherit',
                                    p: 3,
                                    height: '100%',
                                }}
                            >
                                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                                <div>
                                    <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2"
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}