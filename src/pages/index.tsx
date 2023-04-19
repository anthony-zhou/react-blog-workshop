import Head from 'next/head';
import Link from 'next/link';
import posts from '@/lib/posts';

type HomepageProps = {
  articles: {
    id: string;
    title: string;
    description: string;
    date: string;
  }[];
};

export default function Homepage({ articles }: HomepageProps) {
  return (
    <div className="px-2 md:px-36 py-20">
      <Head>
        <title>Next Template</title>
      </Head>
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold">Anthony&apos;s Blog</h1>
      </div>
      {articles.map(({
        id, title, description, date,
      }) => (
        <Link
          key={id}
          href={`/posts/${id}`}
        >
          <div className="mb-8 p-6 border border-gray-300 rounded-md shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-500 mb-4">{date}</p>
            <p className="text-gray-800">{description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function getStaticProps() {
  const articles = posts.getSortedPosts();

  return {
    props: { articles },
  };
}
