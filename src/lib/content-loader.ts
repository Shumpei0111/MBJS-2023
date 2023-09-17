import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const DIR = path.join(process.cwd(), 'src/content/');
const EXTENSION = '.md';

type Post = {
  content: string;
  date: string;
  slug: string;
  tags: string[] | string;
  title: string;
};

type FileName = string;

const readContentFiles = async (): Promise<Post[] | []> => {
  const promises = listContentFiles().map((filename) => {
    const slug = filename.replace(new RegExp(EXTENSION + '$'), '');

    return readContentFile({ slug, filename });
  });

  const contents = await Promise.all(promises);
  return JSON.parse(JSON.stringify(contents));
};

const listContentFiles = (): FileName[] => {
  const filenames = fs.readdirSync(DIR);
  console.log(
    123,
    filenames.filter(
      (filename: string) => path.extname(filename) === EXTENSION,
    ),
  );

  return filenames.filter(
    (filename: string) => path.extname(filename) === EXTENSION,
  );
};

const readContentFile = async ({
  slug,
  filename,
}: {
  slug: string;
  filename: string;
}): Promise<Post> => {
  if (slug === undefined) {
    slug = path.parse(filename).name;
  }

  const raw = fs.readFileSync(path.join(DIR, `${slug}${EXTENSION}`), 'utf8');
  const matterResult = matter(raw);

  const { title, date, tags } = matterResult.data;
  const { content } = matterResult;

  return {
    title,
    date,
    tags,
    slug,
    content,
  };
};

// タグの絞りこみ
// const getAssociatedPosts = async (argTags) => {
//   const allPosts = await readContentFiles({ fs });
//   const res = allPosts.map((post) => {
//     const tags = Array.isArray(post.tags) ? post.tags.slice() : [post.tags];
//     const res = [];
//     for (const t of tags) {
//       if (argTags.includes(t)) {
//         res.push(post);
//       }
//     }
//     return res;
//   });
//   // console.log(51, res);

//   return res;
// };

export {
  readContentFiles,
  listContentFiles,
  readContentFile,
  // getAssociatedPosts,
};
