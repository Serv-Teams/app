import * as React from "react";
import Box from "@mui/material/Box";
import { getProfile } from "@/actions/perusahaan/Profile";
import MyTabs from "./components/Tabs";
import { notFound } from "next/navigation";

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
    <Box sx={{ width: "100%" }}>
      {profile.name}
      <br />
      {profile.industry}
      <MyTabs slug={profile.slug} />
      {/* <CurrentRoute /> */}
      {children}
    </Box>
  );
}
