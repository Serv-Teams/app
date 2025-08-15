import Script from "next/script";

type Props = {
  Id: string;
};

const AdSense: React.FC<Props> = ({ Id }) => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${Id}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default AdSense;
