let bestFriends = ["Josh","Aiden","Jack","James","Ryan","John","Reagan","Monique","Marshalino","Shane"];

console.table(bestFriends);
console.log(bestFriends[bestFriends.length/2]);
console.log(bestFriends[bestFriends.length-1]);


let marks = 93;
// >, >= , <, <=
// &&, ||, !
switch(true) {
  

case (marks <=100 && marks >=90):
console.log("A+");
break;

case (marks <=89 && marks >=80):
    console.log("A")
break;

case (marks <=79 && marks >=70):
    console.log("A-");   
break;

case (marks <=79 && marks >=70):
    console.log("B+");   
break;

case (marks <=69 && marks >=60):
    console.log("B");   
break;

case (marks <=59 && marks >=50):
    console.log("B-");   
break;

case (marks <=49 && marks >=40):
    console.log("C+");   
break;

case (marks <=39 && marks >=30):
    console.log("C");   
break;

case (marks <=29 && marks >=20):
    console.log("C-");   
break;

case (marks <=19 && marks >=10):
    console.log("D");   
break;

case (marks <=9 && marks >=0):
    console.log("F");   
break;

default:
    console.log("Out of range");

}
