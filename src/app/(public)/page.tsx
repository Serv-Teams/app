import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';
import { Typography } from '@mui/material';
import { getCachedPosts } from '@/actions/Post';
import { notFound } from 'next/navigation';

export default async function Page() {
  const posts = JSON.parse(JSON.stringify(await getCachedPosts()))


  if (!posts) {
    notFound()
  }

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Blog
      </Typography>
      <Latest posts={posts} />
    </div>
  );
}