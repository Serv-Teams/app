import { Box, Grid, Typography } from "@mui/material";

export default async function Advert({ img, description, createdAt }: { img: string, description: string, createdAt: string }) {
    let fmt = new Intl.DateTimeFormat('id-ID', {
        dateStyle: "long",
        // timeStyle: "short",
        timeZone: "UTC",
        // hour12: false
    });

    return (
        <Grid container spacing={2} columns={12}>
            <Grid size={{ xs: 12, md: 12 }}>
                <iframe loading="lazy" height={280} width="100%" style={{ border: 'none' }}
                    src={img} allow="fullscreen">
                </iframe>

                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {description}
                    {/* features: limit characters to 100 */}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px',
                    }}
                >
                    <Typography variant="caption">{fmt.format(new Date(createdAt))}</Typography>
                </Box>
            </Grid>

        </Grid>
    )
}