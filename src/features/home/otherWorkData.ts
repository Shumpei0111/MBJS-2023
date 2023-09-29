import { type CommonCard } from '@/components/ProductCard';

export const otherWorkData: CommonCard[] = [
  {
    pageUrl: 'https://github.com/Shumpei0111/simple_word_count',
    image: {
      url: '/images/project/counter.webp',
      alt: 'シンプル文字数カウンターのスクリーンショット',
    },
    coverImage: {
      url: '/images/project/cover-counter.webp',
      alt: 'シンプル文字数カウンターのスクリーンショット',
    },
    title: 'シンプル文字数カウンター',
    genre: 'Chrome拡張',
    description:
      '入力欄に文字を入力すると文字数のカウントと、入力した最新の文字列を保存することができるカウンター。閉じると入力した文字が消えるので、「読み込み」をクリックすると保存した文字列が入力欄に挿入されます。',
    stack: [
      {
        'Front-End': 'HTML/CSS/Vanilla JavaScript',
      },
      {
        Period: '3days',
      },
    ],
    repository: '',
  },
  {
    pageUrl:
      'https://speakerdeck.com/shumpei0111/fu-shu-ren-deno-da-gui-mo-saitoyi-zhi-notekunituku',
    image: {
      url: '/images/project/slide-fukusunin-big-site-move-tech.webp',
      alt: '複数人での大規模サイト移植のテクニックのスクリーンショット',
    },
    coverImage: {
      url: '/images/project/cover-slide-fukusunin-big-site-move-tech.webp',
      alt: '複数人での大規模サイト移植のテクニックのスクリーンショット',
    },
    title: '複数人での大規模サイト移植のテクニック',
    genre: '登壇',
    description:
      '2023年9月に開催した「ジャムスタックチョットデキル!!」での登壇。',
    stack: [
      {
        platform: 'Speaker Deck',
      },
    ],
    repository: '',
  },
];
