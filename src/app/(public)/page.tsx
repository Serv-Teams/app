import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';
import { Typography } from '@mui/material';

export default function Page() {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Blog
      </Typography>
      <Latest />
    </div>
  );
}