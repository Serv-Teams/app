// // "use client";

// import * as React from "react";
// import Link from "next/link";
// import { MDXRemote } from "next-mdx-remote-client/rsc";
// import { Card, Typography } from "@mui/material";

// const Selengkapnya = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <Card
//       sx={{
//         color: "inherit",
//         borderColor: "hsla(220, 25%, 25%, 0.3)",
//       }}
//     >
//       <b>
//         Selengkapnya:
//         <br />
//         {children}
//       </b>
//     </Card>
//   );
// };

// const components = {
//   Link,
//   Selengkapnya,
// };

// export default function Blog({
//   content,
//   title,
// }: {
//   content: any;
//   title: string;
// }) {
//   return (
//     <>
//       <Typography variant="h4" gutterBottom>
//         {title}
//       </Typography>
//       <MDXRemote components={components} source={content} />
//     </>
//   );
// }

import * as React from "react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Card, Typography, Box } from "@mui/material";
import ShareButton from "./ShareButton"; // ⬅️ client component terpisah

const Selengkapnya = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card
      sx={{
        color: "inherit",
        borderColor: "hsla(220, 25%, 25%, 0.3)",
        p: 2,
        my: 2,
      }}
    >
      <b>
        Selengkapnya:
        <br />
        {children}
      </b>
    </Card>
  );
};

// Komponen custom MDX
const components = {
  Link,
  Selengkapnya,
};

export default async function Blog({
  content,
  title,
}: {
  content: any;
  title: string;
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Judul + Tombol Bagikan */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>

        {/* 🔗 Client Component (Share Button) */}
        <ShareButton title={title} />
      </Box>

      {/* Konten MDX */}
      <MDXRemote components={components} source={content} />
    </Box>
  );
}
