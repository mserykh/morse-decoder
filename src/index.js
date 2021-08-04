const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    const binaryWords = getBinaryWords(expr);
    const binaryLetters = getBinaryLetters(binaryWords);
    const morseLetters = convertIntoMorse(binaryLetters);
    const result = getResult(morseLetters);

    return result.join(' ');
}

function getBinaryWords(expr) {
    const result  = expr.split('**********');
    return result;
}

function getBinaryLetters(binaryWords) {
    const result = binaryWords.map(word => {
        return divideByTen(word);
    });
    return result;
}

function convertIntoMorse(binaryLetters) {
    const result = [];
    binaryLetters.forEach(arr => {
        const arrMorsed = arr.map(element => {
            const elementMorsed = element.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
            return elementMorsed;
        });
        result.push(arrMorsed);
    });

    return result;
}

function getResult(morseLetters) {
    const result = [];
    morseLetters.forEach(arr => {
        const arrDecoded = arr.reduce((acc, element) => acc + MORSE_TABLE[element], '');
        result.push(arrDecoded);
    });
    
    return result;
}

function divideByTen(word) {
    const arr = [];
    for (let i = 0; i < word.length; i = i + 10) {
        const bunch = word.slice(i, i + 10);
        arr.push(bunch);
    }
    return arr;
}

module.exports = {
    decode
}