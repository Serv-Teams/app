import React from "react";
import {
    Box,
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Button,
    Stack,
    Chip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ProductDetail({ product }: any) {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            {/* Gambar + Info Utama */}
            <Card sx={{ display: "flex", boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 300 }}
                    image={product.imageUrl} // URL foto produk
                    alt={product.name}
                />
                <CardContent sx={{ flex: 1 }}>
                    {/* Nama Produk */}
                    <Typography variant="h5" component="h1" gutterBottom>
                        {product.name}
                    </Typography>

                    {/* Harga */}
                    <Typography variant="h6" color="primary" gutterBottom>
                        Rp {product.price.toLocaleString("id-ID")}
                    </Typography>

                    {/* Status Stok */}
                    {product.inStock ? (
                        <Chip label="Tersedia" color="success" variant="outlined" />
                    ) : (
                        <Chip label="Habis" color="error" variant="outlined" />
                    )}

                    {/* Deskripsi Singkat */}
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body1">
                            {product.shortDescription}
                        </Typography>
                    </Box>

                    {/* Tombol Aksi */}
                    <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<ShoppingCartIcon />}
                        >
                            Tambah ke Keranjang
                        </Button>
                        <Button variant="outlined" color="primary">
                            Beli Sekarang
                        </Button>
                    </Stack>
                </CardContent>
            </Card>

            {/* Detail Produk Lengkap */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Detail Produk
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.fullDescription}
                </Typography>
            </Box>
        </Container>
    );
}
