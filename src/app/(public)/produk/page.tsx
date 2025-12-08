// import * as React from 'react';
// import Adverts from './Adverts';
// import { getBlogs } from '@/actions/perusahaan/Blog';
// import { getProfiles } from '@/actions/perusahaan/Profile';
// import { notFound } from 'next/navigation';
// import { getAdverts } from '@/actions/perusahaan/Advert';

// export default async function Page() {
//     const adverts = JSON.parse(JSON.stringify(await getAdverts()));
//     const profiles = JSON.parse(JSON.stringify(await getProfiles()));

//     if (!adverts || !profiles) {
//         return notFound();
//     }

//     return (
//         <Adverts adverts={adverts} profiles={profiles} />
//     );
// }

import * as React from 'react';
import Adverts from './Adverts';
import Products from './Products'
import { getBlogs } from '@/actions/perusahaan/Blog';
import { getProfiles } from '@/actions/perusahaan/Profile';
import { notFound } from 'next/navigation';
import { getProducts } from '@/actions/perusahaan/Product';

export default async function Page() {
    const products = JSON.parse(JSON.stringify(await getProducts()));
    const profiles = JSON.parse(JSON.stringify(await getProfiles()));

    if (!products || !profiles) {
        return notFound();
    }

    return (
        // <Adverts products={products} profiles={profiles} />
        <Products products={products} profiles={profiles} />
    );
}