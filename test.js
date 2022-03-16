var test = require('tape')
var {
  findwordpronounce
} = require('.')
var fs = require('fs')
test('findwordpronounce', function (t) {
  let wordcheck = findwordpronounce('شهر');
  t.ok(typeof findwordpronounce === 'function', 'should be an function')
  t.ok(typeof findwordpronounce('test') === 'undefined', 'should have 0 english words')
  t.ok(typeof wordcheck[0] === 'string', 'array data should be string')
  t.ok(Array.isArray(wordcheck), 'should be a array')
  t.ok(wordcheck.length > 0, 'should have more than 0 pronounce')
  t.end()
})
test('data', function (t) {
  t.ok(fs.existsSync('./library/words.json'), 'words should exist')
  let words = JSON.parse(fs.readFileSync('./library/words.json').toString());
  t.ok(Object.entries(words).length > 343000, 'words should have more than 343000 words')
  t.ok(fs.existsSync('./library/pronunciation.json'), 'pronunciation should exist')
  let pronunciation = JSON.parse(fs.readFileSync('./library/pronunciation.json').toString());
  t.ok(Object.entries(pronunciation).length > 343000, 'pronunciation should have more than 343000 words')
  t.end()
})