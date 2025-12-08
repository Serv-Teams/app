import { Typography } from "@mui/material";

export default async function Profile({ website, email, city }: { website: string, email: string, city: string }) {
    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Profil Perusahaan
            </Typography>
            <h3>Website</h3>
            <p>
                {website}
            </p>
            <h3>Email</h3>
            <p>
                {email}
            </p>
            <h3>Kota</h3>
            <p>
                {city}
            </p>
        </div>
    )
}