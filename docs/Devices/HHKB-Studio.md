---
id: device-hhkb-studio
title: HHKB Studio
tags:
  - device
  - keyboard
  - hhkb
---
# HHKB Studio

製品ページ：https://happyhackingkb.com/jp/products/studio/

## 所感

pros
- 全体的に製品として完成度が高い。
- トラックポイントが付与されたことで、右手をそのままにポインタを操作することが可能。
- 右上のインジケータによる視覚のフィードバックが良い。

cons
- G,H,Bのキーについては切り欠きが必要になるので、手持ちのキーキャップに全て揃えることができない。
- ジェスチャーパットの有益な使い道が思いつかない。
- Bluetooth接続が弱い。
  - 大人数がいるオフィスといった、2.4GHz帯が汚れている場所でBluetooth接続した場合に、トラックポイントの動作が遅延する。 
  - この場合は有線接続することで回避できる。

### キーキャップ

![DiffSAKeyCap](/img/devices/studio/diff-to-sa-keycaps.png)

SAキーキャップと比べるとこれぐらい高さが違う。大体DSAと同じぐらいの高さ。

#### トラックポイント周辺のキー 'G, H, B'

![KeyCap](/img/devices/studio/keycap.png)

トラックポイントと干渉するのを防ぐために切り欠きが入っている。  
手持ちのキーキャップ資産が生かせない。

### キースイッチ

![Switch](/img/devices/studio/studio-switch.png)

Kailh に特注のオリジナルMX互換スイッチ。ルブ済みのリニアスイッチとなっている。  

ボックススイッチのような円形の壁？があるためか、これによってキーキャップに触れた時にガタつかないようになっている。
これによりProfessionalシリーズよりも剛性が高く感じる。

### トラックポイント

純正の交換パーツが３つ同梱されているが、ThinkPad用のトラックポイントのドームキャップに換装することができるので自分は交換してしまった。

カーソルスピードは３段階で調整可能。  

BT接続時、2.4GHz帯が汚れている環境だと遅延して使い物にならないので、有線接続が必須。

### ジェスチャーパット

ジェスチャースピードは3段階で調整可能。  

ジェスチャーはスライド時に設定したショートカットが連続して実行されるため、実用的なショートカットはスクロール操作か、システムの音量ボリュームぐらいしか思いつかない。

今は下記のジェスチャーを割り当てている

- 左サイド：音量のボリューム調節
- 左下　　：MacOSのSpaceの切り替え
- 右下　　：Raycastによるウィンドウサイズ調整
- 右サイド：マウス上下スクロール

連続実行ではなく、一回だけ実行されるようにFWが改修されると良くなるかもしれない。

## HHKB Professional HYBRID Type-S との比較しての所感

重量があるので持ち運ぼうという気にはならないが、デザイン会社がデザインしたことで完成度の高い高級自作キーボードになっていると思う。 

- 打鍵感
  - キーキャップに触れた時のガタ付きが無くなっている。
  - ルブ済みのリニアスイッチのようなスイッチになった。ボディ剛性とこのスイッチにより打鍵感はStudioのほうが好み。
- キーキャップ
  - 静電容量無接点方式だとあまり選択肢がなかったが、MX互換になったことによって好きなものをつけれるようになったのは大きい。
    - G,B,H キーは除く。
- トラックポイント
  - マウスに手を伸ばさなくてもカーソル操作ができるのは慣れるととても便利。
  - 複数の端末間を切り替えて操作するようなケースにおいては、Studioの接続だけ切り替えればキーボード・マウスが一式切り替わるので地味にこの点はよかった。
- ジェスチャーパット
  - 使っていないので、メーカーがユースケースをアピールしてほしい。。。

何より、BT接続を切替えた時に、右上のインジケータによる視覚フィードバック追加されたので、どこに接続しているのかがわかるようになったのが地味に便利。

## Trouble

英語配列用のFirmwareが B2.00 で出荷されており、以下の状態になっていた。

1. Bluetooth接続時のトラックポイント/マウスの誤作動
2. Happy Hacking Keyboard Studio キーマップ変更ツール v1.0.0 では、旧版と判定されたFWの書き込みができない。

### BT接続時のトラックポイント/マウスの誤作動の症状

BT接続時、特に2.4GHz帯が汚れていない場所でも、ある程度継続してポインタを動かし続けると、ポインタが意図しない挙動をする。

例：ずっと上を入力し続けているのに突然マウスクリックが行われた後に、横に移動し続ける。

### 解決方法

Happy Hacking Keyboard Studio キーマップ変更ツール v.1.0.1 がリリースされたことにより、B0.06 のFWが書き込めるようになった。
B0.06のFWを適用したことで、上記症状は改善した。
