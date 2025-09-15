import { Box, Button, Typography } from "@mui/material";

export default function Head({ title }: { title: string }) {
    return (
        // <Typography variant="h2" gutterBottom>
        //     {title}
        // </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div>
                <Typography variant="h2" gutterBottom>
                    {title}
                </Typography>
                <Typography>Menyajikan artikel seputar {title}</Typography>

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
                    <Button size="small" variant="outlined" sx={{ color: '#ff914d', border: '1px #ff914d solid' }} href="/blog/kesehatan">Kesehatan</Button>
                </Box>
            </Box>
        </Box>
    );
}