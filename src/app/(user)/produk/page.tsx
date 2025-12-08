import * as React from 'react';
import Products from './Products'
import { getBlogs } from '@/actions/perusahaan/Blog';
import { getProfiles } from '@/actions/perusahaan/Profile';
import { notFound } from 'next/navigation';
import { getProducts } from '@/actions/perusahaan/Product';

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Serv | Produk',
    description: 'Menampilkan daftar produk yang ditawarkan oleh para perusahaan.',
}

export default async function Page() {
    const products = JSON.parse(JSON.stringify(await getProducts()));
    const profiles = JSON.parse(JSON.stringify(await getProfiles()));

    if (!products || !profiles) {
        return notFound();
    }

    return (
        <Products products={products} profiles={profiles} />
    );
}