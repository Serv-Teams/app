"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MyTabs({ profile }: { profile: any }) {
    const pathname = usePathname();

    // Tentukan tab aktif berdasarkan path
    const currentTab = React.useMemo(() => {
        // if (pathname.startsWith("/tes")) return "/tes";
        if (pathname === `/tes/${profile}`) return `/tes/${profile}`;
        if (pathname === `/tes/${profile}/iklan`) return `/tes/${profile}/iklan`;
        if (pathname === `/tes/${profile}/profil`) return `/tes/${profile}/profil`;
        return false;
    }, [pathname]);

    return (
        <Tabs value={currentTab}>
            <Tab
                label="Beranda"
                value={`/tes/${profile}`}
                component={Link}
                href={`/tes/${profile}`}
            />
            <Tab
                label="Iklan"
                value={`/tes/${profile}/iklan`}
                component={Link}
                href={`/tes/${profile}/iklan`}
            />
            <Tab
                label="Profil"
                value={`/tes/${profile}/profil`}
                component={Link}
                href={`/tes/${profile}/profil`}
            />
        </Tabs>
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
