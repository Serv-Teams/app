import * as React from 'react';
import Blogs from './Blogs';
import { getBlogs } from '@/actions/perusahaan/Blog';
import { getProfiles } from '@/actions/perusahaan/Profile';
import { notFound } from 'next/navigation';

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