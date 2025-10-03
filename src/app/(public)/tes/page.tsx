"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MyTabs() {
    const pathname = usePathname();

    // Tentukan tab aktif berdasarkan path
    const currentTab = React.useMemo(() => {
        if (pathname.startsWith("/tes")) return "/tes";
        if (pathname === "/korporasi") return "/korporasi";
        if (pathname === "/trash") return "/trash";
        return false;
    }, [pathname]);

    return (
        <Tabs value={currentTab}>
            <Tab
                label="Inbox"
                value="/tes"
                component={Link}
                href="/tes"
            />
            <Tab
                label="Drafts"
                value="/korporasi"
                component={Link}
                href="/korporasi"
            />
            <Tab
                label="Trash"
                value="/trash"
                component={Link}
                href="/trash"
            />
        </Tabs>
    );
}

function CurrentRoute() {
    const pathname = usePathname();
    return (
        <Typography variant="body2" sx={{ color: "text.secondary", pb: 2 }}>
            Current route: {pathname}
        </Typography>
    );
}

export default function TabsRouter() {
    return (
        <Box sx={{ width: "100%" }}>
            <MyTabs />
            <CurrentRoute />
        </Box>
    );
}
