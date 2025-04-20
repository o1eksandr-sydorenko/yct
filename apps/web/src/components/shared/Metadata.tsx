import Head from 'next/head';

interface MetadataProps {
  title: string;
  description: string;
}

export const Metadata = ({ title, description }: MetadataProps) => {
  const fullTitle = `${title} | Your Crypto Tracker`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </Head>
  );
};
