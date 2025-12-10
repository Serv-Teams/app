'use client';

import { useState } from "react";
import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";

export default function Product({ name, description, variants }: { name: any; description: any; variants: any[] }) {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    return (
        <Grid container spacing={2} columns={12}>
            <Grid size={{ xs: 12 }}>
                <Card>
                    {/* <Box
                        component="iframe"
                        src={img}
                        title={description}
                        allowFullScreen
                        sx={{
                            width: '100%',
                            // height: { sm: 'auto', md: '50%' },
                            // aspectRatio: { sm: '16 / 9', md: '' },
                            border: 'none',
                            // borderBottom: '1px solid',
                            borderLeft: '1px solid',
                            borderRight: '1px solid',
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            // objectFit: 'cover',
                            height: 200,
                        }}
                    /> */}
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {description}
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                            Varian Produk
                        </Typography>
                        {
                            variants.map((v: any, index: any) => (
                                <Box key={index} sx={{ mt: 2, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                                    {/* <Typography variant="h6">{v.name}</Typography> */}
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography variant="h6">{v.name}</Typography>

                                        <Chip
                                            label={openIndex === index ? "Tutup" : "Lihat"}
                                            color={openIndex === index ? "secondary" : "primary"}
                                            clickable
                                            onClick={() => toggleOpen(index)}
                                        />
                                    </Box>

                                    {openIndex === index && (
                                        <>
                                            <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                                                {v.description}
                                            </Typography>

                                            {v.features.map((feature: any, fIndex: number) => (
                                                <Typography key={fIndex} variant="body2" sx={{ mt: 1 }}>
                                                    - {feature}
                                                </Typography>
                                            ))}

                                            <Typography variant="subtitle1" sx={{ mt: 1 }}>
                                                Harga: {v.price}
                                            </Typography>
                                        </>
                                    )}
                                </Box>
                            ))
                        }
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}