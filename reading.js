
//const fs = require('fs');//filestream
//const readline = require('readline');//for file reading

//let dataLines = []; 
let kanjiList = [];//to hold kanji chars in order
let meaningsList = []; //holds the meanings; indices correspond to the kanji 
let readingsList = []; //stored "on;kun"
let currentLetterIndex  = 0;


readCSV(kanjiList, meaningsList, readingsList).then(() => {
    
    console.log(kanjiList);

    document.getElementById('prev').addEventListener('click', (event) => {
        
        currentLetterIndex = Math.max(0, currentLetterIndex-1);
        changeLetterCard(currentLetterIndex, kanjiList, meaningsList, readingsList);
    });

    document.getElementById("next").addEventListener("click", (event) => {
        currentLetterIndex = Math.min(kanjiList.length-1, currentLetterIndex+1);
        changeLetterCard(currentLetterIndex, kanjiList, meaningsList, readingsList);
    });
});

async function readCSV(kanji, meanings, readings){
    
    fetch("https://raw.githubusercontent.com/alisherturakulov/language-app/refs/heads/main/kanji.csv")//csv from wikipedia
    .then(response => response.text())
    .then((data) => {
        //console.log(data);
        

        
        const lists = readCSVString(data);
        
        console.log(lists);
        kanjiList = lists.kanji;
        meaningsList =lists.meanings;
        readingsList = lists.readings;
    })
    .catch(error => console.error('Error fetching file: ', error));
}


//readCSV("kanji.csv", kanjiList, meaningsList, readingsList);
//readCSVString(dataLines, kanjiList, meaningsList, readingsList);


//console.log(dataLines);



/**
 * reads and processes csv file data
 * @param {string} data holding the string represenation of the file
 */
 function readCSVString(data){
    const kanji = [];
    const meanings = [];
    const readings = [];
    let dataLines = [];
    dataLines = data.split('\n');
        dataLines[dataLines.length-1] = " "; //to avoid empty last index
        //console.log(dataLines)
        
        // for(let i = 0; i< dataLines.length; i++){
        //     dataLines[i] = dataLines[i].split(',');
        // }
        //dataLines = dataLines.map(ln => ln.split(','));
        for (let i = 0; i<dataLines.length; i++){
            const row=  dataLines[i].split(',');
            //console.log(row);
            if(!isNaN(row[0])){
                kanji.push(row[1]);
                meanings.push(row[7]);
                readings.push(row[8]+";"+row[9]);
            }
            
        }
       
        return {
            kanji,
            meanings,
            readings
        };
       
}




//  /**
//   * reads fname and initializes global variables holding different data for generating cards
//   * @param {string} fname 
//   * @param {string[]} kanji 
//   * @param {string[]} meanings 
//   * @param {string[]} readings 
//   */
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

// }



//function readIntoTable(fileName){}

/**
 * changes the letter card displayed
 * @param {integer} letterIndex index of kanjiList
 * @param {string[]} kanji
 * @param {string[]} meanings
 * @param {string[]} readings
 * @throws Error when letter is NaN
 */
function changeLetterCard(letterIndex, kanji, meanings, readings){
    if(isNaN(letterIndex) || letterIndex < 0 || letterIndex >= kanji.length){
       throw new Error("invalid letter index");
    }

    const num = document.getElementById("number");
    const letter = document.getElementById("kanjiCharacter");
    const meaning = document.getElementById("meaning");
    const onReading = document.getElementById("onReading");
    const kunReading= document.getElementById("kunReading");
    
    num.innerText = letterIndex;
    letter.innerText = kanji[letterIndex];
    meaning.innerText = meanings[letterIndex];
    
    onReading.innerText = readings[letterIndex].substring(0, readings[letterIndex].indexOf(';'));
    kunReading.innerText = readings[letterIndex].substring(readings[letterIndex].indexOf(';')+1);
    console.log("current index: " + letterIndex)
}

