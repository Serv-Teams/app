import * as React from 'react';
import { Box, Grid, Typography, Card, CardContent, Chip, Button, Divider, Stack } from '@mui/material';

// contoh data dari MongoDB (biasanya dari API)
const product = {
    name: 'Jasa Pemasaran Digital',
    description:
        'Layanan profesional untuk mempromosikan produk/layanan secara online menggunakan internet dan platform digital (media sosial, mesin pencari, email, dll.) untuk menjangkau pelanggan, meningkatkan kesadaran merek dan mendorong penjualan.',
    type: 'jasa',
    status: 'active',
    variants: [
        {
            name: 'Pemula',
            description: 'Paket Pemula',
            price: 75000,
            features: [
                '1 Halaman website Company Profile',
                'SEO',
                'Google Ads',
                'WhatsApp Chatbot',
                'Email Ads',
            ],
        },
        {
            name: 'Profesional',
            description: 'Paket Profesional',
            price: 195000,
            features: [
                '1 Halaman website Company Profile',
                'SEO',
                'Meta Ads',
                'Google Ads',
                'TikTok Ads',
                'WhatsApp Chatbot',
                'Email Ads',
            ],
        },
        {
            name: 'Kustom',
            description: 'Paket Kustom',
            price: 300000,
            features: [
                'Halaman website Company Profile',
                'SEO',
                'Meta Ads',
                'Google Ads',
                'TikTok Ads',
                'WhatsApp Chatbot',
                'Email Ads',
            ],
        },
    ],
};

export default function ProductDetailPage() {
    return (
        <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: 'auto' }}>
            {/* Header seperti Tokopedia */}
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Box
                        sx={{
                            height: 320,
                            borderRadius: 2,
                            bgcolor: 'grey.100',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography color="text.secondary">Ilustrasi Jasa</Typography>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 7 }}>
                    <Stack spacing={2}>
                        <Typography variant="h4" fontWeight={600}>
                            {product.name}
                        </Typography>

                        <Stack direction="row" spacing={1}>
                            <Chip label={product.type.toUpperCase()} color="primary" size="small" />
                            <Chip label={product.status} color="success" size="small" />
                        </Stack>

                        <Typography variant="body1" color="text.secondary">
                            {product.description}
                        </Typography>

                        <Divider />

                        <Typography variant="subtitle1" fontWeight={600}>
                            Pilih Paket
                        </Typography>

                        <Grid container spacing={2}>
                            {product.variants.map((variant, index) => (
                                <Grid size={{ xs: 12, md: 4 }} key={index}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            borderRadius: 2,
                                            transition: '0.3s',
                                            '&:hover': { boxShadow: 6 },
                                        }}
                                    >
                                        <CardContent>
                                            <Stack spacing={1.5}>
                                                <Typography variant="h6" fontWeight={600}>
                                                    {variant.name}
                                                </Typography>

                                                <Typography variant="body2" color="text.secondary">
                                                    {variant.description}
                                                </Typography>

                                                <Typography variant="h5" color="primary" fontWeight={700}>
                                                    Rp {variant.price.toLocaleString('id-ID')}
                                                </Typography>

                                                <Divider />

                                                <Stack spacing={0.5}>
                                                    {variant.features.map((feature, i) => (
                                                        <Typography key={i} variant="body2">
                                                            • {feature}
                                                        </Typography>
                                                    ))}
                                                </Stack>

                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    sx={{ mt: 1, borderRadius: 2 }}
                                                >
                                                    Pilih Paket
                                                </Button>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
