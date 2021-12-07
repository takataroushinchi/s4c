# 構成、スタイル

## as

|as *required|type|default|
|---|---|---|
|text|[type="text"]|<|
|number|[type="number"]| |
|search|[type="search"]| |
|date|[type="date"]| |
|time|[type="time"]| |

## invalid

|invalid|class|default|
|---|---|---|
|false|.c-Input|<|
|true|.c-Input.is-invalid| `.is-invalid` 付与で、 `.c-Input__feedback` のエラー表示 |

## disabled

|disabled|attribute|default|
|---|---|---|
|false|.c-Input|<|
|true|.c-Input[disabled]| `disabled` 属性付与で、非活性 |
