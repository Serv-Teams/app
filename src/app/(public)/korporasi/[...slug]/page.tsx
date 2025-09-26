// import { getProfile } from "@/actions/corporation/Profile"
// import { notFound } from "next/navigation"

// export default async function Page({
//     params,
// }: {
//     params: Promise<{ slug: string }>
// }) {
//     const { slug } = await params
//     const data = JSON.parse(JSON.stringify(await getProfile(slug)))

//     if (!data) {
//         notFound()
//     }

//     return <div>
//         My Post: {slug}
//     </div>
// }

// import { getCachedCorpProfiles } from "@/actions/corporation/Profile"

// export default async function Page() {
//     const corpProfiles = JSON.parse(JSON.stringify(await getCachedCorpProfiles()))

//     return (
//         <div>
//             {
//                 corpProfiles.map((p: any) => (
//                     <div key={p._id}>
//                         <h2>{p.name}</h2>
//                         <p>{p.description}</p>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }


import * as React from 'react';
import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation';
import { getPost } from '@/actions/Post';
import { getProfile } from '@/actions/corporation/Profile';
import { getAdvert, getCachedAdverts } from '@/actions/corporation/Advert';


type Props = {
    params: Promise<{ slug: string[] }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// export async function generateMetadata(
//     { params, searchParams }: Props,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     const { slug } = await params

//     const data = JSON.parse(JSON.stringify(await getPost(slug[1])))
//     const topic = JSON.parse(JSON.stringify(await getPost(slug[0])))

//     return {
//         title: slug[1] ? `Serv - Blog ${topic.topic}: ${data.title}` : slug[0] ? `Serv - Blog ${topic.topic}` : 'Serv - Tidak ditemukan',
//         description: slug[1] ? `Serv - Blog ${topic.topic}: ${data.content}` : slug[0] ? `Serv - Blog ${topic.topic}` : 'Serv - Tidak ditemukan',
//     }
// }

export default async function Page(
    {
        params,
        searchParams
    }: Props
) {
    // MDX text - can be from a database, CMS, fetch, anywhere...
    const { slug } = await params

    if (slug.length === 1) {

        const profile = JSON.parse(JSON.stringify(await getProfile(slug[0])))

        if (slug[0] !== profile.slug) {
            notFound()
        }

        return (
            <div>
                {
                    profile.description
                }
            </div>
        )
    } else if (slug.length === 2) {
        if (slug[1] === 'iklan') {
            const profile = JSON.parse(JSON.stringify(await getProfile(slug[0])))
            const adverts = JSON.parse(JSON.stringify(await getCachedAdverts()))
            return (
                <>
                    {
                        adverts.map((a: any) => (
                            profile._id === a.corpProfileId &&
                            <div key={a._id}>
                                <h2>{a.description}</h2>
                            </div>
                        ))
                    }
                </>
            )
        } else if (slug[1] === 'profil') {
            const profile = JSON.parse(JSON.stringify(await getProfile(slug[0])))
            return (
                <div>
                    {
                        profile.website
                    }
                    <br />
                    {
                        profile.email
                    }
                    <br />
                    {
                        profile.city
                    }
                </div>
            )
        } else {
            notFound()
        }



    } else if (slug.length === 3) {
        const advert = JSON.parse(JSON.stringify(await getAdvert(slug[2])))

        if (slug[2] !== advert.slug) {
            notFound()
        }

        return (
            <div>
                {advert.description}
            </div>

        )
    }


}