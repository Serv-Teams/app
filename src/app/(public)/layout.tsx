import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <CssBaseline enableColorScheme />
            <AppAppBar />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 10, gap: 4 }}
            >
                {children}
            </Container>
            <Footer />
        </>
    );
}