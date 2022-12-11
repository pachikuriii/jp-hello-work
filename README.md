# jp-hello-work

A package to search Hello Work(Employment Service Center operated by Japanese government) in charge of specified area by just inputting zipcode.

## Usage

```
const { HelloWork } = require("jp-hello-work");

const helloWork = HelloWork.byZipcode("6060022");
console.log(helloWork.name); // =>  [ '京都西陣' ]
```

### TypeScript

- [jp-hello-work.d.ts](https://github.com/pachikuriii/jp-hello-work/blob/main/type/jp-hello-work.d.ts)

```
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

## Other

These data are based on as below.
https://www.mhlw.go.jp/kouseiroudoushou/shozaiannai/roudoukyoku/index.html
https://www.post.japanpost.jp/zipcode/dl/kogaki-zip.html

The MIT License (MIT)
Copyright (c) 2022 Saya Takahashi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

```

```
