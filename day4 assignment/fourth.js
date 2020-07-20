
//QUESTION 1

for(let i=1;i<=100;i++)
{
    (i%3==0)?console.log('fizz')
    :(i%5==0)?console.log('buzz')
    :(i%3==0 && i%5==0)?console.log('fizzbuzz')
    :console.log(i);

}

//QUESTION 2

const student ={
    name:"Helsinki",
    age:24,
    projects:
    {
        diceGame:"Two player dice game using JavaScript",
    }
}
//destructuring objects
const{name,age,projects:{diceGame}}=student;
console.log(name,age,diceGame);

//QUESTION 3

let shoppingList=['DairyMilk','Milk','Flour','Toothpaste','Pedigree','Pepper'];
let shoppingBasket=[...shoppingList];
shoppingBasket.push('Paper','Pencils','Paint');
console.log(shoppingList);
console.log(shoppingBasket)


//QUESTION 4

for(;1;)
{
let choice=prompt("enter choice(1-addition,2-subtraction,3-multiplication,4-division,5-square root,6-percentage)");
if(choice==1 || choice==2 || choice==3 || choice==4)
{
    var a=prompt('enter first number');
    var b=prompt('enter second number');
}
else if(choice==5 || choice==6)
{
    if(choice==6)
    {
        var d=prompt('select any one-1:percentage to decimal,2:decimal to percentage');
    }
    var c=prompt('enter a number');
}
else if(choice==null)
{
    break;
}

    if(choice==1)
    {
       console.log(+a + +b);
    }
    else if(choice==2)
    {
        console.log(+a - +b);
    } 
    else if(choice==3)
    {
        console.log(+a * +b);
    }
    else if(choice==4)
    {
        console.log(+a / +b);
    }
    else if(choice==5)
    {
        console.log(Math.sqrt(c));
    }
    else if(choice==6)
    {
        if(d==1)
        {
            console.log(+c /100);
        }
        else if(d==2)
        {
            console.log(+c *10);
        }
    }
    else
    {
       console.log('invalid:enter a valid number');
       alert('enter from numbers 1-6');
    }
}

//QUESTION 5

let f=prompt("enter the sales");
if(f>=0 && f<=5000)
{
    console.log(f*0.02);
}
else if(f>=5001 && f<=10000)
{
    console.log(f*0.05);
}
else if(f>=10001 && f<=20000)
{
    console.log(f*0.07);
}
else if(f>20000)
{
    console.log(f*0.1);
}

//QUESTION 6


for(;1;)
{
    let g=prompt("enter a number");
    if(g > 100 || g =='' || g == null)
    {
     console.log(g);
     break;
    }
}

//QUESTION 7

let n=prompt("enter a value-n for getting prime number");
for(let i=2;i<=n;i++)
{
 let count=0;
 for(let j=1;j<=i;j++)
 {
     if(i%j==0)
     {
         count++;
     }
 }
if(count==2)
{
    console.log(i);
}
}

//QUESTION 8

/*function ask(question,yes,no)
{
 if(confirm(question)) yes()
 else no();
}
ask(
    "Do you agree?",
    function yes() 
    {
        alert("You agreed.");
    },
    function no() 
    {
        alert("You cancelled the execution.");
    }
);
*/
//using arrow function
ask=(question,yes,no)=>(confirm(question))? yes(): no();
ask("Do you agree?",yes=()=>alert("You agreed,"),no=()=>alert("You cancelled the execution."));
