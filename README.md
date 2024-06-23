# Dot Image Converter

このReactアプリケーションは、画像をドット絵に変換するツールです。解像度やドットサイズを調整することができ、変換した画像をダウンロードできます。

## デモ

![デモ画像](https://cdn.discordapp.com/attachments/1007207278497251341/1254451399400493139/image.png?ex=66798a68&is=667838e8&hm=804ec826c515af26a92cf696fa5e833ce3df7986e3a2a0e68a164c48e3e2ff56&)

## プレビューページ

プロジェクトのプレビューページは以下のリンクからアクセスできます：

[https://mintannn.github.io/Dot-Image-Converter2](https://mintannn.github.io/Dot-Image-Converter2)


## 機能

- 画像のアップロード
- 解像度の調整（16x16 〜 256x256）
- ドットサイズの調整（0.1 〜 1）
- 変換した画像のダウンロード

## セットアップ

このプロジェクトをローカル環境で実行するための手順を以下に示します。

### 前提条件

- Node.js (v14以上)
- npm または yarn

### インストール

1. リポジトリをクローンします。

```bash
git clone https://github.com/mintannn/Dot-Image-Converter2.git
cd Dot-Image-Converter2
```

2. 依存関係をインストールします。

```bash
npm install # または yarn install
```

### 実行

開発サーバーを起動します。

```bash
npm start # または yarn start
```

ブラウザで `http://localhost:3000` を開いてアプリケーションを確認できます。

## 使い方

1. 画像をアップロードします。
2. 解像度スライダーを使って解像度を調整します。
3. ドットサイズスライダーを使ってドットサイズを調整します。
4. キャンバスに表示されたドット絵を確認します。
5. 「画像を出力」ボタンをクリックして変換された画像をダウンロードします。

## フォルダ構成

```
Dot-Image-Converter2/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.js
│   │   │   └── slider.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── DotImageConverter.jsx
├── .gitignore
├── package.json
└── README.md
```

## 開発

### コンポーネント

- `Slider`: 解像度やドットサイズを調整するためのスライダーコンポーネント。
- `Button`: 画像を出力するためのボタンコンポーネント。

### 主要なフック

- `useState`: 画像、解像度、ドットサイズの状態を管理。
- `useRef`: キャンバス要素への参照を保持。
- `useEffect`: 画像がアップロードされたときや設定が変更されたときにキャンバスを更新。

### ロジック

- 画像をアップロードし、`FileReader`を使って画像を読み込む。
- `useEffect`内でキャンバスにドット絵を描画。
- 解像度とドットサイズに基づいてキャンバスのピクセルを調整。
- 変換された画像をダウンロード可能にする。

## 参考

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

## ライセンス

このプロジェクトはMITライセンスの下で提供されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。
