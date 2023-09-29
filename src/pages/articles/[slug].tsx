import type { NextPage, InferGetStaticPropsType } from 'next';
import matter from 'gray-matter';
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/features/blog/code-block';
import { DefaultLayout } from '@/layout/default';
import { TransitionItem } from '@/features/animation/transitionItem';
import { Post, readContentFiles } from '@/lib/content-loader';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SeoMeta } from '@/components/Seo';
import classNames from 'classnames';

const BlogPost: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  id,
  slug,
  title,
  tags,
  markdownBody,
  prev,
  next,
}) => {
  const H1 = ({ node, ...props }: any) => {
    return (
      <h1
        id={node.position?.start.line.toString()}
        className="font-bold text-24 py-6 mt-20"
      >
        {props.children}
      </h1>
    );
  };

  const H2 = ({ node, ...props }: any) => {
    return (
      <h2
        id={node.position?.start.line.toString()}
        className="border-dotted border-white border-b-1 font-bold text-20 mb-3 pb-1 mt-16"
      >
        {props.children}
      </h2>
    );
  };

  const H3 = ({ node, ...props }: any) => {
    return (
      <h3
        id={node.position?.start.line.toString()}
        className=" font-bold text-18 mb-3 mt-12"
      >
        {props.children}
      </h3>
    );
  };

  const innerAnkerLink = ({ node, ...props }: any) => {
    return (
      <a
        href={'#' + node.position?.start.line.toString()}
        className={classNames(
          'underline hover:text-primary duration-200',
          props.level === 3 && 'pl-4',
        )}
      >
        {props.children}
      </a>
    );
  };

  const ankerLink = ({ node, ...props }: any) => {
    return (
      <a
        className="underline text-primary"
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  };

  return (
    <DefaultLayout>
      <SeoMeta pageTitle={title} pagePath={`articles/${slug}`} />
      <div className="max-w-[800px] mx-auto pt-20">
        <article className="bg-black text-white px-4 md:px-16 py-20 z-[100] relative drop-shadow-lg">
          <TransitionItem transitionIndex={0}>
            {tags && Array.isArray(tags) && (
              <ul className="flex gap-x-3 justify-center">
                {tags.map((tag, ind) => (
                  <li
                    key={`${tag}-${ind}`}
                    className="text-14 uppercase border-1 border-white px-2 rounded-md"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            <span
              className="text-center leading-[150%] pt-2 block"
              data-post-id={id}
              role="presentation"
            >
              #{id}
            </span>
            <h2 className="text-40 pt-2 text-center">{title}</h2>
          </TransitionItem>
          {/* 目次 */}
          <TransitionItem transitionIndex={1}>
            <nav className="py-10 pt-24 px-6 relative overflow-hidden">
              <div className="inline-flex flex-col gap-y-2 text-14 font-blog">
                <ReactMarkdown
                  allowedElements={['h1', 'h2', 'h3']}
                  components={{
                    h1: innerAnkerLink,
                    h2: innerAnkerLink,
                    h3: innerAnkerLink,
                  }}
                >
                  {markdownBody}
                </ReactMarkdown>
              </div>
              <span className="absolute -bottom-5 right-2">
                <svg width="300" height="60" viewBox="10 -43 156 60">
                  <text className="fill-transparent text-60 stroke-white stroke-[0.2]">
                    <tspan>CONTENTS</tspan>
                  </text>
                </svg>
              </span>
            </nav>
          </TransitionItem>
          {/* 本文 */}
          <TransitionItem transitionIndex={2}>
            <div className="leading-10 font-blog pt-40">
              <ReactMarkdown
                components={{
                  code: CodeBlock,
                  h1: H1,
                  h2: H2,
                  h3: H3,
                  a: ankerLink,
                }}
                remarkPlugins={[gfm]}
              >
                {markdownBody}
              </ReactMarkdown>
            </div>
          </TransitionItem>
          <div className="py-40 text-center">
            <span>*</span>
          </div>
          {/* 前後の記事 */}
          <div className="grid grid-cols-2 gap-x-8">
            {next ? (
              <div className="text-14">
                <p className="text-12">次の記事</p>
                <Link
                  href={`/articles/${next.slug}`}
                  className="underline hover:text-primary duration-200"
                  scroll={false}
                >
                  {next.title}
                </Link>
              </div>
            ) : (
              <div role="presentation" />
            )}
            {prev ? (
              <div className="text-14">
                <p className="text-12">前の記事</p>
                <Link
                  href={`/articles/${prev.slug}`}
                  className="underline hover:text-primary duration-200"
                  scroll={false}
                >
                  {prev.title}
                </Link>
              </div>
            ) : (
              <div role="presentation" />
            )}
          </div>
        </article>
      </div>
    </DefaultLayout>
  );
};

export const getStaticPaths = async () => {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    return keys.map((key: string) => {
      return key.replace(/^.*[\\\/]/, '').slice(0, -3);
    });
  })(require.context('../../content/', true, /.md$/));

  const paths = blogSlugs.map((blogSlug: string) => `/articles/${blogSlug}`);

  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await import(`../../content/${slug}.md`);

  const singlePost = matter(data.default);

  const title: string = singlePost.data.title;
  const id: string = singlePost.data.id;
  const frontmatter = JSON.parse(JSON.stringify(singlePost.data));
  const tags: string[] = (() => {
    if (Array.isArray(frontmatter.tags)) return frontmatter.tags;
    return [frontmatter.tags];
  })();

  const posts = await readContentFiles();

  const orderdPosts = posts.sort((a: Post, b: Post) => {
    return a.date > b.date ? -1 : 1;
  });

  const prev = orderdPosts.filter((post) => post.id === singlePost.data.id - 1);
  const next = orderdPosts.filter((post) => post.id === singlePost.data.id + 1);

  return {
    props: {
      id,
      slug,
      title,
      tags,
      frontmatter,
      markdownBody: singlePost.content,
      prev: prev[0] || null,
      next: next[0] || null,
    },
  };
}

export default BlogPost;
