console.log("this is tutoria 53");
//default value of greetText
//default argument
function greet(name,greetText="Greetings from JavaScript"){
    console.log(greetText+" "+name);
    console.log(name+" is a good boy");
}

function sum(a,b,c){
    let d=a+b+c;
    return d;
    //if we write something after return then it is not executed
    //unreachable code
    // console.log("cghvghfg");
}
let name ="harry";
let name1="Shubham";
let name2 = "Rohan";
let name3 ="sagar";
greetText="Good Morning";
greet(name);
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
// let returnval = greet(name3);
let returnVal=sum(1,2,3);
console.log(returnVal);