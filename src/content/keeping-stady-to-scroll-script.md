---
id: 41
title: スクロール処理の勉強を続けている
date: 2023-10-15 02:05:49
tags: [プログラミング学習, javascript, gsap]
---

## 進捗

作例を10個ほど作った。

こそっと勉強するのもあれなので、[それ用のページ](/dev/)を用意した。

ほとんどは `gsap` を使っているが、

気になっていた `lenis` を使ったり、`framer motion` を使ったりなどしている。

少しだけ gsap に慣れてきたが、とにかく CSS の影響を受けやすいので、

PC/モバイルで結果が全然変わってくるのが辛いなぁと思った。

特に横幅を意識したりすると辛くなる。

あと、`gsap` と `React` の組み合わせが微妙なので、

とにかく `useLayoutEffect` など使って、DOMがマウントされきってから gsap で操作するようにしている。

そんでもって、今のところ `useRef` は使わずに `querySelector` など使ったり、

普通に CSS クラス名やらdata属性を指定するなどして gsap インスタンスに渡すようにしたほうがなんかうまく動いている気がしている。

その辺の知識が乏しいと感じている今日この頃。

とりあえず gsap の公式の [スターター](https://stackblitz.com/@GreenSockLearning/collections) に Next.js 用のテンプレートがあるので、

それを見ながら。

gsap はドキュメントを始め、チュートリアルも充実しているので始めやすい。

最初は自分で決める種類が多くて面食らうことも多いけど、インターフェースもシンプルだなと最近少しわかってきた。

引き続きやっていきたい。
