import * as React from 'react';
import type { Metadata } from 'next'
import { Box, Button, Typography } from '@mui/material';


export const metadata: Metadata = {
    title: 'Serv - Blog',
    description: 'Menyajikan artikel terkini',
}


export default function Layout({
    children,
}: { children: React.ReactNode }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'start', md: 'center' },
                    gap: 4,
                    overflow: 'auto',
                }}
            >
                <Box
                    sx={{
                        display: 'inline-flex',
                        flexDirection: 'row',
                        gap: 3,
                        overflow: 'auto',
                    }}
                >
                    <Button size="small" variant="outlined" sx={{ color: '#ff914d', border: '1px #ff914d solid' }} href="/blog">Semua</Button>
                    <Button size="small" variant="outlined" sx={{ color: '#ff914d', border: '1px #ff914d solid' }} href="/blog/ekonomi">Ekonomi</Button>
                    <Button size="small" variant="outlined" sx={{ color: '#ff914d', border: '1px #ff914d solid' }} href="/blog/teknologi">Teknologi</Button>
                    <Button size="small" variant="outlined" sx={{ color: '#ff914d', border: '1px #ff914d solid' }} href="/kesehatan">Kesehatan</Button>
                </Box>
            </Box>
            {children}
        </Box>
    );
}