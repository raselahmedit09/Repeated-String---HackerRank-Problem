'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    if(s=='a'){
        return n;
    }

    let count = 0,n1 = Math.floor(n/s.length);

    for (var i = 0; i < s.length; i++) {
        if(s.charAt(i) =='a') count+=1;
    }

    count = count*n1;

    for (var i = 0; i < n -(n1*s.length); i++) {
        if(s.charAt(i) =='a') count+=1;
        if(count== n) break;
    }

    return count;




}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
