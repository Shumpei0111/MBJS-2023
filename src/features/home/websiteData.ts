import { type CommonCard } from '@/components/ProductCard';

export const websiteData: CommonCard[] = [
  {
    pageUrl: 'https://yuriyoi.site/',
    image: {
      url: '/images/project/kamiinabotan.webp',
      alt: '百合に酔うのスクリーンショット',
    },
    coverImage: {
      url: '/images/project/cover-kamiinabotan.webp',
      alt: '百合に酔うのスクリーンショット',
    },
    title: '百合に酔う',
    genre: '「上伊那ぼたん、酔へる姿は百合の花」ファンサイト',
    description:
      '秋田書店マンガクロスで現在連載中の「上伊那ぼたん、酔へる姿は百合の花」を応援するために作成したファンサイト',
    stack: [
      {
        'Front-End': 'React(Next.js)',
      },
      {
        Infra: 'Vercel',
      },
      {
        Period: '1.5 months',
      },
      {
        Responsible: '企画 / デザイン / ライティング / 実装',
      },
    ],
    repository:
      'https://github.com/Shumpei0111/kamiinabotan-fansite/tree/master',
  },
  {
    pageUrl: 'https://temp.co.jp/',
    image: {
      url: '/images/project/temp.webp',
      alt: '株式会社TEMPのスクリーンショット',
    },
    coverImage: {
      url: '/images/project/cover-temp.webp',
      alt: '株式会社TEMPのスクリーンショット',
    },
    title: '株式会社TEMP',
    genre: '企業サイト',
    description:
      'Notion公式アンバサダー、Tsuburaya様が経営する株式会社TEMPの公式サイト。実装を担当。',
    stack: [
      {
        'Front-End': 'Vue(Nuxt.js) / tailwindcss',
      },
      {
        Responsible: '実装',
      },
      {
        client: '株式会社TEMP',
      },
    ],
    repository: '',
  },
  {
    pageUrl: 'https://temp.co.jp/services/notion-university',
    image: {
      url: '/images/project/notion-univ.webp',
      alt: 'Notion大学のスクリーンショット',
    },
    coverImage: {
      url: '/images/project/cover-notion-univ.webp',
      alt: 'Notion大学のスクリーンショット',
    },
    title: 'Notion大学',
    genre: 'サービスサイト',
    description:
      'Notion公式アンバサダー、Tsuburaya様が運営するオンラインコミュニティ「Notion大学」のLP。実装を担当。',
    stack: [
      {
        'Front-End': 'Vue(Nuxt.js) / tailwindcss',
      },
      {
        Responsible: '実装',
      },
      {
        client: '株式会社TEMP',
      },
    ],
    repository: '',
  },
  {
    pageUrl: 'https://platinum-interaction.com/',
    image: {
      url: '/images/project/platinum-interaction.webp',
      alt: '株式会社PLATINUM INTERACTIONのスクリーンショット',
    },
    coverImage: {
      url: '/images/project/cover-platinum-interaction.webp',
      alt: '株式会社PLATINUM INTERACTIONのスクリーンショット',
    },
    title: '株式会社PLATINUM INTERACTION',
    genre: '企業サイト',
    description:
      '株式会社PLATINUM INTERACTION様の公式サイト。要件定義やデザイン・実装を担当。',
    stack: [
      {
        'Front-End': 'WordPress',
      },
      {
        Responsible: '要件定義 / デザイン / ライティング / 実装',
      },
      {
        client: '株式会社PLATINUM INTERACTION',
      },
    ],
  },
  {
    pageUrl: 'https://mutube.jp/',
    image: {
      url: '/images/project/mutube.webp',
      alt: 'MUTUBEのスクリーンショット',
    },
    coverImage: {
      url: '/images/project/cover-mutube.webp',
      alt: 'MUTUBEのスクリーンショット',
    },
    title: 'MUTUBE',
    genre: 'メディアサイト',
    description:
      '能登半島地震をきっかけに立ち上がった災害の未来を変えるメディアサイトの立ち上げ。実装を担当。',
    stack: [
      {
        'Front-End': 'Next.js(app router) / microCMS',
      },
      {
        Responsible: '実装',
      },
      {
        Infra: 'Netlify',
      },
      {
        client: '株式会社Mutubi',
      },
    ],
  },
  // {
  //   pageUrl: 'https://demo-exploring-abandoned-schools.netlify.app/',
  //   image: {
  //     url: '/images/project/haiko.webp',
  //     alt: '廃校探索のスクリーンショット',
  //   },
  //   coverImage: {
  //     url: '/images/project/cover-haiko.webp',
  //     alt: '廃校探索のスクリーンショット',
  //   },
  //   title: '廃校探索',
  //   genre: 'Webサイト',
  //   description:
  //     'Twitter上の企画：星駆web制作企画に参加。「お化け屋敷」と簡単な設定をもとに、約1ヶ月で調査、コンセプト作成、デザイン、実装、ライティングまで独自で行う。',
  //   stack: [
  //     {
  //       'Front-End': 'React',
  //     },
  //     {
  //       Infra: 'Firebase Hosting',
  //     },
  //     {
  //       Period: '1 month',
  //     },
  //     {
  //       Responsible: '企画 / 調査 / デザイン / ライティング / 実装',
  //     },
  //   ],
  //   repository: '',
  // },
  // {
  //   pageUrl: 'https://present-resort-point.netlify.app/',
  //   image: {
  //     url: '/images/project/resort.webp',
  //     alt: 'PRESENT RESORT POINTのスクリーンショット',
  //   },
  //   coverImage: {
  //     url: '/images/project/cover-resort.webp',
  //     alt: 'PRESENT RESORT POINTのスクリーンショット',
  //   },
  //   title: 'PRESENT RESORT POINT',
  //   genre: 'Webサイト',
  //   description:
  //     '1週間でWebサービスを作るイベント#web1weekに参加。「コロナ禍で旅行に出かけられないので、世界のリゾート地にあるライブカメラでリゾート気分を味わう」をコンセプトに制作。',
  //   stack: [
  //     {
  //       'Front-End': 'React',
  //     },
  //     {
  //       Infra: 'Netlify',
  //     },
  //     {
  //       Period: '1 week',
  //     },
  //     {
  //       Responsible: '企画 / 調査 / デザイン / 実装',
  //     },
  //   ],
  //   repository: '',
  // },
];
