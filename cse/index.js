console.log("-----welcome in js-----")
//variables : var,let,const :
document.write("hello world")
let a = 5;
console.log(a)
var b = 5;
console.log(b)
const c = 10;
console.log(c)
a = 9;
b = 5;
//c = 9;
a = "abc";
console.log(a);
if (a === 5) {
    console.log("hello world im if condition");
} else {
    console.log("else condition");
}

//loops: for and while :



const userInput = 10 ;


for ( let i = 0; i < 10 ; i++){
    const tableRow = userInput + "*" + i + " = " + userInput * i ;
    console.log(tableRow) ;
}

    let num = 2;

    let n = 100;
    while (num <= n) {
        console.log(num);
        num += 2;
    }
