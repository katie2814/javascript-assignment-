//QUESTION 1

let a=prompt("enter a positive number");
var b=[];
for(var i=0;i<a;i++)
{
    b[i]=prompt("enter a number");
}
let odd=b.filter(j=>j%2!=0).map(l=>l**3);
console.log(odd);

//QUESTION 2

class User
{
    constructor(name,age,email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0;
        this.courses=[];
    }
    login()
    {
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout()
    {
        console.log(`${this.name} has logged out`);
        return this;
    }
}

class Moderator extends User
{
   addcoins(user)
   {
       user.coins=this.coins++;
       console.log(user);
   }
   removecoins(user)
   {
       user.coins=this.coins--;
       console.log(user);
   }
}

class Admin extends Moderator
{
    addcourse(user,course)
    {
        user.courses.push(course);
        console.log(user);
    }
    removecourse(user,course)
    {
        user.courses.pop(course);
        console.log(user);
    }
}
let x=new User('Akash',21,'akashfelix@gmail.com')
let y=new User('Aarthy',21,'aarthykumar@gmail.com')
let z=new Moderator('Katie',24,'katieqwinsa@gmail.com')
let u=new Admin('Percy',28,'percyjackson@gmail.com')
let users=[x,y,z,u];

u.addcourse(x,'Animation');
u.addcourse(y,'3d printing');
z.addcoins(x);
z.addcoins(y);
z.addcoins(x);
z.removecoins(x);
u.addcourse(x,'Graphics');
u.removecourse(x,'Animation');

users.forEach(s=>
{
    console.log(s);
})


//QUESTION 3

async function todos()
{

        let k=await fetch('https://jsonplaceholder.typicode.com/todos');
        let n=await k.json();
        console.log(n);
}
todos();