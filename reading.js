const fs = require('fs');
const readline = require('readline');

const kanji = [];//to hold kanji chars in order
const meanings = []; //holds the meanings; indices correspond to the kanji 
const readings = []; //stored "on;kun"



async function readCSV(fname, kanji, meanings, readings,){
    const fileStream = fs.createReadStream(fname);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let tableLine = ;//csv file line
    
  /*  for await (const line of rl){
        tableLine = line.split(',');
       
    }*/

    rl.once('line');//skip the header

    rl.on('line', (line) => {
        tableLine = line.split(',');
        kanji.push(tableLine[1]);
        meanings.push(tableLine[7]);
        readings.push(tableLine[8]+";"tableLine[9]);
    });

    rl.on('close', () => {
        console.log(results); 
    });

}

function readIntoTable(fileName){

}

/**
 * changes the letter card displayed
 * @param {integer} letter index of kanjiList
 * @see changeReadings helper function
 */
function changeLetterDisplayed(letter){

}

/** changes the readings on the card
 * @see changeLetterDisplayed used by
 * changes the readings displayed on a card
 * @param {integer} letter the index corresponding to the letter
 */
function changeReadings(letter ){

}