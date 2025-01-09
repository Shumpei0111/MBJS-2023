import { useMetaData } from '@/hooks/useMetaData';
import Head from 'next/head';

type Props = {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
};

export const SeoMeta: React.FC<Props> = ({
  pageTitle,
  pageDescription,
  pagePath,
}) => {
  const { siteTitle, siteDescription, baseUrl } = useMetaData();

  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const description = pageDescription ?? siteDescription;
  const url = pagePath ? `${baseUrl}${pagePath}` : baseUrl;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${baseUrl}top-image.jpg`} />
      <link rel="canonical" href={url} />
    </Head>
  );
};
