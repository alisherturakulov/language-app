
//const fs = require('fs');
//const readline = require('readline');



let kanjiList = [];//to hold kanji chars in order
const meaningsList = []; //holds the meanings; indices correspond to the kanji 
const readingsList = []; //stored "on;kun"



fetch("https://raw.githubusercontent.com/alisherturakulov/language-app/refs/heads/main/kanji.csv")
    .then(response => response.text())
    .then(data => {
       // console.log(data)
        const dataLines = data.split('\n');
        dataLines[dataLines.length-1] = " "; //to avoid empty last index
        //console.log(dataLines)
        
        // for(let i = 0; i< dataLines.length; i++){
        //     dataLines[i] = dataLines[i].split(',');
        // }
        //dataLines = dataLines.map(ln => ln.split(','));
        for (let i = 0; i<dataLines.length; i++){
            const row=  dataLines[i].split(',');
            console.log(row);
            if(!isNaN(row[0])){
                kanjiList.push(row[1]);
                meaningsList.push(row[7]);
                readingsList.push(row[8]+";"+row[9]);
            }
            
        }
        console.log(kanjiList);
        console.log(meaningsList);
        console.log(readingsList);
        
    })
    .catch(error => console.error('Error fetching file: ', error));
console.log(kanjiList);
//readCSV("kanji.csv", kanjiList, meaningsList, readingsList);
//console.log(kanji);

// let currentLetterIndex = 0;
// changeLetterCard(currentLetterIndex, kanjiList, meaningsList, readingsList);

// document.getElementById("prev").addEventListener("click", (event) => {
//     currentLetterIndex = Math.max(0, currentLetterIndex - 1);
//     changeLetterCard(currentLetterIndex, kanjiList, meaningsList, readingsList);
// });

// document.getElementById("next").addEventListener("click", (event) => {
//     currentLetterIndex = Math.min(kanjiList.length, currentLetterIndex+1);
//     changeLetterCard(currentLetterIndex, kanji, meaningsList, readingsList);
// });

// /*
//  function readCSV(fname, kanji, meanings, readings){
//     const fileStream = fs.createReadStream(fname);

//     const rl = readline.createInterface({
//         input: fileStream,
//         crlfDelay: Infinity
//     });

//     let tableLine = [];//csv file line
    
//   //  for await (const line of rl){
//   //      tableLine = line.split(',');     
//   //  }

    
//     rl.on('line', (line) => {
//         tableLine = line.split(',');
//         if(!isNaN(tableLine[0])){
//             kanji.push(tableLine[1]);
//             meanings.push(tableLine[7]);
//             readings.push(tableLine[8]+";"+tableLine[9]);
//         }//else{
//           //  console.log("header: " + tableLine[0]);//should be index
//       //  }
//     });
    

//     rl.on('close', () => {
//         //console.log(kanji); //works
//     });

// }*/



// //function readIntoTable(fileName){}

// /**
//  * changes the letter card displayed
//  * @param {integer} letterIndex index of kanjiList
//  * @throws Error when letter isNaN
//  */
// function changeLetterCard(letterIndex, kanji, meanings, readings){
//     if(isNaN(letterIndex) || letterIndex < 0 || letterIndex >= kanji.length){
//        // throw new Error("invalid letter index");
//     }
//     const letter = document.getElementById("kanjiCharacter");
//     const meaning = document.getElementById("meaning");
//     const onReading = document.getElementById("onReading");
//     const kunReading= document.getElementById("kunReading");
    
//     letter.innerText = kanji[letterIndex];
//     meaning.innerText = meanings[letterIndex];
   
//     onReading.innerText = readings[letterIndex].substring(0, readings[letterIndex].indexOf(';'));
//     kunReading.innerText = readings[letterIndex].substring(readings[letterIndex].indexOf(';')+1);
//     console.log("current index: " + letterIndex)
// }

