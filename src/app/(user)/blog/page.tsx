import * as React from 'react';
import Blogs from './Blogs';
import { getBlogs } from '@/actions/perusahaan/Blog';
import { getProfiles } from '@/actions/perusahaan/Profile';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serv | Blog',
  description: 'Menampilkan daftar blog yang ditulis oleh para perusahaan.',
}

export default async function Page() {
  const blogs = JSON.parse(JSON.stringify(await getBlogs()));
  const profiles = JSON.parse(JSON.stringify(await getProfiles()));

  if (!blogs || !profiles) {
    return notFound();
  }

  return (
    <Blogs blogs={blogs} profiles={profiles} />
  );
}