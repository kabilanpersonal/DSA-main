/**
 * 
 * You are given a train with N berths (seats).
Berths are numbered from 1 to N.

Births are assigned in a cyclic pattern:

Remainder	Birth Type
1	Lower Birth
2	Middle Birth
3	Upper Birth
4	Lower Birth
5	Middle Birth
6	Upper Birth
7   Side Lower Birth
8   Side Upper Birth
 */

function trainBirth(seatNumber) {
    let remainder = seatNumber % 8 
    if (remainder === 1 || remainder === 4) {
      return "Lower Birth";
    } else if (remainder === 2 || remainder === 5) {
      return "Middle Birth";
    } else if(remainder === 3 || remainder === 6){
      return "Upper Birth";
    }else if (remainder === 7) return "Side Upper Birth"
    else return "Side Lower Birth";
  }
   console.log(trainBirth(31))// Side Upper Birth