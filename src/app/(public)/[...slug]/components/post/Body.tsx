import * as React from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import { Card, Typography } from '@mui/material';

const Selengkapnya = ({ children }: { children: React.ReactNode }) => {
    return (
        <Card
            sx={{
                color: 'inherit',
                borderColor: 'hsla(220, 25%, 25%, 0.3)',
            }}
        >
            <b>Selengkapnya:
                <br />
                {children}
            </b>
        </Card>
    )
}


const components = {
    Link,
    Selengkapnya
}

export default function Body({ content, source }: { content: any, source: any[] }) {
    return (
        <>
            <MDXRemote components={components} source={content} />
            <Typography>
                Sumber:
                <ul>
                    {
                        source.map((s) => (
                            <li key={s}>
                                <a href={s} target="_blank" rel="noreferrer noopener">
                                    {s}
                                </a>
                            </li>
                        ))}
                </ul>
            </Typography>
        </>
    );
}