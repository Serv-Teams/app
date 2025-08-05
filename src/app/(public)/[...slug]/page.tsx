
import * as React from 'react';
import type { Metadata, ResolvingMetadata } from 'next'
import BodyTopic from './components/topic/Body';
import { notFound } from 'next/navigation';
import { getPost, getCachedPosts } from '@/actions/Post';
import HeadTopic from './components/topic/Head';
import HeadPost from './components/post/Head';
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
        title: slug[1] ? `Serv - ${data.title}` : slug[0] ? `Serv - ${topic.topic}` : 'Serv - Tidak ditemukan',
        description: slug[1] ? `Serv - ${data.content}` : slug[0] ? `Serv - ${topic.topic}` : 'Serv - Tidak ditemukan',
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
            <>
                <HeadPost title={data.title} />
                <BodyPost content={data.content} />
            </>
        )
    } else if (slug.length === 1) {

        const topic = JSON.parse(JSON.stringify(await getPost(slug[0])))
        const posts = JSON.parse(JSON.stringify(await getCachedPosts()))

        if (!posts || !topic) {
            notFound()
        }

        return (
            <>
                <HeadTopic title={topic.topic} />
                <BodyTopic posts={posts} topic={topic} />
            </>
        )
    }
}