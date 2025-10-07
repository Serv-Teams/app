import { Box, Grid, Typography } from "@mui/material";

export default async function Adverts({ adverts, profile }: { adverts: any[], profile: any }) {
    return (
        <Grid container spacing={2} columns={12}>
            {
                adverts.map(
                    (a: any, index: any) =>
                        profile._id === a.corpProfileId && (
                            <Grid size={{ xs: 12, md: 4 }} key={index}>
                                <iframe
                                    loading="lazy"
                                    height={280}
                                    width="100%"
                                    style={{ border: "none" }}
                                    src={a.img}
                                    allow="fullscreen"
                                >
                                </iframe>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    {a.description}
                                    {/* features: limit characters to 100 */}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: 2,
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "16px",
                                    }}
                                >
                                    <Typography variant="caption">{a.createdAt}</Typography>
                                </Box>
                            </Grid>
                        )
                )}
        </Grid>
    )
}