## refactoryExamStaircase

-Problem name : Staircase

- Author : by vatsalchanana

- url: https://www.hackerrank.com/challenges/staircase/problem

- Pseudocode
```

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
```
- How to run the program
  save it or clone it to your local repo then run the program with nodejs following this command
```
 node Staircase.js
```
