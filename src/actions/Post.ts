'use server';
import { cache } from 'react'
import { revalidatePath, unstable_cache } from 'next/cache'
import client from '@/lib/mongodb';
import { redirect } from 'next/navigation';

import { ObjectId } from 'mongodb';

// Define the Movie interface
interface Post {
    title: string;
    slug: string[];
    topic: string;
    content: string;
    img: string;
    createdAt: Date;
    updatedAt: Date;
}

function slugify(str: any) {
    return String(str)
        .normalize('NFKD') // split accented characters into their base characters and diacritical marks
        .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .replace(/-+/g, '-'); // remove consecutive hyphens
}

export const getCachedPosts = unstable_cache(
    async () => {
        const db = client.db("corporate");
        const blogs = await db
            .collection("blogs")
            .find({})
            .toArray();
        return blogs;
    },
    ['blogs'],
    { revalidate: 1, tags: ['blogs'] }
)

export const getPost = async (slug: string) => {
    const db = client.db("corporate");
    const blog = await db
        .collection("blogs")
        .findOne({ slug: slug })
    return blog;
}

export async function upsertPost(prevState: any, formData: FormData) {
    const db = client.db("blog");
    const posts = db.collection<Post>("posts");

    const title = formData.get("title") as string;
    const topic = formData.get("topic") as string;
    const slug = [slugify(topic), slugify(title)];
    const content = formData.get("content") as string;
    const img = formData.get("img") as string;
    const createdAt = new Date();


    if (!title || !content || !topic || !img) {
        return { message: "Ada kolom yang tidak terisi" };
    } else {
        await posts.updateOne(
            { title },
            {
                $set: { title, content, slug, topic, img },
                $currentDate: { updatedAt: true },
                $setOnInsert: { createdAt } // Set createdAt only on insert
            },
            { upsert: true }
        );
    }

    revalidatePath('/dashboard/posts');
    redirect('/dashboard/posts');
}


export async function deletePost(id: string) {
    const db = client.db("blog");
    await db.collection("posts").deleteOne({ _id: new ObjectId(id) });

    revalidatePath('/dashboard/posts');
    redirect('/dashboard/posts');
}