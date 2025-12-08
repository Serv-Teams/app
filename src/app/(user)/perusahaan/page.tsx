import * as React from "react";
import Box from "@mui/material/Box";
import { getCompanies } from "@/actions/perusahaan/Company";
import { Grid } from "@mui/material";
import Link from "next/link";

export default async function Page() {
  const companies = JSON.parse(JSON.stringify(await getCompanies()));

  return (
    <>
      <Box sx={{ width: "100%" }}>DAFTAR PERUSAHAAN</Box>
      <Grid container spacing={2} columns={12}>
        {companies.map((p: any, index: any) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Link href={`/perusahaan/${p.slug}`}>{p.name}</Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
