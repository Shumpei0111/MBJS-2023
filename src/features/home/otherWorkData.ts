import { type CommonCard } from '@/components/ProductCard';

export const otherWorkData: Omit<CommonCard, 'image' | 'coverImage'>[] = [
  {
    pageUrl: 'https://github.com/Shumpei0111/todo-cli',
    title: 'todo-cli',
    genre: 'CLIツール',
    description:
      'ターミナル上で動作するTODOリストツール。タスクの追加、削除、完了、未完了、表示ができます。',
    stack: [
      {
        'Front-End': 'Node.js',
      },
      {
        Period: '0.5day',
      },
    ],
    blog: {
      title: 'CLI で TODO を管理する(Zenn)',
      url: 'https://zenn.dev/seventhseven07/articles/ddac898532bacc',
    },
    repository: 'https://github.com/Shumpei0111/todo-cli',
  },
  {
    pageUrl: 'https://github.com/Shumpei0111/simple_word_count',
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
  },
  {
    pageUrl: 'https://speakerdeck.com/shumpei0111/li-wai-chu-li-nituitekao-eru',
    title: '例外処理について考える',
    genre: '登壇',
    description: '2024.12.19 フロントエンドチョットデキル ミニ #01で登壇',
    stack: [
      {
        platform: 'Speaker Deck',
      },
    ],
  },
  {
    pageUrl:
      'https://speakerdeck.com/shumpei0111/reactdefan-yong-de-nainputkonponentowokao-eru',
    title: 'Reactで汎用的なinputコンポーネントを考える',
    genre: '登壇',
    description: '2024.11.21 エンジニアコミュニティ内での登壇',
    stack: [
      {
        platform: 'Speaker Deck',
      },
    ],
  },
  {
    pageUrl:
      'https://speakerdeck.com/shumpei0111/fu-shu-ren-deno-da-gui-mo-saitoyi-zhi-notekunituku',
    title: '複数人での大規模サイト移植のテクニック',
    genre: '登壇',
    description:
      '2023.9.9 2023年9月に開催した「ジャムスタックチョットデキル!!」での登壇。',
    stack: [
      {
        platform: 'Speaker Deck',
      },
    ],
  },
  {
    pageUrl:
      'https://speakerdeck.com/shumpei0111/ge-ren-kai-fa-zhe-ha-jamstackdeburoguwoshu-kou-wordpressmoiikedojamstackmone',
    title:
      '個人開発者は Jamstackでブログを書こう！〜WordPressもいいけどJamstackもね〜',
    genre: '登壇',
    description: 'LTイベント「ジャムスタックチョットデキル」にて登壇。',
    stack: [
      {
        platform: 'Speaker Deck',
      },
    ],
  },
];
