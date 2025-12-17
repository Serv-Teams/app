'use client';

import * as React from 'react';
import { Box, Grid, Typography, Card, CardContent, Chip, Button, Divider, Stack } from '@mui/material';

export default function Product(
    // { name, description, variants }: { name: any; description: any; variants: any[] }
    { product }: { product: any }
) {
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
                        </Stack>

                        <Typography variant="body1" color="text.secondary">
                            {product.description}
                        </Typography>

                        <Divider />

                        <Typography variant="subtitle1" fontWeight={600}>
                            Pilih Paket
                        </Typography>

                        <Grid container spacing={2}>
                            {product.variants.map((variant: any, index: any) => (
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
                                                    {variant.features.map((feature: any, i: any) => (
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
