import * as React from 'react';
import Latest from './components/Latest';
import { getCachedPosts } from '@/actions/Post';
import { notFound } from 'next/navigation';

export default async function Page() {
    const posts = JSON.parse(JSON.stringify(await getCachedPosts()))


    if (!posts) {
        notFound()
    }

    return (
        <Latest posts={posts} />
    );
}