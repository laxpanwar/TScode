var names = ["John","lalallal","Smith","Doe"];
    console.log(names[3]);
    console.log(names[2]);

    //using generic array:
let emNames: Array<string> = ["John", "lalallal", "Smith", "Doe"];
let emIds:Array<number>=[101,102,103,104];
let emInfor:Array<any> = [1, "Laxmi", true, null];

//multidimensional array:
let values: (string | number)[]= ["Tom",100, "Laxmi",200];
let val: Array<string|boolean>= ["tom", false];

//frist array declaratiom amd initalise:

let users:Array<string>;
users = ["laxmi","tester"];

let employees: Array<string> = ["tom","laxmi", "ravi"];
// iterate the array: use for loop:

//1. index based loop
for(let i=0; i<employees.length; i++){
    console.log(employees[i]);
}

//2. for in loop
for(let e in employees){
    console.log(employees[e]);
}

for(let e in employees){
    console.log(e + ":" +employees[e]); // employees with the indx 
}