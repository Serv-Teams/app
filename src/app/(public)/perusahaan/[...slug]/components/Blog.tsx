// "use client";

import * as React from "react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Card, Typography } from "@mui/material";

const Selengkapnya = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card
      sx={{
        color: "inherit",
        borderColor: "hsla(220, 25%, 25%, 0.3)",
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
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <MDXRemote components={components} source={content} />
    </>
  );
}
