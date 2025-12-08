'use client';

import { Close, NavigateNextRounded, Share } from "@mui/icons-material";
import { Button, Grid, IconButton, Snackbar, Typography } from "@mui/material";
import React from "react";

export default function Products({ products, profile }: { products: any[], profile: any }) {
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleShare = async (title: string, slug: string) => {
        const shareUrl = `${window.location.origin}/produk/${slug}`;
        const shareData = {
            title,
            text: `Lihat produk menarik: ${title}`,
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

    let fmt = new Intl.DateTimeFormat('id-ID', {
        dateStyle: "long",
        // timeStyle: "short",
        timeZone: "UTC",
        // hour12: false
    });


    return (
        <>
            <Typography variant="h5" gutterBottom>
                Produk
            </Typography>
            <Grid container spacing={2} columns={12}>
                {
                    products.map(
                        (p: any, index: any) =>
                            profile._id === p.corpId && (
                                <Grid size={{ xs: 12, md: 4 }} key={index}>
                                    {/* <iframe
                                        loading="lazy"
                                        height={280}
                                        width="100%"
                                        style={{ border: "none" }}
                                        src={a.img}
                                        allow="fullscreen"
                                    >
                                    </iframe> */}
                                    <Typography variant="caption">{fmt.format(new Date(p.createdAt))}</Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        {p.description}
                                        {/* features: limit characters to 100 */}
                                    </Typography>
                                    <React.Fragment >
                                        <IconButton
                                            href={`/perusahaan/${profile.slug}/produk/${p.slug}`}
                                            size="small"
                                        >
                                            <NavigateNextRounded />
                                        </IconButton>

                                        {/* 🔗 Tombol Bagikan */}
                                        <Button
                                            size="small"
                                            startIcon={<Share />}
                                            onClick={() => handleShare(p.description, p.slug)}
                                        >
                                            Bagikan
                                        </Button>
                                    </React.Fragment>
                                </Grid>
                            )
                    )}
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
                        <Close fontSize="small" />
                    </IconButton>
                }
            />
        </>
    )
}