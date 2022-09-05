import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { BASE_URL } from '@constants';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const topPriorityStaticPages = [''].map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath}`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[
        ...topPriorityStaticPages.map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        }),
      ].join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

const Sitemap: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return null;
};

export default Sitemap;
