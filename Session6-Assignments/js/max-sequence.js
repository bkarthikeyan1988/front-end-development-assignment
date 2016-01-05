function findMaxSequence(array) { 'use strict';
   var previousVal = Number.MIN_VALUE;
   var currentSequence = [], maxSequence = currentSequence;
 
   for ( var val of array ) {
      if ( previousVal < val ) {
         // Expand sequence and check whether new length is longest
         currentSequence.push(val);
         if ( maxSequence.length < currentSequence.length ) {
            maxSequence = currentSequence;
         }
      } else {
         currentSequence = [val];
      }
      previousVal = val;
   }

   return maxSequence.length <= 1 ? 'No' : `[ ${maxSequence.join(', ')} ]`;
}
var val1=findMaxSequence([3,2,3,4,2,2,4]),
val2=findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]),
val3=findMaxSequence([3,2,1]);
document.getElementById("value1").innerHTML = val1;
document.getElementById("value2").innerHTML = val2
document.getElementById("value3").innerHTML = val3;