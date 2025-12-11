'use client';

import { useEffect } from "react";

export default function AdsenseAd({ adSlot }: { adSlot: string }) {
    useEffect(() => {
        try {
            // jalankan script adsense
            // @ts-ignore
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.log("Adsense error:", e);
        }
    }, []);

    return (
        <>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5669338318384920"
                crossOrigin="anonymous"></script>

            <ins
                className="adsbygoogle"
                style={{ display: "block", margin: "20px 0" }}
                data-ad-client="ca-pub-5669338318384920"
                data-ad-slot={adSlot}
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </>
    );
}
