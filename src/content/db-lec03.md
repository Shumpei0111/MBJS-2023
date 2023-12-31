---
id: 23
title: カレンダー機能のDB
date: 2020-03-21 13:11:48
tags: データベース
---

# テーブルを小分けにする

## スケジュールデータテーブル

- id
- 日付From
- 日付To
- 用件
- 場所

## 参加者テーブル

- id
- スケジュールid
- ユーザid

## 結果テーブル

スケジュールに参加して、どんな内容だったかを記録する使い方

例：打ち合わせ

- id
- スケジュールid
- 参加者id
- 結果内容

## 参加可否テーブル

- id
- スケジュールid
- ユーザid
- 可否フラグ

---

**各テーブルは最低限の情報を持っておくことで柔軟に対応できる**

上記の例

- スケジュールidがわかれば、参加者idがとってこれる
- スケジュールidと参加者idがわかれば、参加した人間と結果がわかる

---

# 繰り返しの要件の場合

毎日、毎週、毎月、毎年、決まった日、決まった曜日などを登録させるときのテーブル構造は...

## スケジュールデータ（改）

- id
- 親id <= 追加！
- ユーザid
- 日付

## 登録の仕方

| id  | 親id | ユーザid | 日付 | 用件        |
| --- | ---- | -------- | ---- | ----------- |
| 1   | null | A        | 3/20 | ---         |
| 2   | null | B        | 3/21 | ---         |
| 3   | null | A        | 3/24 | ---         |
| 4   | 1    | A        | 4/20 | 1の繰り返し |
| 5   | 1    | A        | 5/20 | 1の繰り返し |
| 6   | 1    | A        | 6/20 | 1の繰り返し |
