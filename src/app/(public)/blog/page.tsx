import * as React from "react";
import Box from "@mui/material/Box";
import { getProfiles } from "@/actions/perusahaan/Profile";
import { Grid } from "@mui/material";
import Link from "next/link";
import { getBlogs } from "@/actions/perusahaan/Blog";
import { notFound } from "next/navigation";

export default async function Page() {
  const blogs = JSON.parse(JSON.stringify(await getBlogs()));
  const profiles = JSON.parse(JSON.stringify(await getProfiles()));

  if (!blogs || !profiles) {
    return notFound();
  }

  return (
    <>
      <Box sx={{ width: "100%" }}>DAFTAR PERUSAHAAN</Box>
      <Grid container spacing={2} columns={12}>
        {blogs.map((b: any, index: any) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <p>{b.title}</p>
            {profiles.map(
              (p: any, index: any) =>
                b.corporateId === p._id && (
                  <Link
                    key={index}
                    href={`/perusahaan/${p.slug}/iklan/${b.slug}`}
                  >
                    {b.title}
                  </Link>
                )
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );
}
