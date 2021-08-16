
> このページを開く [https://healthywalk.github.io/microbit-adt7410/](https://healthywalk.github.io/microbit-adt7410/)

## 使用方法

### ``current temperature``

``current temperature`` はI2C接続されたADT7410を使った現在温度を得ます。
I2Cアドレスはデフォルトの72になります。
[](
```blocks
let temperature = 0
basic.forever(function () {
    temperature = ADT7410.measureTemperature()
    basic.showNumber(temperature)
    basic.pause(500)
})
```
)

### ``current temperature I2C=``

``current temperature I2C=`` はI2C接続されたADT7410を使った現在温度を得ます。
I2Cアドレスを渡す必要があります。
<!---
```blocks
let temperature = 0
basic.forever(function () {
    temperature = ADT7410.measureTemperatureI2C(72)
    basic.showNumber(temperature)
    basic.pause(500)
})
```
--->
## 拡張機能として使用

このリポジトリは、MakeCode で **拡張機能** として追加できます。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **新しいプロジェクト** をクリックしてください
* ギアボタンメニューの中にある **拡張機能** をクリックしてください
* **https://github.com/healthywalk/microbit-adt7410** を検索してインポートします。

## このプロジェクトを編集します ![ビルド ステータス バッジ](https://github.com/healthywalk/microbit-adt7410/workflows/MakeCode/badge.svg)

MakeCode でこのリポジトリを編集します。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **読み込む** をクリックし、 **URLから読み込む...** をクリックしてください
* **https://github.com/healthywalk/microbit-adt7410** を貼り付けてインポートをクリックしてください

#### メタデータ (検索、レンダリングに使用)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
