import * as React from "react";
import Box from "@mui/material/Box";
import { getProfile } from "@/actions/perusahaan/Profile";
import MyTabs from "./components/Tabs";
import { notFound } from "next/navigation";
import { AppBar, Button, Container, IconButton, Paper, Typography } from "@mui/material";
import { Language, LocationOn, MoreVert, PlusOne } from "@mui/icons-material";

export default async function TabsRouter({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = JSON.parse(JSON.stringify(await getProfile(slug[0])));

  if (!profile) {
    notFound();
  }

  return (
    <Box sx={{ bgcolor: "background.default" }}>

      <Paper sx={{ display: "flex", alignItems: "center", gap: 2, p: 2, mb: 2 }} elevation={3}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid grey', // Optional: Add a border for visual separation
          }}
        >
          <iframe
            src={profile.logo}
            title={profile.name}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </Box>
        <Box>
          <Typography variant="h5">{profile.name}</Typography>
          <Typography variant="body2" color="text.secondary">{profile.industry}</Typography>
          <Box
            sx={{ mt: 1, mb: 2, display: "flex", gap: 1, alignItems: "center" }}
          >
            <LocationOn fontSize="small" />
            <Typography variant="caption">{profile.city}</Typography>
            <Language fontSize="small" sx={{ ml: 2 }} />
            <Typography variant="caption">{profile.website}</Typography>

          </Box>
          <Button size="small" variant="outlined" sx={{ ml: 'auto' }} startIcon={<PlusOne fontSize="small" />}>
            Ikuti
          </Button>
        </Box>
      </Paper>

      <MyTabs slug={profile.slug} />
      {/* <CurrentRoute /> */}
      {children}
    </Box>
  );
}
