//use: node --harmony name.js

#!/user/bin/ env node --harmony
"use strict";

function* makeGenerator (arr) {
    for(var i = 0; i < arr.length; i++) {
        yield(arr[i]);
    }
   // return cosole.log("adios");
}

var iterator = makeGenerator(["hola", "uno", "dos", "tres"]);

var step1 = iterator.next();
var step2 = iterator.next();
var step3 = iterator.next();
var step4 = iterator.next();

