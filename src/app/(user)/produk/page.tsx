import * as React from 'react';
import Products from './Products'
import { getCompanies } from '@/actions/perusahaan/Company';
import { notFound } from 'next/navigation';
import { getProducts } from '@/actions/perusahaan/Product';

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Serv | Produk',
    description: 'Menampilkan daftar produk yang ditawarkan oleh para perusahaan.',
}

export default async function Page() {
    const products = JSON.parse(JSON.stringify(await getProducts()));
    const companies = JSON.parse(JSON.stringify(await getCompanies()));

    if (!products || !companies) {
        return notFound();
    }

    return (
        <Products products={products} companies={companies} />
    );
}