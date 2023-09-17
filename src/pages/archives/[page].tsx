import { DefaultLayout } from '@/layout/default';
import { listContentFiles, readContentFiles } from '@/lib/content-loader';
import classNames from 'classnames';
import { TransitionItem } from '@/features/animation/transitionItem';
import dayjs from 'dayjs';

type Props = {
  posts:
    | {
        content: string;
        date: string;
        slug: string;
        tags: string[] | string;
        title: string;
      }[]
    | [];
  page: number;
  total: number;
  perPage: number;
};

export default function Archives({ posts, page, total, perPage }: Props) {
  const pageLength = Math.ceil(total / perPage);
  const pagenationList = range(pageLength);
  const getPostDate = (date: string) => dayjs(date).format('YYYY/MM/DD');

  return (
    <DefaultLayout>
      <div className="max-w-[960px] mx-auto pt-20">
        <hgroup>
          <h2 className="text-40">BLOG</h2>
          <p className="text-14">日々思ったこと・学習の記録</p>
        </hgroup>
        <section className="pt-10 pl-4">
          {posts && posts.length > 0 && (
            <ul className="flex flex-col gap-y-6 fade-up">
              {posts.map((post, index) => (
                <TransitionItem key={post.title} transitionIndex={index}>
                  <li className="duration-300 ease-in hover:scale-105 flex flex-col w-fit">
                    <div className="flex gap-x-2 items-center pb-1">
                      <span className="text-14">{getPostDate(post.date)}</span>
                      {post.tags && Array.isArray(post.tags) && (
                        <ul className="flex gap-x-3">
                          {post.tags.map((tag) => (
                            <li className="text-12 uppercase border-1 border-primary px-2 rounded-md">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      )}
                      {post.tags && typeof post.tags === 'string' && (
                        <span className="text-12 uppercase border-1 border-primary px-2 rounded-md">
                          {post.tags}
                        </span>
                      )}
                    </div>
                    <p className="text-18 pt-1">{post.title}</p>
                    <p className="pl-4 line-clamp-1 text-12 max-w-[500px] pt-1">
                      <span>{post.content}</span>
                    </p>
                  </li>
                </TransitionItem>
              ))}
            </ul>
          )}
        </section>
      </div>
      <nav data-type="pagination" className="pt-20">
        <ul className="flex items-center justify-center gap-x-6">
          {pagenationList.map((int) => (
            <li key={int}>
              <a
                href={int !== page ? `/archives/${int}` : undefined}
                className={classNames([
                  'px-4 py-2 rounded-full duration-200',
                  int === page
                    ? 'bg-primary text-black'
                    : 'underline hover:bg-primary hover:text-black',
                ])}
              >
                {int}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </DefaultLayout>
  );
}

const COUNT_PER_PAGE = 10;

export async function getStaticProps(params: {
  params: {
    page: string;
  };
}) {
  const page = parseInt(params.params.page, 10);
  const end = COUNT_PER_PAGE * page;
  const start = end - COUNT_PER_PAGE;
  const posts = await readContentFiles();

  const orderdPosts = posts.sort((a: any, b: any) => {
    return a.date > b.date ? -1 : 1;
  });

  return {
    props: {
      posts: orderdPosts.slice(start, end),
      page,
      total: posts.length,
      perPage: COUNT_PER_PAGE,
    },
  };
}

export async function getStaticPaths() {
  const posts = await listContentFiles();

  const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE));
  const paths = pages.map((page) => {
    return {
      params: { page: `${page}` },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

//ユーティリティ: 1 から指定された整数までを格納した Array を返す
function range(step: number) {
  return Array.from({ length: step }, (_, i) => i + 1);
}
