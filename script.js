console.log("Hello World!"); 

let mySting= "a2b3c" ;
console.log(mySting) ;

let myNumVar = 123;
console.log(typeof myNumVar) ;

console.log(10 + " eggs");
console.log(10 + 7 + " eggs"); 
console.log (" eggs" + 10 + 7);
// Both conditon have to be ture.
console.log(7>3)&&(5<19);

//One condition must be ture
console.log(10>3)| |(10>12);

// If thhe statement is logical or not 
console.log (!5>3);

function introduction(name, age){
    console.log("Hell0, my name is " + name  + "and I am" + age + "years old")

}
introduction("Yandiel" , 15)

 const hour = new Date ().getHours();
 let greeting = "";

 if (hour<12){
    greeting = "Good morning ";
 }else if (hour<18) {
    greeting = "Good afternoom";
 }else {
    greeting = "Good evening";
 }

 document.getElementById("greeting").innerText = greeting;