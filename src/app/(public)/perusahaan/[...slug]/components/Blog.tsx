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

"use client";

import * as React from "react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import {
  Card,
  Typography,
  Button,
  Snackbar,
  IconButton,
  Stack,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";

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

const components = {
  Link,
  Selengkapnya,
};

export default function Blog({
  content,
  title,
}: {
  content: any;
  title: string;
}) {
  const [open, setOpen] = React.useState(false);

  const handleShare = async () => {
    const shareData = {
      title,
      text: `Baca artikel menarik: ${title}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        // 🔹 Browser mendukung Web Share API
        await navigator.share(shareData);
      } else {
        // 🔹 Fallback: salin link ke clipboard
        await navigator.clipboard.writeText(window.location.href);
        setOpen(true);
      }
    } catch (err) {
      console.error("Gagal membagikan link:", err);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>

        {/* 🔗 Tombol Bagikan */}
        <Button
          variant="outlined"
          startIcon={<ShareIcon />}
          onClick={handleShare}
        >
          Bagikan
        </Button>
      </Stack>

      {/* 🔹 Konten Blog */}
      {/* <MDXRemote components={components} source={content} /> */}

      {/* 🔔 Snackbar Notifikasi */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Link berhasil disalin ke clipboard!"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </>
  );
}
