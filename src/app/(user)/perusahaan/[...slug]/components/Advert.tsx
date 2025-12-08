import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export default function Advert({ description, img }: { description: any, img: any }) {
    return (
        <Grid container spacing={2} columns={12}>
            <Grid size={{ xs: 12 }}>
                <Card>
                    <Box
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
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}