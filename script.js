function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2
}
function divide(num1,num2){
    if (num2==0){
        return 0;
    }
    return num1/num2;
}
let num1=0;
let num2=0;
let operation='+';

function operate(num1,num2,operator){
    let res;
    switch (operator) {
        case "+":
            res=add(num1,num2);
            break;
        case "-":
            res=subtract(num1,num2);
            break;
        case "*":
            res=multiply(num1,num2);
            break;
        case "/":
            res=divide(num1,num2);
            break;    
        default:
            break;
    }
    return res.toFixed(2)
}
let scval;
function activate(event) {
    const ele = event.target;
    scval = Number(screen.textContent);
    subscreen.textContent=screen.textContent+ele.textContent;
    screen.textContent="";
    blocker();
    num1=scval;
    operation=ele.textContent;
  }
  
  function blocker() {
    op.forEach((ele) => ele.removeEventListener("click", activate));
  }
  
  let op = document.querySelectorAll(".opr");
function unblock(){
    op.forEach((ele) => ele.addEventListener("click", activate));
}
  op.forEach((ele) => ele.addEventListener("click", activate));
function equals(){
    num2= Number(screen.textContent);
    let res=operate(num1,num2,operation);
    console.log(num1,num2,operation);
    screen.textContent=res;
    unblock();
    subscreen.textContent="";
    num1=0;
    num2=0;
    operation="";
}
let eq=document.querySelector(".eq");
eq.addEventListener("click",equals);
let screen=document.querySelector(".screen");
let subscreen=document.querySelector(".subscreen")

let btn=document.querySelectorAll(".num");
btn.forEach((ele)=> ele.addEventListener("click",()=>{
    console.log(screen.textContent.length);
    if (screen.textContent.length<20){
        screen.textContent+=ele.textContent;
        scval=Number(screen.textContent);
    }
    
}))

const clr=document.querySelector(".clear");
const back=document.querySelector(".back");
clr.addEventListener("click",()=>{
    screen.textContent="";
    subscreen.textContent="";
    num1=0;
    num2=0;
    operation="";})