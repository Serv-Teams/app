import * as React from 'react';
import Latest from './components/Latest';
import { Box, Button, Typography } from '@mui/material';
import { getCachedPosts } from '@/actions/Post';
import { notFound } from 'next/navigation';

export default async function Page() {
    const posts = JSON.parse(JSON.stringify(await getCachedPosts()))


    if (!posts) {
        notFound()
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div>
                <Typography variant="h2" gutterBottom>
                    Blog
                </Typography>
                <Typography>Menyajikan artikel terkini</Typography>

            </div>
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
            <Latest posts={posts} />
        </Box>
    );
}