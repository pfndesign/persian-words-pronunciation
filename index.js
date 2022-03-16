const fs = require('fs');
module.exports = { findwordpronounce: findWordPronounce };
function findWordPronounce(word) {
    //read word list
    let words = JSON.parse(fs.readFileSync('./library/words.json').toString());
    //get word id
    let worddata = Object.entries(words).filter(([key, value]) => value === word);
    //check to see if word exists
    if (typeof worddata[0] != 'undefined') {
        words = null; //free memory
        //load pronunciation map
        let pronunciations = JSON.parse(fs.readFileSync('./library/pronunciation.json').toString());
        let wordpronunciations = [];

        worddata.map((item) => {
            if (typeof pronunciations[item[0]] != 'undefined')
                wordpronunciations = [...wordpronunciations, ...pronunciations[item[0]]];
        });
        wordpronunciations = [...new Set(wordpronunciations)];
        pronunciations = null; //free memory
        //pronunciation exists
        if (typeof wordpronunciations != 'undefined') {
            return wordpronunciations;
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
};