// Typescript is a statically typed language
let fName: string; 
fName= "AYYYYEEEE Laxmi" ;
// fName = 40; // so here we can see the error cause of the different data types
// that is why it is statically typed language.

//Type annotations--> num:number... name:string
let num: number ; // This feature is called type annotations
num: 90;
 
let n: number = 50;
let lname: string ="peter";

// Type Inference
let test = "typescript"; //type =string --CT -- Type Inference
let billAmount =6000; // type= num -- will be  decided in CT-- Type Inference
let isActive : boolean = true;

// null and undefined ??? --- yes
let city: null = null;
let country : undefined= undefined;

// any type: any
let value: any = 800;
value = "QA";
value = true;

// void: --- we use with the function that does not return any value
function printHello(): void{// return type : by default void --CT it will be aray
    console.log("hello"); // void and return cannot be together --- make sense 
}

function getNumber():number{ // return type : number
    return 123;
    /// return "test"; --- will give error

}

function getANyValue():any{ //RT will be anything--CT-- String
    return "testing"; // 
}


function addition(a: number, b: number): number {
    return a + b;
}

 addition(10,20);