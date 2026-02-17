let circle = document.querySelector(".smallCircle");
Num = 1;
circle.onclick =()=>{

Num++;
if(Num == 1){

circle.style.left ="-10px";

}else if(Num == 2){
circle.style.left ="8px";


}else {

circle.style.left ="40px";
Num = 0;

}
}
let calc = {
outputvalue: document.querySelector(".output p"),
sign:"",
firstvalue:"",
secondvalue:"",
outputText: (num)=>{
 calc.outputvalue.innerHTML += num.innerText;
},
 operators: (sign)=>{

calc.sign = sign.innerText;
calc.firstvalue = calc.outputvalue.innerText;
calc.outputvalue.innerHTML = "";
 },
get_result:()=>{

  calc.secondvalue = calc.outputvalue.innerText;
  switch(calc.sign) {
case "+":
calc.outputvalue.innerText = +calc.firstvalue + +calc.secondvalue;
break;
case "-":
calc.outputvalue.innerText = +calc.firstvalue - +calc.secondvalue;
break;
case "/":
calc.outputvalue.innerText = +calc.firstvalue / +calc.secondvalue;
break;
case "*":
calc.outputvalue.innerText = +calc.firstvalue * +calc.secondvalue;
break;
  }
},
  
   del:()=>{
   calc.outputvalue.innerText = calc.outputvalue.innerText.slice(0,-1);

   },
   reset:()=>{
calc.outputvalue.innerText = "";
calc.firstvalue  = 0;
calc.secondvalue = 0;
   } 

}



