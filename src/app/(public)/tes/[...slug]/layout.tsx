import * as React from "react";
import Box from "@mui/material/Box";
import { getProfile } from "@/actions/corporation/Profile";
import MyTabs from "./components/Tabs";
import { notFound } from "next/navigation";

// function MyTabs() {
//     const pathname = usePathname();

//     // Tentukan tab aktif berdasarkan path
//     const currentTab = React.useMemo(() => {
//         // if (pathname.startsWith("/tes")) return "/tes";
//         if (pathname === "/tes/serv") return "/tes/serv";
//         if (pathname === "/tes/serv/iklan") return "/tes/serv/iklan";
//         if (pathname === "/tes/serv/profil") return "/tes/serv/profil";
//         return false;
//     }, [pathname]);

//     return (
//         <Tabs value={currentTab}>
//             <Tab
//                 label="Beranda"
//                 value="/tes/serv"
//                 component={Link}
//                 href="/tes/serv"
//             />
//             <Tab
//                 label="Iklan"
//                 value="/tes/serv/iklan"
//                 component={Link}
//                 href="/tes/serv/iklan"
//             />
//             <Tab
//                 label="Profil"
//                 value="/tes/serv/profil"
//                 component={Link}
//                 href="/tes/serv/profil"
//             />
//         </Tabs>
//     );
// }

// function CurrentRoute() {
//     const pathname = usePathname();
//     return (
//         <Typography variant="body2" sx={{ color: "text.secondary", pb: 2 }}>
//             Current route: {pathname}
//         </Typography>
//     );
// }

export default async function TabsRouter({
    children,
    params
}: {
    children: React.ReactNode,
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const profile = JSON.parse(JSON.stringify(await getProfile(slug[0])))

    if (!profile) {
        notFound()
    }

    return (
        <Box sx={{ width: "100%" }}>
            <MyTabs slug={profile.slug} />
            {/* <CurrentRoute /> */}
            {children}
        </Box>
    );
}
