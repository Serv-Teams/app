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
    if (pathname === `/perusahaan/${slug}`) return `/perusahaan/${slug}`;
    if (pathname === `/perusahaan/${slug}/produk`)
      return `/perusahaan/${slug}/produk`;
    if (pathname === `/perusahaan/${slug}/profil`)
      return `/perusahaan/${slug}/profil`;
    if (pathname === `/perusahaan/${slug}/blog`)
      return `/perusahaan/${slug}/blog`;
    return false;
  }, [pathname]);

  return (
    <Paper sx={{ mb: 8 }}>
      <Tabs value={currentTab}
        variant="scrollable"
        scrollButtons={false}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab
          label="Beranda"
          value={`/perusahaan/${slug}`}
          component={Link}
          href={`/perusahaan/${slug}`}
        />
        <Tab
          label="Produk"
          value={`/perusahaan/${slug}/produk`}
          component={Link}
          href={`/perusahaan/${slug}/produk`}
        />
        <Tab
          label="Profil"
          value={`/perusahaan/${slug}/profil`}
          component={Link}
          href={`/perusahaan/${slug}/profil`}
        />
        <Tab
          label="Blog"
          value={`/perusahaan/${slug}/blog`}
          component={Link}
          href={`/perusahaan/${slug}/blog`}
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
