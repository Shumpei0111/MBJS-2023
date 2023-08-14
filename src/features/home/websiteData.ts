import { type CommonCard } from '@/components/ProductCard';

export const websiteData: CommonCard[] = [
  {
    image: {
      url: '/images/project/kamiinabotan.png',
      alt: '百合に酔うのスクリーンショット',
    },
    coverImage: {
      url: '/images/project/cover-kamiinabotan.png',
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
    repository: '',
  },
  {
    image: {
      url: '/images/project/haiko.png',
      alt: '廃校探索のスクリーンショット',
    },
    coverImage: {
      url: '/images/project/cover-haiko.png',
      alt: '廃校探索のスクリーンショット',
    },
    title: '廃校探索',
    genre: 'Webサイト',
    description:
      'Twitter上の企画：星駆web制作企画に参加。「お化け屋敷」と簡単な設定をもとに、約1ヶ月で調査、コンセプト作成、デザイン、実装、ライティングまで独自で行う。',
    stack: [
      {
        'Front-End': 'React',
      },
      {
        Infra: 'Firebase Hosting',
      },
      {
        Period: '1 month',
      },
      {
        Responsible: '企画 / 調査 / デザイン / ライティング / 実装',
      },
    ],
    repository: '',
  },
  {
    image: {
      url: '/images/project/resort.png',
      alt: 'PRESENT RESORT POINTのスクリーンショット',
    },
    coverImage: {
      url: '/images/project/cover-resort.png',
      alt: 'PRESENT RESORT POINTのスクリーンショット',
    },
    title: 'PRESENT RESORT POINT',
    genre: 'Webサイト',
    description:
      '1週間でWebサービスを作るイベント#web1weekに参加。「コロナ禍で旅行に出かけられないので、世界のリゾート地にあるライブカメラでリゾート気分を味わう」をコンセプトに制作。',
    stack: [
      {
        'Front-End': 'React',
      },
      {
        Infra: 'Netlify',
      },
      {
        Period: '1 week',
      },
      {
        Responsible: '企画 / 調査 / デザイン / 実装',
      },
    ],
    repository: '',
  },
];
