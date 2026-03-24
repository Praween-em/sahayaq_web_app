import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  keywords?: string[];
}

export default function SEO({ title, description, name = "My Sahayaq", type = "website", keywords }: SEOProps) {
  const currentUrl = window.location.href;
  // Canonical should always point to the primary domain mysahayaq.in
  const canonicalUrl = currentUrl.replace(/sahayaq\.in|mysahayak\.online/g, 'mysahayaq.in');

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name="keywords" content={[...(keywords || []), 'My Sahayaq', 'My Sahayak', 'digital sahayak', 'online sahayak', 'sahayak', 'india sahayak platform', 'digital assistant india', 'citizen services portal india'].filter((v, i, a) => a.indexOf(v) === i).join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={currentUrl} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type === 'article' ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={name} />
    </Helmet>
  );
}
