import { getAdvert } from "@/actions/corporation/Advert";
import { getProfile } from "@/actions/corporation/Profile";
import { Box, Link } from "@mui/material";

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params
    const profile = JSON.parse(JSON.stringify(await getProfile(slug[0])))

    return (

        <Box
            sx={{
                typography: 'body1',
                '& > :not(style) ~ :not(style)': {
                    ml: 2,
                },
            }}
        >
            <iframe loading="lazy" height={80} width={80} style={{ border: 'none' }}
                src={profile.logo} allow="fullscreen">
            </iframe>
            <br />
            {
                profile.name
            }
            <br />
            {
                profile.industry
            }
            <br />
            <Link href={`/korporasi/${profile.slug}`}>Beranda</Link>
            <Link href={`/korporasi/${profile.slug}/profil`}>Profil</Link>
            <Link href={`/korporasi/${profile.slug}/iklan`}>Iklan</Link>
            {children}
        </Box>
    );
}