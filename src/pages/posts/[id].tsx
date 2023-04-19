import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';

type PostProps = {
  postData: {
    title: string;
    date: string;
    description: string;
    contentHtml: string;
  }
};

export default function Post({ postData }: PostProps) {
  return (
    <div className="px-2 md:px-36 py-20">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Link href="/" className="text-xl font-bold">
        ← Back to home
      </Link>
      <article>
        <h1 className="text-3xl font-bold mt-10">{postData.title}</h1>
        <div className="text-2xl mb-4 italic">{postData.description}</div>
        <div className="text-sm mb-4">
          {postData.date}
        </div>
        <article className="prose prose-lg" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
