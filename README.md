# jp-hello-work

A package to search Hello Work in charge of given city or town in Zip code.
Hello Work is an Employment Service Center operated by Japanese government.

## Usage

```javascript
const { HelloWork } = require("jp-hello-work");

const helloWork = HelloWork.byZipCode("6060022");
console.log(helloWork.name); // =>  [ '京都西陣' ]
```

### TypeScript

- [jp-hello-work.d.ts](https://github.com/pachikuriii/jp-hello-work/blob/main/type/jp-hello-work.d.ts)

```typescript
import { HelloWork } from "jp-hello-work";

const helloWork = HelloWork.byZipCode("1920364");
console.log(helloWork.name); // => [ '八王子' ]
```

## Installation

Install with npm:

```
$ npm install jp-hello-work
```

## Access to Hello Work data

| key  | data   | example      | title                                                         |
| ---- | ------ | ------------ | ------------------------------------------------------------- |
| pref | String | '宮崎県'     | Prefecture where the Hello Work is                            |
| city | String | '小林市'     | City the Hello Work controls                                  |
| town | String | '野尻町東麓' | Town the Hello Work controls                                  |
| zip  | String | '8860212'    | Given Zip code                                                |
| name | Array  | [ '小林' ]   | Hello Work name which controls given city or town in Zip code |

## Other

- These data are based on as below.
  https://www.mhlw.go.jp/kouseiroudoushou/shozaiannai/roudoukyoku/index.html
  https://www.post.japanpost.jp/zipcode/dl/kogaki-zip.html

## Lisence

This project is licensed under the MIT License, see the LICENSE.txt file for details
