
//Longest Word
function longestWord(wordList) {

  wordLength = []

  for (let i = 0; i < wordList.length; i++) {

    let removeSpace = wordList[i].replace(/\s/g, '');
    let num = removeSpace.length

    wordLength.push(num)
  }  
  console.log(Math.max.apply(Math, wordLength))
}

let wordLength = ['tiny', 'bigger', 'biggest', 'pneumonoultramicroscopicsilicovolcanoconiosis']//yeah that's a real word  
longestWord(wordLength)
//should be o(n)

//Unique Characters

function uniqueLetters(str) {
  let input = new Set();
  for (let i = 0; i < str.length; i++) {
    if (input.has(str[i])) {
      return false;
    }
    input.add(str[i]);
  }
  return true;
}
console.log(uniqueLetters('monday'));
console.log(uniqueLetters('moonday'));
//O(n)
