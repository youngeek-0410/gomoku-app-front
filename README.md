# 五目並べ フロントページ
[![Github issues](https://img.shields.io/github/issues/Ichigo-dev/gomoku-app-front)](https://github.com/Ichigo-dev/gomoku-app-front/issues)
[![Github stars](https://img.shields.io/github/stars/Ichigo-dev/gomoku-app-front)](https://github.com/Ichigo-dev/gomoku-app-front/stargazers)
[![Github top language](https://img.shields.io/github/languages/top/Ichigo-dev/gomoku-app-front)](https://github.com/Ichigo-dev/gomoku-app-front/)
[![Github license](https://img.shields.io/github/license/Ichigo-dev/gomoku-app-front)](https://github.com/Ichigo-dev/gomoku-app/)

# 五目並べゲーム

webブラウザで五目並べが1人、もしくは2人でプレイできる。
1人モードの場合はCPUと戦うことができる。


また、サービスページでは常に過去の対戦履歴が見れるようになっている。



<img width="1669" alt="Screen Shot 2021-09-22 at 23 40 52" src="https://user-images.githubusercontent.com/66525257/134365611-231c2d25-f826-4c94-9f6d-a965c43d1b40.png">

<img width="1667" alt="Screen Shot 2021-09-22 at 23 43 15" src="https://user-images.githubusercontent.com/66525257/134365631-a78e0de6-d5dd-406c-857c-69f94641c1f7.png">





## 概要
このサービスは3つのサーバから構成される(学校のサーバ1台、ラズパイ2台)

### メインAPI

本リポジトリにあたる。
3つのリポジトリのうち、DBに関する責務をもつ。

言語はJavaで構成され、WebフレームワークとしてServletを利用して、
ユーザ、対戦履歴をDBから取得しフロントに返す。

また、APIのプロトタイプとしてRailsで実装したものもある。

### フロントアプリ
[リポジトリ](https://github.com/igsr5/gomoku-app-front)

本サービスのフロント部分の実装をしている。

やっていることとしては
- ホーム画面、ユーザ登録画面、ゲーム画面、ゲーム終了画面の実装
- 五目並べのロジックの実装(e.g.  ユーザ判断、勝利判定)
- ユーザ、対戦結果をメインAPIに投げて保存する
- 対戦履歴を表示する

など

言語はTypeScriptでフロントフレームワークとしてReactを採用している。

### CPU Bot
[リポジトリ](https://github.com/m-star18/Gomoku-api)

1人モードでのCPU機能の実装をしている。
具体的には、Webサーバを立て、

現在の五目盤の状況を受け取り、それに合わせた次の一手を判断し、レスポンスとして返すような

GETのエンドポイントを実装している。

言語はPythonでWebフレームワークとしてFlaskを採用している。

## Development
```
$ sudo apt-get install nodejs
$ npm i -g yarn
$ yarn install
# +@ .env.sampleをコピーして.envを作成し、依存リポジトリで`dockcer-compose up`すること
$ yarn start
```
## Dependent repository
- [五目並べCPU](https://github.com/m-star18/Gomoku-api)
- [サーバAPI](https://github.com/Ichigo-dev/gomoku-app-server)
