'use client'

import React from "react";
import Link from 'next/link';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Rating
} from "@mui/material";

// Contoh data rekomendasi
const recommendations = [
    {
        id: 1,
        image: "https://via.placeholder.com/150",
        name: "Crispy Chicken Snack",
        price: "Rp25.000",
        rating: 4.5,
    },
    {
        id: 2,
        image: "https://via.placeholder.com/150",
        name: "Local Honey Bottle",
        price: "Rp45.000",
        rating: 4,
    },
    {
        id: 3,
        image: "https://via.placeholder.com/150",
        name: "Organic Herbal Drink",
        price: "Rp30.000",
        rating: 4.2,
    },
    {
        id: 4,
        image: "https://via.placeholder.com/150",
        name: "Premium Coffee Beans",
        price: "Rp60.000",
        rating: 4.7,
    }
];

export default function Produk(
    { products, companies }: { products: any[]; companies: any[] }
) {

    const getPriceRange = (variants: any[]) => {
        const prices = variants.map(v => v.price);
        const min = Math.min(...prices);
        const max = Math.max(...prices);

        const format = (value: number) =>
            value.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
            });

        return min === max
            ? format(min)
            : `${format(min)} - ${format(max)}`;
    };

    return (
        <Box sx={{ py: 4, px: 2 }}>
            {/* Judul Bagian */}
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                Produk
            </Typography>

            {/* Grid Produk */}
            <Grid container spacing={3}>
                {products.map((product, index: any) => (
                    companies.map((company) =>
                        product.companyId === company._id && (
                            <Grid size={{ xs: 12, md: 3, sm: 6 }} key={index}>
                                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                    {/* Gambar Produk */}
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={product.image}
                                        alt={product.name}
                                    />
                                    {/* Nama & Harga */}
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {getPriceRange(product.variants)}
                                        </Typography>
                                        {/* Rating */}
                                        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                                            <Rating value={product.rating} precision={0.1} readOnly size="small" />
                                            <Typography variant="caption" sx={{ ml: 0.5 }}>
                                                {product.rating}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                    {/* CTA Button */}
                                    <CardActions>
                                        <Button component={Link} href="/halaman-tujuan" size="small" variant="contained" fullWidth>
                                            Kunjungi
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))))}
            </Grid>
        </Box>
    );
}
