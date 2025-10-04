"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Paper } from "@mui/material";

export default function MyTabs({ slug }: { slug: any }) {
    const pathname = usePathname();

    // Tentukan tab aktif berdasarkan path
    const currentTab = React.useMemo(() => {
        // if (pathname.startsWith("/tes")) return "/tes";
        if (pathname === `/tes/${slug}`) return `/tes/${slug}`;
        if (pathname === `/tes/${slug}/iklan`) return `/tes/${slug}/iklan`;
        if (pathname === `/tes/${slug}/profil`) return `/tes/${slug}/profil`;
        if (pathname.startsWith(`/tes/${slug}/blog`)) return `/tes/${slug}/blog`;
        return false;
    }, [pathname]);

    return (
        <Paper sx={{ mb: 2 }}>
            <Tabs value={currentTab}>
                <Tab
                    label="Beranda"
                    value={`/tes/${slug}`}
                    component={Link}
                    href={`/tes/${slug}`}
                />
                <Tab
                    label="Iklan"
                    value={`/tes/${slug}/iklan`}
                    component={Link}
                    href={`/tes/${slug}/iklan`}
                />
                <Tab
                    label="Profil"
                    value={`/tes/${slug}/profil`}
                    component={Link}
                    href={`/tes/${slug}/profil`}
                />
                <Tab
                    label="Blog"
                    value={`/tes/${slug}/blog`}
                    component={Link}
                    href={`/tes/${slug}/blog`}
                />
            </Tabs>
        </Paper>
    );
}

// function CurrentRoute() {
//     const pathname = usePathname();
//     return (
//         <Typography variant="body2" sx={{ color: "text.secondary", pb: 2 }}>
//             Current route: {pathname}
//         </Typography>
//     );
// }

// export default function TabsRouter({
//     children,
// }: {
//     children: React.ReactNode
// }) {
//     return (
//         <Box sx={{ width: "100%" }}>
//             <MyTabs />
//             <CurrentRoute />
//             {children}
//         </Box>
//     );
// }
