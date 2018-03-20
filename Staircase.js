'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the staircase function below.
 */
function staircase(n) {

  for(var i = 0; i < n; i++)
    {
        var s = "";
        for(var j = 0; j < n; j++)
        {
            if(n - i - 2 < j)
            {
                s += "#";
            }
            else
            {
                s += " ";
            }
        }
        console.log(s);
}
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}

