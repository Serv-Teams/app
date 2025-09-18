
import * as React from 'react';
import type { Metadata, ResolvingMetadata } from 'next'
import BodyTopic from './components/topic/Body';
import { notFound } from 'next/navigation';
import { getPost, getCachedPosts } from '@/actions/Post';
import BodyPost from './components/post/Body';


type Props = {
    params: Promise<{ slug: string[] }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params

    const data = JSON.parse(JSON.stringify(await getPost(slug[1])))
    const topic = JSON.parse(JSON.stringify(await getPost(slug[0])))

    return {
        title: slug[1] ? `Serv - Blog ${topic.topic}: ${data.title}` : slug[0] ? `Serv - Blog ${topic.topic}` : 'Serv - Tidak ditemukan',
        description: slug[1] ? `Serv - Blog ${topic.topic}: ${data.content}` : slug[0] ? `Serv - Blog ${topic.topic}` : 'Serv - Tidak ditemukan',
    }
}

export default async function Page(
    {
        params,
        searchParams
    }: Props
) {
    // MDX text - can be from a database, CMS, fetch, anywhere...
    const { slug } = await params

    if (slug.length === 2) {
        const data = JSON.parse(JSON.stringify(await getPost(slug[1])))
        const topic = JSON.parse(JSON.stringify(await getPost(slug[0])))

        if (!data || !topic) {
            notFound()
        }

        return (
            <BodyPost content={data.content} source={data.source} title={data.title} />
        )
    } else if (slug.length === 1) {

        const topic = JSON.parse(JSON.stringify(await getPost(slug[0])))
        const posts = JSON.parse(JSON.stringify(await getCachedPosts()))

        if (!posts || !topic) {
            notFound()
        }

        return (
            <BodyTopic posts={posts} topic={topic} title={topic.topic} />
        )
    }
}