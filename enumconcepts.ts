// Enum: enumeartion: data types: hold the set of constants
// numeric
// string
// heterogeneous

// numeric enum
enum Brower{
    Chrome, // 0
    Firefox=5, // 1
    Safari, 
    Edge // always in incremental order, if we assign value to one of the member, then the next member will be assigned with the next incremental value.
}
console.log(Brower.Chrome); // 0
console.log(Brower.Firefox); 
console.log(Brower.Edge); 