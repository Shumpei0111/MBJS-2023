import type { NextPage, InferGetStaticPropsType } from 'next';
import matter from 'gray-matter';
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/features/blog/code-block';
import { DefaultLayout } from '@/layout/default';
import { TransitionItem } from '@/features/animation/transitionItem';

const BlogPost: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  title,
  tags,
  frontmatter,
  markdownBody,
}) => {
  const H1 = ({ node, ...props }: any) => {
    return (
      <h1
        id={node.position?.start.line.toString()}
        className="font-bold text-24 py-6"
      >
        {props.children}
      </h1>
    );
  };

  const H2 = ({ node, ...props }: any) => {
    return (
      <h2
        id={node.position?.start.line.toString()}
        className="border-dotted border-white border-b-1 font-bold text-18 mb-3 mt-20"
      >
        {props.children}
      </h2>
    );
  };

  const ankerLink = ({ node, ...props }: any) => {
    return (
      <a
        href={'#' + node.position?.start.line.toString()}
        className="underline hover:text-primary duration-200"
      >
        {props.children}
      </a>
    );
  };

  return (
    <DefaultLayout>
      <div className="max-w-[800px] mx-auto pt-20">
        <article className="bg-black text-white px-16 py-20 z-[100] relative drop-shadow-lg">
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
            <h2 className="text-40 text-center pt-4">{title}</h2>
          </TransitionItem>
          {/* 目次 */}
          <TransitionItem transitionIndex={1}>
            <nav className="py-10 flex flex-col gap-y-2 text-14">
              <ReactMarkdown
                allowedElements={['h1', 'h2']}
                components={{
                  h1: ankerLink,
                  h2: ankerLink,
                }}
              >
                {markdownBody}
              </ReactMarkdown>
            </nav>
          </TransitionItem>
          {/* 本文 */}
          <TransitionItem transitionIndex={2}>
            <div className="leading-10 font-blog">
              <ReactMarkdown
                components={{ code: CodeBlock, h1: H1, h2: H2, a: ankerLink }}
                remarkPlugins={[gfm]}
              >
                {markdownBody}
              </ReactMarkdown>
            </div>
          </TransitionItem>
          <div className="py-40 text-center">
            <span>*</span>
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
  const frontmatter = JSON.parse(JSON.stringify(singlePost.data));
  const tags: string[] = (() => {
    if (Array.isArray(frontmatter.tags)) return frontmatter.tags;
    return [frontmatter.tags];
  })();

  return {
    props: {
      title,
      tags,
      frontmatter,
      markdownBody: singlePost.content,
    },
  };
}

export default BlogPost;
