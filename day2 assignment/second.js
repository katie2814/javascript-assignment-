//QUESTION 1

let a =prompt("Type something");
console.log(a);

//QUESTION 2

//Array Methods
let b=['Percy','Annabeth','Jason','piper','frank','Leo','Hazel'];
console.log(b);
b.push('Thalia');//inserts an element at the end
console.log(b);
b.pop('Thalia');//deletes the respective element
console.log(b);
let c=b.unshift('luke');//inserts an element at the starting and prints the length
console.log(b);
console.log(c);
b.shift('luke');//deletes the element at the starting
console.log(b);
b.splice(1,0,'Luke');//inserts or deletes an element depending on the conditions
console.log(b);
let d=b.slice(3);//creates a new array from the index specified in the original array 
console.log(d);

//String Methods

let x='Percy Jackson and the Battle of the Labyrinth';
let l=x.length;//prints out the length of the string
console.log(l);
let y=x.indexOf('a');//prints out the first expression it encounters of the specified expression
console.log(y);
let z=x.lastIndexOf('a');//prints out of the last expression it encounters of the specified expression 
console.log(z);
let g=x.slice(3,12);//prints out the string from the start index to the previous one of the specified last index 
console.log(g);
let h=x.substr(6,7);//prints out the string from the indicated index upto the given length
console.log(h);
let i=x.replace('Battle of the Labyrinth','Last Olympian');//replaces the first expression with the second one
console.log(i);
let o="      Percy Jackson    ";
let p=o.trim();//removes whitespaces from both sides of a string 
console.log(p);

//QUESTION 3

let q=prompt("What is your age?");
if(q>20)
{
    console.log("Can drink");
}
else
{
    console.log("Cannot drink");
}