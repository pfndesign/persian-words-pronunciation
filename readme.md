# `persian-words-pronunciation`
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

list of persian word pronunciations

## Install

[npm][]:

```sh
npm install persian-words-pronunciation
```

## Use
### find word category
```js
var {findwordpronounce} = require('persian-words-pronunciation')

console.log(findwordpronounce("مشهد"));
```

if finding pronunciations was successful will return :

```js
[
  'مَشهَد',
  'مُشهَد',
  'مُشهِد'
]
```
if finding pronunciations is not successful will return "undefined"

## API

### `anObjectOfFindWordPronounce`

`array.<string>` — list of word pronunciations.

## CLI

Install the CLI globally:

```sh
npm i -g persian-words-pronunciation
```

Usage: persianpronunciation <word> persian word to get pronunciations

```sh
persianpronunciation استان
```

Use `--help` for more info :

```sh
Options:
      --version  Show version number                                   [boolean]
  -r, --raw      return raw data                                       [boolean]
      --help     Show help                                             [boolean]
```
## Related

*   [`an-array-of-persian-words`](https://github.com/pfndesign/an-array-of-persian-words)
*   [`similar-persian-words`](https://github.com/pfndesign/similar-persian-words)
*   [`persian-words-category`](https://github.com/pfndesign/persian-words-category)

[MIT][license] © [Peyman farahmand][author]

<!-- Definition -->

[downloads-badge]: https://img.shields.io/npm/dm/persian-words-pronunciation.svg

[downloads]: https://www.npmjs.com/package/persian-words-pronunciation

[size-badge]: https://img.shields.io/bundlephobia/minzip/persian-words-pronunciation.svg

[size]: https://bundlephobia.com/result?p=persian-words-pronunciation

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://www.linkedin.com/in/pfndesign