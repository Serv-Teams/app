// import { getProfile } from "@/actions/perusahaan/Profile"
// import { notFound } from "next/navigation"

// export default async function Page({
//     params,
// }: {
//     params: Promise<{ slug: string }>
// }) {
//     const { slug } = await params
//     const data = JSON.parse(JSON.stringify(await getProfile(slug)))

//     if (!data) {
//         notFound()
//     }

//     return <div>
//         My blog: {slug}
//     </div>
// }

// import { getCachedCorpProfiles } from "@/actions/perusahaan/Profile"

// export default async function Page() {
//     const corpProfiles = JSON.parse(JSON.stringify(await getCachedCorpProfiles()))

//     return (
//         <div>
//             {
//                 corpProfiles.map((p: any) => (
//                     <div key={p._id}>
//                         <h2>{p.name}</h2>
//                         <p>{p.description}</p>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

import * as React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getBlogs, getBlog } from "@/actions/perusahaan/Blog";
import { getProfile } from "@/actions/perusahaan/Profile";
import { getAdvert, getAdverts } from "@/actions/perusahaan/Advert";
import { Box, Grid, Typography } from "@mui/material";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import Adverts from "./components/Adverts";

type Props = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params

  const profile = JSON.parse(JSON.stringify(await getProfile(slug[0])));
  if (!profile) {
    notFound();
  }

  return {
    title: `Serv - ${profile.name}`,
    description: `Serv - ${profile.name}`
  }
}

export default async function Page({ params, searchParams }: Props) {
  // MDX text - can be from a database, CMS, fetch, anywhere...
  const { slug } = await params;
  const profile = JSON.parse(JSON.stringify(await getProfile(slug[0])));
  if (!profile) {
    notFound();
  }
  if (slug.length === 1) {
    return <div>{profile.description}</div>;
  } else if (slug.length === 2) {
    if (slug[1] === "iklan") {
      const adverts = JSON.parse(JSON.stringify(await getAdverts()));
      return (
        <Adverts adverts={adverts} profile={profile} />
      );
    } else if (slug[1] === "profil") {
      return (
        <Profile website={profile.website} email={profile.email} city={profile.city} />
      );
    } else if (slug[1] === "blog") {
      const blogs = JSON.parse(JSON.stringify(await getBlogs()));
      return (
        <Blogs blogs={blogs} corporateId={profile._id} slug={profile.slug} />
      );
    }
    else {
      notFound();
    }
  } else if (slug.length === 3) {
    const blog = JSON.parse(JSON.stringify(await getBlog(slug[2])));
    const advert = JSON.parse(JSON.stringify(await getAdvert(slug[2])));
    if (slug[2] !== blog?.slug && slug[2] !== advert?.slug) {
      notFound();
    }

    if (slug[2] === advert?.slug) {
      let fmt = new Intl.DateTimeFormat('id-ID', {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "UTC",
        hour12: false
      });

      return (
        // <div>{advert.description}</div>
        <Grid container spacing={2} columns={12}>
          <Grid size={{ xs: 12, md: 12 }}>
            <iframe loading="lazy" height={280} width="100%" style={{ border: 'none' }}
              src={advert.img} allow="fullscreen">
            </iframe>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              {advert.description}
              {/* features: limit characters to 100 */}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
              }}
            >
              <Typography variant="caption">{fmt.format(new Date(advert.createdAt))}</Typography>
            </Box>
          </Grid>

        </Grid>
      )
    } else if (slug[2] === blog?.slug) {
      return <Blog content={blog.content} title={blog.title} />;
    }
  }
  // return notFound();
}
