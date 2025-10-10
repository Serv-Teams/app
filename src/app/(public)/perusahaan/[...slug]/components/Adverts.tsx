import { Grid, Typography } from "@mui/material";

export default async function Adverts({ adverts, profile }: { adverts: any[], profile: any }) {
    let fmt = new Intl.DateTimeFormat('id-ID', {
        dateStyle: "long",
        // timeStyle: "short",
        timeZone: "UTC",
        // hour12: false
    });


    return (
        <>
            <Typography variant="h5" gutterBottom>
                Iklan
            </Typography>
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
                                    <Typography variant="caption">{fmt.format(new Date(a.createdAt))}</Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        {a.description}
                                        {/* features: limit characters to 100 */}
                                    </Typography>

                                </Grid>
                            )
                    )}
            </Grid>
        </>
    )
}