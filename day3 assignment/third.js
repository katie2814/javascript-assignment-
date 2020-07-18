//QUESTION 1
 let a=function()
 {
     let b=prompt("Enter a number");
     if(b%2==0)
     {
         console.log('The number entered is '+b+ ' and Number is even');
     }
     else
     {
        console.log('The number entered is '+b+' and Number is odd');
     }
 }
 a()

 //QUESTION 2

 let c=prompt("enter your OS");
 let f=c.trim().split(" ");
 console.log('The OS name is '+f[0]+' and version is '+f[1]);
 
 //QUESTION 3
//using conditions

 let d=prompt("enter marks");
 if(d>=0 && d<50)
 {
     console.log('Marks are '+d+' and grade is F');
 }
 else if(d>=50 && d<70)
 {
    console.log('Marks are '+d+' and grade is D');
 }
 else if(d>=70 && d<80)
 {
    console.log('Marks are '+d+' and grade is C');
 }
 else if(d>=80 && d<90)
 {
    console.log('Marks are '+d+' and grade is B');
 }
 else if(d>=90 && d<=100)
 {
    console.log('Marks are '+d+' and grade is A');
 }

 //using switch

 switch (true) {
     case d>=90:
        console.log('Marks are '+d+' and grade is A');   
        break;
     case d>=80:
        console.log('Marks are '+d+' and grade is B');
        break;
     case d>=70:
        console.log('Marks are '+d+' and grade is C');
        break;
     case d>=50:
        console.log('Marks are '+d+' and grade is D');
        break;
     case d<50:
        console.log('Marks are '+d+' and grade is F');
        break;                        
     default:
        console.log('Marks are invalid');
        break;
 }

 //ternary operator

      (d>=0 && d<50)?console.log('Marks are '+d+' and grade is F')
    :(d>=50 && d<70)?console.log('Marks are '+d+' and grade is D')
    :(d>=70 && d<80)?console.log('Marks are '+d+' and grade is C')
    :(d>=80 && d<90)?console.log('Marks are '+d+' and grade is B')
    :(d>=90 && d<=100)?console.log('Marks are '+d+' and grade is A')
    :console.log("Marks are invalid");
    