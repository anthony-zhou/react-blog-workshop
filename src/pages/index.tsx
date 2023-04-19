import Head from 'next/head';
import articles from '@/lib/articles';

export default function Homepage() {
  return (
    <div className="px-2 md:px-36 py-20">
      <Head>
        <title>Next Template</title>
      </Head>
      <div className="">
        <h1 className="text-4xl font-bold mb-2">Anthony&apos;s Blog</h1>
        {articles.map(({
          id, title, description, date,
        }) => (
          <div key={id} className="mb-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-500">{date}</p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
