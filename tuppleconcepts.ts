//Tuple: fixed size , order matters , can contain duplicate values
//tuple vs array
// array: dynamic : runtime more values can be added
  
let person: [string, number, boolean] = ["Laxmi", 25, true];
console.log(person[0]);
console.log(person[1]);

let data: [string, number][]= [["Laxmi", 25], ["Tom", 30], ["Ravi", 28]];
console.log(data[0][0]);
console.log(data[0][1]);
