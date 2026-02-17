/*************************JavaScript Material**************************/

/* The places that can write js in it */

/* 1-inline as <h1 onclick="js code.."> </h1>*/
/* 2-internal as <script> js code.. </script>*/
/* 3-external as file.js and link this file <script src=""></script>*/
/*######################################################################*/

/************* The difference Between Document-window-console ***********/

/* 1-Document it mean that file html*/
/* 2-Window it mean that the browser*/
/* 3-Console it mean that the print in console */
/*######################################################################*/

/****************** How to find the bugs in your code *********************/

/* you can find any bug in your code from console */
/*######################################################################*/

/******************************** DataTypes *****************************/

/* a)Number b)String c)Boolean d)Null e)object f)undefind   
   typeof() function : this function to know you the type of data
/*######################################################################*/

/******************************** Variable ******************************/

/* you can make variable by three roads
 
>>1-Var
>>2-Let
>>3-Const

// if you create id in HTML its id will be variable in global can use it

>>>>>>>>>>>>>>>>> The differnce betwwen var-let-const <<<<<<<<<<<<<<<
Redecleare( var:yes , let:no , const:no )
access before decleare( var:undifined , let:error , cons:error )
variable scope drama(var:yes , let:no , const:no )
var x = 10;
var x = 11;    <<<<here the code run

let x = 10;
let x = 11;    <<<<here the code not run

^^^^^Fix this code^^^^^

let x = 10;
x = 11;       <<<<<here the code run
/*######################################################################*/

/*************************** concatenation **************************/

//  To merage between two variables as 
   
let name = 'ahmed';
let age = 20;
console.log('My name is' + name + 'and my age is' + age); 
/*>>but it's not the best<<*/

console.log(`My name is ${name} 'and my age is' +${age}`);
/*>>>this is the best <<<<<*/
/*######################################################################*/

/******************************* Math ********************************/


let x = 5
let y = 10
console.log(x+y);  /* >>> reuslt=15 */

/*#############Pre Increment & Post Increment#############*/
let h = 10
x+=1; // x++;
console.log(h);
/*################################*/
let z = 10;
console.log(++z);  /* >>>result = 11; */
console.log(z++);  /* >>>result = 10; */

/*######################################################################*/

/*************************** String to Number ****************************/

/* 1-console.log(+'5') >>>result is number 5 not string (unary operator)
   2-console.log(number('5')) >>>result is number 5 not string
   3-console.log(parseint('5 ahmed')) >>result= 5 and deleted ahmed
   4-console.log(parsefloat('5.5 ahmed')) >>result= 5.5 and deleted ahmed
  ###################### Number Object ######################    */
   console.log(Number.MAX_VALUE);
   console.log(Number.MIN_VALUE);
   console.log(Number.MIN_SAFE_INTEGER);
   console.log(Number.MAX_SAFE_INTEGER);
   console.log(Number.isInteger());
/*************************** Type Coercion ****************************/
x = "10";
y = 20;
z = true
console.log(x + y + z); // 1020true to fix it do (+x + y + z)

/*************************** Math object ****************************/

// console.log(Math.) /*there are methods in math and property*/
document.write(Math.E);//this is property
document.write(Math.PI); //this is property
document.write(Math.abs(-10)); // this method to transfere any negative number to positive
document.write(Math.sqrt(9)); // this method to get you the root of number
document.write(Math.pow(3,3)); //this mehthod get number and power number
document.write(Math.round(10.4)); //this method to get nearly integer number forever min or max
document.write(Math.ceil(10.1)); //this method to get nearly upper integer number
document.write(Math.floor(10.9)); //this method to get nearly bottom integer number
document.write(Math.min(1,5,3,0)); //this method to get min number of this number
document.write(Math.max(1,5,3,0)); //this method to get max number of this number
document.write(Math.trunc(99.9)); //this method to remove floating poiny num
/*######################################################################*/

/*************************** Number to String ****************************/
 let f = 10;
   1-console.log(String(f))
   2-console.log(x.toString())
   3-console.log((10).toString())
   4-console.log(10..toString())

/*######################################################################*/



/*************************** String Function ****************************/

let name1 = '  ahmed khaled  ';
console.log(name1.repeat(4));
console.log(name1.length);
console.log(name1[0]);
console.log(name1.charAt(0));
console.log(name1.indexOf('a'));
console.log(name1.lastIndexOf('a',8)); //here take from you thing you need to search and from where
console.log(name1.slice(0,13)); //here take from you start and end
console.log(name1.split(' ')); //here take from you split where
console.log(name1.trim(name1)); // this to remove spaces
/*############################a##########################################*/

/*********************** Slice-Substring-Substr *********************/

let name2= 'ahmed khaled'
console.log(name2.repeat(3))
console.log(name2.slice()) //here take from you start and end not include
console.log(name2.substring())// like slice but not take negative num as it
console.log(name2.substr()) // here the end is include
//######################################################################//

/*********************** String Search *********************/

let title= 'hello world';
console.log(title.includes('l',0)) //take from you thing you need to search it and from where and return true or false
console.log(title.startsWith('h',0)) //as includes
console.log(title.endsWith('o',0))  //as includes
//######################################################################//

/*********************** Array *********************/

let namee =['ahmed','ali','mohamed','khaled' , 1 , 2];
console.log(namee[namee.length-1]); // result = khaled 

/*********************** Nested Array *********************/

let objects=[1,2,3,[4,5,6,[7,8,9]]];
console.log(objects[3][2]); //result = 6
console.log(objects[3][3][2]); //result = 9

/****************** add and remove elements from Array ******************/

let object = ['ahmed','ali','mohamed'];
object.push('shimaa'); //to add element at the end of array
console.log(object);
console.log(object[3]); //result = shimaa
object.unshift('mazen') //to add element at the start of array
console.log(object); 
console.log(object[0]); //result = mazen
object.shift(); //to remove element at the start of array and keep it
console.log(object[0]);  //result = ali
object.pop();   //to remove element at the end of array and keep it
console.log(object[2]); //result = mohamed

/****************** Splice and slice Array ******************/



//this function take 1)start 2)num of elements to remove it 3)add other element (optional)

list.slice(0,2) //take start and end only and not effect on the fact array
console.log(list.slice(0,2)) //result ['ahmed','mohamed']

list.splice(0,2); //take start and end only and effect on the fact array

/****************** Search in Array ******************/

let array = ['ahmed','mohamed','ali','mohamed','ahmed'];
console.log(array.indexOf('ahmed')) //result = 0
console.log(array.indexOf('ahmed',-1)) //result = 4
console.log(array.lastIndexOf('ahmed')) //result = 4
console.log(array.lastIndexOf('ahmed',3)) //result = 0
console.log(array.includes('ahmed')) //result = True
console.log(array.includes('ali',3)) //result = False
console.log(array.includes('ali',0)) //result = True

/****************** Sort and Reverse in Array ******************/

let arr=['ahmed','calem','basel'];
console.log(arr.reverse()); //here it reverse this array
console.log(arr.sort());   //here it arrange this array as alphapet

/****************** concat and join in Array ******************/

let arr1 = ['ahmed','khaled','mahrous'];
let arr2 = ['ziad','hany','mahmoud'];
console.log(arr1.concat(arr2,'mohamed')) //this method make concatenation between arrays
console.log(arr1.join(' ')) //this method to transfere array into string
//######################################################################//

/****************** Compare between two string ******************/
let ask = prompt();    //This function take input from user
let email = "amahrous176@gmail.com";
console.log(ask==email);   //here if input equal to email variable retutn true
//////////////////////////////////////////////////////////////////////////////
let ask1 = prompt();  
let email1 = "amahrous176@gmail.com";
console.log(ask1.toLowerCase().trim()==email1); //here if user write as email but by capital or any spaces return true also
//////////////////////////////////////////////////////////////////////////////
console.log(5 =='5')  // here two equals compare between two values return true
console.log(5 === '5') //here three equals compare between two values and datatypes return false
console.log(4 != 3) //here return true this mean that 4 not equal 3
console.log(5=='5' && '4'==='4') // here this symbol meann that And
console.log(5=='5' || '3'==='4') //here this symbol mean that Or
//######################################################################//

/************************ If Conditions ************************/
let char = prompt()
if(char == 'y' || char=='Y'){
   console.log('Agreed')
}else if(char=='N' || char=='n'){
   console.log('Not agreed')
}else{
   console.log('invalid value')
}
///////////////////////////////////////////////////////////////////////////
let char2 = prompt('x:');
char2=='y' || char2==='Y'?
    console.log('Agreed')
:char2=='n' || char2== 'N'?
  console.log('Not agreed')
  :console.log('invaild value');
////////////////////////////////////////////////////////////////////////////

/************************ Switch Conditions ************************/

let role = prompt('What is your role? ');
switch(role){
   case 'admin':
      console.log('create,update,delete');
      break;    //this function to break here this code and not read anything after this code
      case 'moderator':
         console.log('create,upadate');
         break;
         case 'editor':
            console.log('update')
            break;
         default:
            console.log('hello, user');
}
//######################################################################//

/******************************* For Loop ********************************/
let nam = 'ahmed';
for(var i =0; i<3; i++){  // 1-Start 2-condition 3-Steps
   console.log(nam);
}
/////////////////////////////
for(var i =10; i>=0; i--){
   console.log(`ahmed ${i}`);
 }
/////////////////////////////
let names = ['ahmed','ali','mahrous'];
for(var i = 0; i<3; i++){
   console.log(names[i]);
}
/////////////////////////////
var nams = ['ahmed','mohamed','ali'];
for(var i =0; i<nams.length; i++){
   console.log(nams[i]);
}
/////////////////////////////
let reverse = ['ahmed','khaled','mahrous'];
for(var i=2; i>=0; i--){
   console.log(reverse[i]);
}
//////////////////////////////

/****************************** Nested Loop *******************************/

let cars = ['Honda','BMW','Marsedes'];
let models = [2020,2021,2022];
let colors = ['black','yellow','red']
for(var i =0; i<3; i++){
 console.log(`Cars: ${cars[i]}`);
 for(var j=0; j<3; j++){
  console.log(`Model: ${models[j]}`);
 }for(var q=0; q<3; q++){
    console.log(`colors ${colors[q]}`)
 }
 console.log('____________')
}
/////////////////////////////////////////////
for(var i =0; i<3; i++){
   console.log('i: '+i);
   for(var j=0; j<3; j++){
     console.log('j: '+j);
   }for(var q=0; q<3; q++){
     console.log('q: '+q);
   }
   console.log("______");

 }

/****************************** Break continue *******************************/

let users = ['ali','ahmed','khaled',1,'mahrous',2,3];
for(var i=0; i<users.length; i++){
   if(typeof users[i] == 'number'){
      continue;    //to Exclusion this condition
   }
   console.log(users[i]);
}
////////////////////////////////////////////////
let user = ['ali','ahmed','khlaed','mahrous','mohamed','moaaz'];
for(var i =0; i<user.length; i++){
   if(user[i]=='mohamed'){
      continue;
   }
   console.log(user[i])
}
/////////////////////////////////////////////////
let usser = ['ali','ahmed','khlaed','mahrous','mohamed','moaaz'];
for(var i =0; i<usser.length; i++){
   console.log(usser[i]);
   if(usser[i]=='mohamed'){
      break; //to stop when see mohamed not complete
   } 
}

/****************************** While Loop *******************************/

var i =0; //start
while(i<3){ // condition
   console.log('Hello,World');
   i++; //steps
}

/****************************** Do While Loop *******************************/

let i =0;
do{        //here do at min this code until condition is false    
console.log('Hello,World');
}while(i<3)
//######################################################################//

/****************************** Function *******************************/

function calcAge(age){ //to make function use this word 'function' after it name of function and in (Parameter)
   let result = age*365;
   console.log(result);
}
calcAge(18);
//////////////////////////////////////////
function pro(price,fees,ads){
   let product = price + fees;
   let result = product +ads;
   console.log(result)
}
pro(30,5,5);
//////////////////////////////////////////

/****************************** Return Function *******************************/

function disscount(price,percent){
   return price*(100-percent)/100;
}
let dis= disscount(100,80);
console.log(dis)
//////////////////////////////////
function disscount(price,percent){
 price =prompt('Price');
 percent = prompt('Percent');
 return price*(100-percent)/100;
 }
 console.log(disscount());
 //////////////////////////////////
 function age(age){
   return age *365
 }
 let agee = age(20)
 console.log(agee*24);
 //////////////////////////////////
//######################################################################//

/************************* Hoisting variable *************************/

console.log(hos);
var hos = 10;     //this code return undefined not error bec js see it as:
                  // var hos;
                  // console.log(hos);
                  // hos = 10;            << here this mean that hoisting in var

console.log(hos);   //this code return error
let hos = 10;       // here not hoisting bec js see it as it is

/************************* Hoisting Function *************************/

console.log(hello()); //this code return 1 bec js see it as:
                      //function hello(){return 1;}
                      //console.log(hello());
function hello(){     //this is declereation function bec it start by function
return 1;   
}
//////////////////////////////////////////
console.log(hello());     //here this code return error bec js see it as it is
let hello = function hello(){ //this is Experation function Not decleration
   return 1;
}
//######################################################################//

/************************* Scope & self invoked *************************/

//Global variable
let i =0;
if(true){
   console.log(i);   // here print i without proplem bec i here is global variable
}
///////////////////////////////////////
function hello(){}
// for(){}               // All
// if(){}                // this name is block of code
// while(){}             // And var variable in it is global 
// do{}while()           // bec var do hoisting expect function

//Example:
for(var i=0; i<10; i++){
}
console.log(i); //here print i = 10 bec var do hoisting and i will global variable

function hello(){
   var i =0;
} console.log(i); //here print error bec i here not global

//Local Variable

for(let i =0; i<10; i++){
}console.log(i);  //here print error bec i is local not global bec let not do hoisting

///////////////////////////////////////////////

/************* How to invoked self function *****************/

(function (){console.log("hello")})

();    

/******************************** Arguments **********************************/

function hello(name="User"){  //this is default value to display if no argument in function write
   console.log(`hello ${n}`);
}
hello("ahmed")  //here ahmed this is argument
//////////////////////////////////////////////////
function calcAge(age=0){
   return age*365;
   console.log(age);
}
calcAge()
///////////////////////////////////////////////////
function number(...num){ //... here mean that array (num) as it is
   let result =0;
   for(var i =0; i<num.length; i++){
  result+=num[i];
   }
   console.log(result)
}
number(4,5,6) //this values is arguments 

/******************************** Arrow Function **********************************/

let c = () =>{
   console.log("hello");
}
//######################################################################//

/******************************** Object  **********************************/

// object latirals
let car = {
   name:"BMW",model:2020,color:"red",
   hello:function(){
      return "Hello, World";
   }
}

// object constructors
let username = function(){
   this.firstname = "ahmed"
   this.lastname = "mahrous"
}
let newuser = new username()
console.log(username.firstname)
console.log(username.lastname)


console.log(car.name);
console.log(car['name']); //this other method to access on property in method
console.log(car.model);
console.log(car.color);
console.log(car.hello());

/******************************** Nested Object **********************************/

let useer ={       //here the biggiest object
FirstName:'Ahmed',               
LastName:'Mahrous',
email:'amahrous176@gmail.com',
age:20,
skills:['HTML','CSS','JS','Python','C','C++','PHP'],
active:true,
phoneNumber:{        //here other object inside the biggiest object 
 num1:'01093052354', 
 num2:'01013438605',
 num3:'01092217786'
},
address:{      //here other object inside the biggiest object 
add1:'Cairo',add2:'Almatraya'
},
isActive:function(){
   if(useer.active === true){
      return "User is Active";
   }else{
      return "Sorry User is Not Active"
   }
}
}
console.log(useer.FirstName);
console.log(useer['FirstName']);
console.log(useer.phoneNumber.num1); //here to access on useer object and on PhoneNumber object 
console.log(useer['phoneNumber']['num1'])//here to access on useer object and on PhoneNumber object by other method
console.log(useer.address.add1);
console.log(useer['address']['add1']);
console.log(useer.isActive()); //here if i pass true in active property return User is Acrive
console.log(useer['isActive']()) //by other method


/******************************** Create Object **********************************/
    
let userr ={}
userr.name = 'Ahmed';       // here to add property in object 
userr.address = 'Cairo';
user['age']=20;
console.log(userr['name']);  
userr.hello = function(age){  // here to add Method in object 
   return age*365;
}
console.log(userr.hello(1));    
console.log(userr['hello'](1));
////////////////////////////////
let obj = new Object();   // here to transfere variable to object
obj.titl = 'HI!';
console.log(obj.titl);

let obj = new Object({
  add:'Cairo',active:true // here to add property & Method in object
})
console.log(obj.active);

/******************************** This Key Word **********************************/

let test = { name:'Ahmed',
          get_name: function(){
            return this.name;      //Here this mean that test name || this it indicate to object
          }
}
console.log(get_name()); // here result =>> Ahmed
///////////////////////////////
console.log(this); //here the defult indicate object is Window
this.alert() // as window.alert

/******************************** Use strict **********************************/
x = 10;
console.log(x);          // here print 10 and not a proplem if you not write let or var
/////////////////////
"use strict"
x = 10;
console.log(x);      // here return error due to use strict mode bec not use let or var
//////////////////////
function calc(num1,num1){
return num1+num1;
}
console.log(calc(2,2));  //here print 4 and no proplem 
///////////////////////
"use strict"
function calc(num1,num1){
   return num1+num1;
   }
console.log(calc(2,2)); //here return error due to strict mode and you use two parameters by same name

/******************************** Object Create **********************************/

let user = {
   name:'ahmed',
   calc: function(num1,num2){
       return num1+num2
       }      
}
let user1= Object.create(user); //here to make anew object and add other object inside it 
console.log(user1['name']);
console.log(user1.calc(2,3));
/////////////////////////////
let user2 = Object.create(user);
user2.name = 'mahrous'    // here to edit on name property in main object 
console.log(user2.name)   // result =>> mahrous
/////////////////////////////
let user3 = Object.create(user,{name:{value:'sinio'}}); //other syntacs to edit on property 
console.log(user3.name); // result =>>> sinio 
/////////////////////////////
let user = {
   name:'ahmed',
   get_name: function(){
       return `Hello ${user.name}`; 
       }  
}  
let user4 = Object.create(user);
user4.name = 'mahrous';
console.log(user4.get_name()); // here print hello ahmed Not hello mahrous
//////////////////////////////
let user = {
   name:'ahmed',
   get_name: function(){
       return `Hello ${this.name}`; // here this mean that object i invoked it
       }  
}  
let user4 = Object.create(user);
user4.name = 'mahrous';
console.log(user4.get_name()); // here print hello mahrous due to this

/******************************** object assign **********************************/

let a1 = {num1:10};
let a2 = {num2:20};
let a3 = {num3:30};
let a4 = Object.assign(a1,a2,a3,a={num0:5}); // here to merge objects in one object and create object olso
a4.num0=8; // here to edit on property
a4.num4=40; // here to create new property
console.log(a4.num4);
//######################################################################//

/******************************** Sellect Element in JS **********************************/
//>>>>> BY Id <<<<<<//
let id = document.getElementById('hello'); //here select on Element its id is hello
id.style.color='red';                      //here edit on Element
//>>>>> BY Class <<<<<<//
let clas = document.getElementsByClassName('hello'); //here select all Element its class is hello
clas.length; // but you can't edit on it bec its array consist of all elemnt have this class
/////////////////////
let classs = document.getElementsByClassName('hello')[0]; //here select Element one have this class
classs.style.color='red'; //here fix this proplem and edit on element [0]
//>>>>> BY Tag Name <<<<<<//
let tag = document.getElementsByTagName('h1'); // here select all tag h1 
tag.length;                                   // here you can't edit on h1 bec its array now
/////////////////////
let tagg = document.getElementsByTagName('h1')[0];//here select first tag h1 
tagg.style.color='red'; //here fix this proplem and edit on tag h1 [0]
//>>>>> Query Selector <<<<<<//
let query = document.querySelector('h1'); //here query select first tag h1 it saw it
query.style.color='blue';                // here edit on First Tag h1 that it saw it
///////////////////////////
let queryy = document.querySelectorAll('h1') // here select all tag h1 
queryy.style.color='red' //here edit on all tag h1 
//>>>>> body <<<<<<//
let body = document.body; //to select body
body.style.background = 'red' // to edit on body
//>>>>> title <<<<<<//
let tittle = document.title; //to select title of page
tittle = 'hy' // to edit on title
//>>>>> images <<<<<<//
let image = document.images; //here select on all images in page
image.length;                //here can't edit on all images
///////////////////////
let img = document.images[0]; //select the first image in page
img.style.width='100px'       //edit on image
img.src='here the source you need to change it'
img.alt='here the alt you need to change it'
//>>>>> Links <<<<<<//
let link = document.links; //here select all links in page
console.log(link.length);  //here can't edit on all links
/////////////////////////
link = document.links[0]; //select the first link in page
link.href('here href you need to change it'); //edit on link as href
//>>>>> Form <<<<<<//
let form = document.forms; //here select all Forms in page
form.length;               //here can't edit on all Forms
/////////////////////////
form = document.forms[0];   //select the first Form in page
form.style.background='red' //edit on the First Form
//>>>>> Attributes <<<<<<//
let atr = document.querySelector('h2');
console.log(atr.hasAttributes());      // if h2 has attributes return true
console.log(atr.hasAttribute('src')); //if src attribute is in h2 return true
console.log(atr.attributes);          // display all atrributes in h2 tag
console.log(atr.attributes[0]);       // display first attribute in h2 tag
atr.setAttribute('href','src'); //change value in href attribute into other value or create it
atr.removeAttribute('src'); //to remove attribute in h2 tag

/******************************** inner & outer in HTML **********************************/

let conteiner = document.getElementsByClassName('container')[0];
console.log(container.innerHTML); //here print all elements inside div tag
console.log(container.outerHTML); //here print div tag by all elements inside it
container.innerHTML = '<p>ahmed</p>' //here change all elements inside div
container.outerHTML = '<p>ahmed</p>' //here remove div and instead of it other element
container.innerHTML += '<p>ali</p>'  //here to add <p/> inside div without remove elemnts
container.outerHTML += '<p>ali</p>'  //here to add <p/> outside div 
container.innerText = 'ahmed mahrous' //to add text inside div without tags
container.textContent = 'AKSLJAS'    //as innerText
container.outerText = 'ahmed mahrous'//to add text outside div without tags
//######################################################################//

/******************************** Sipling & Parent **********************************/

let element = document.getElementById('second');
console.log(element.previousElementSibling) //this is the element before the element its id second
console.log(element.nextElementSibling) // this is the element after the element its id second
console.log(element.nextSibling) //this is anything after the elemnt its id second
console.log(element.previousSibling)//this is anyhting after the element its id second
//######################################################################//

/******************************** Dom CSS Style **********************************/

let div = document.getElementById('container');
div.innerHTML = '<p>ahmed</p>'
div.style.backgroundColor = 'red' // here take element.style.property as(color,background) = Value
div.style.color = '#fff'
div.style.padding = '10px'
////////////////////////
div.style.cssText = `     
color:#fff;
background-color:red;
padding:10px;
border:10px solid black;
`                               //this is second method to write css in JS
div.style.removeProperty('color'); // here remove the white color property i get it
//////////////////////////
div.style.setProperty('color','red','ipmortant') //here get (property,value,optional as (important))
//######################################################################//

/******************************** Create Element in JS **********************************/

document.body.innerHTML = `
<div>
<h1>ahmed</h1>
<h2>khaled</h2>
<p>Full Stack</p>
</div>
`                        // ==>>> here to write Anycode HTML inside Body
////////////////////

div = document.createElement('div'); // Here Create Tag Div
h1 = document.createElement('h1');   // Here Create Tag H1
h2 = document.createElement('h2');   // Here Create Tag H2

let contentH1 = document.createTextNode('hello world') // Here to write text and save it in Var.
let contentH2 = document.createTextNode('hello JS')  // Here to write text and save it in Var.
h1.appendChild(contentH1) // Here to add contentH1 in H1 Tag like it : <h1>Hello World</h1>
h2.appendChild(contentH2) // Here to add contentHs in H2 Tag like it : <h2>Hello World</h2>
div.appendChild(h1)    //Here to add h1 tag in div Tag like it : <div><h1>Hello World</h1></div>
div.appendChild(h2) //Here to add h2 in div Tag like it : <div><h2>Hello JS</h2></div>
console.log(div)
document.body.append(div) // Here to add div tag in body

/******************************** Card Project Pure codeJS **********************************/

let nameee = ['Ahmed','khaled','Mahrous','Mohamed']
let ageee = ['20 years','30 years','40 years','50 years']

let container = document.createElement('div');
console.log(container);
document.body.appendChild(container);

function repeat(names,ages){
    let card = document.createElement('div');
    let name = document.createElement('h5');
    let age = document.createElement('p');
    let img = document.createElement('img')
    let contName = document.createTextNode(names);
    let contAge = document.createTextNode(ages);
    img.src='../../image.jpg'
    name.appendChild(contName);
    age.appendChild(contAge);
    card.appendChild(name);
    card.appendChild(age);
   card.appendChild(img)
    container.appendChild(card);
    container.style.textAlign='center'
    card.style.background='#555'
    card.style.color ='#fff'
    card.style.setProperty('width','200px');
    img.style.setProperty('width','100%')
    card.style.display='inline-block'
    card.style.margin='2px'
    img.style.margin='-3px'
}
for(var i = 0; i<4; i++){
   repeat(nameee[i],ageee[i]);
}
//######################################################################//

/******************************** Events **********************************/

// You can type event in HTML as: <button onclick="here type any code js to accent">Click</button

let btn = document.getElementById('btn');
btn.onclick = function(){      //here the button tag that take btn id after you click on it this code run
   console.log('hello');        
}

btn.onclick =()=>{
   console.log('hello');     //here the button tag that take btn id after you click on it this code run
}

btn.addEventListener('click',function(){ //here like onclick 
   console.log('hello World')
})

//what is the Different bettween onclick and addEventListener?

let btn = document.getElementById('btn');
btn.onclick = function(){      
btn.style.background='blue'          
}
btn.onclick = function(){     
   document.body.style.background='red'       
}

btn.onclick = function(){    //here after click this code only is run due to overwrite
btn.style.color = '#fff'
}      
///////////////////////////////
btn.addEventListener('click',function(){ //here after click all code run
   document.body.style.background = 'red';
})
btn.addEventListener('click',function(){
   btn.style.background = 'blue';
})
btn.addEventListener('click',function(){
   btn.style.color = '#fff';
})
///////////////////////////////
btn.onclick = "text"; //here not do anything but run and not return error 
btn.addEventListener('click',"text") // here return error bec not take a string
///////////////////////////////
btn.onclick = function(){       //here not run this code if you leave your mouse in other place not button
   console.log('hello');
}
btn.onmouseup = function(){  //here run if you click on any place and leave your mouse on button
   console.log('hello');
}
btn.onmousedown = function(){ //here run after you clicl on the button without leave your mouse
   console.log('hello');      
}
btn.onmouseover = function(){  //here run one time after hover your mouse on button without click
   console.log('hello');      
}
btn.onmousemove = function(){ //here run code infinty every you move mouse on button 
   console.log('hello');     
}
let input = document.getElementById('inp')
input.onkeyup = function()  //here run every you write or delete without leave keyboard
{
   console.log('hello')
}
input.onkeydown = function(){ //here run every you write or delete but if you leave keboarad not run
   console.log('hello')
}
input.onfocus = function() //here this code run after focus on input
{
   input.style.border = '2px red solid'
   input.style.outline='none'
}
input.onblur = function() //here this code run after leave input
{
   input.style.border = '1px black solid'
   input.style.outline='none'
}
onload = function(){    //here this code run after reload page
   document.body.style.background='red'
}
onresize = function(){  //here this code run after change width or height of page
   document.body.style.background='black'
}

/******************************** USD to EGP Program **********************************/

let usd = document.createElement('input');
let egp = document.createElement('input');
document.body.appendChild(usd)
document.body.appendChild(egp)
usd.type='Number'
egp.type='Number'
usd.placeholder='USD'
egp.placeholder='EGP'
usd.onkeyup = ()=>{
   egp.value = usd.value*24;
}
egp.onkeyup = ()=>{
    usd.value = egp.value/24;
 }

/******************************** Add-Remove-Toggle Classes **********************************/
 
let text = document.getElementById('title');
text.onclick = ()=>{
   text.classList.add("name");  // here after user click on this element the element get a class (name)
}
text.oncontextmenu = ()=>{
   text.classList.remove("name"); //here after user click on this element the element remove a class (name)
}
text.onclick = ()=>{       
   text.classList.toggle("name"); //here after click one time add and one time remove  
}

/******************************** After-Before-Append **********************************/

let beforeBtn = document.getElementById('before')
let afterBtn = document.getElementById('after')
let insideBtn = document.getElementById('inside')
let pra = document.getElementById('pra')
container = document.getElementById('container')
container.style.background ="#f9004d            "
container.style.height ="50px"
beforeBtn.style.background = "#f9004d"
beforeBtn.style.cursor = "pointer"
insideBtn.style.cursor = "pointer"
afterBtn.style.cursor = "pointer"
beforeBtn.style.color = "#fff"
afterBtn.style.color = "#fff"
insideBtn.style.color = "#fff"
insideBtn.style.fontWeight = "bold"
afterBtn.style.fontWeight = "bold"
beforeBtn.style.fontWeight = "bold"
beforeBtn.style.border = "1px solid red"
afterBtn.style.background = "#f9004d"
afterBtn.style.border = "1px solid red"
insideBtn.style.background = "#f9004d"
insideBtn.style.border = "1px solid red"
document.body.style.background="#555"
pra.style.color='blue'
beforeBtn.addEventListener('click',function(){  //here after click pragragh display before container
    container.before(pra)
})
afterBtn.addEventListener('click',function(){ //here after click pragragh display after container
    container.after(pra)
})
insideBtn.addEventListener('click',function(){ //here after click pragragh display inside container
    container.append(pra)
})

/******************************** Auto Event **********************************/

let input = document.createElement('input');
document.body.appendChild(input);
input.placeholder = 'Introduce your Self Here ..'
 onload = ()=>{
   input.focus()
   input.style.borderRadius = '5px'
   input.style.padding='4px 8px'
   input.style.width='80%'
 }
 input.onblur = ()=>{
 input.style.border = '1px solid black'
 }
//######################################################################//

/******************************** BOM (Browser Object Model)**********************************/
console.log(momo)
var momo = 10;    //here js see it as :  var momo;
                 //                  :  momo = 10;
                //                  :  console.log(momo); due to hoisting

window.console.log(momo) // its the real code bec console in window object
window.document.write('ahmed'); // its the real code bec document in window object
console.log(window.momo) // its the real code bec global variable in window object

/******************************** Scroll **********************************/

document.body.style.width = '2000px'
document.body.style.height = '2000px'
let btn = document.createElement('button');
document.body.appendChild(btn)
btn.innerHTML='â–²'
console.log(btn)
btn.style.background='brown'
btn.style.border='none'
btn.style.padding='7px 8px'
btn.style.borderRadius='50%'
btn.style.cursor='pointer'
document.body.style.background='#555'
btn.style.position='fixed'
btn.style.bottom='10px'
btn.style.right='10px'
btn.style.display='none'
window.onscroll = ()=>{
    if(scrollY >= 500){
        btn.style.display = 'Block'
    }else{
        btn.style.display = 'none'
    }
}
btn.onclick = ()=>{
   scroll({
        top:0,left:0,behavior:"smooth"
    })
}

/******************************** Screen object **********************************/

console.log(screen.availHeight);
console.log(screen.availWidth);
console.log(screen.colorDepth);
console.log(screen.pixelDepth);
console.log(screen.orientation.type);

/******************************** location object **********************************/

// https://www.instagram.com/m_a_h_r_o_u_s/ =>> Href
//https =>> Protocol
//www.instagram.com =>> host
// m_a_h_r_o_u_s/ =>> PathName

console.log(location.href);
location.href = 'https://www.fb.com/' //here go to facebook
console.log(location.host);
console.log(location.pathname);
console.log(location.protocol);
console.log(location.assign('https://fb.com')); //here go to facebook and can back to your data before go
console.log(location.replace('https://fb.com')); // here go to facebook and cant back to your data before go

/******************************** setTimeOut & setInterval **********************************/

let time = setTimeout(()=>{
   console.log('mohamed')},4000) //here after four second this function run
   clearTimeout(time); // here to stop this function and not run 

   var i =0;
let interval = setInterval(()=>{
    console.log("mohamed");            
    i++;
    if(i == 4){        //here after 4 times this function stop
        clearInterval(interval)
    }
},1000)

/******************************** localStorage & sessionStorage **********************************/

localStorage.setItem('Name',"Ahmed"); //here you save data in localStorage and key = name & value = Ahmed
localStorage.clear(); //here to remove all data in locaStorage
localStorage.removeItem('Name'); //here to remove item that key is Name
localStorage.name='mohamed' //here to add key=name & value = mohamed as setItem
console.log(localStorage.getItem('name'))//here get from you key to get this data 
console.log(localStorage.name)           //here get from you key to get this data by other method  
localStorage.length //here to return the length of data in localStorage
localStorage.setItem('age',20); //here take age key as a string and the value olso
console.log(typeof localStorage.age) // return string
localStorage.setItem('skills',['html','css']); //here take skills key as a string and the array value olso
console.log(typeof localStorage.skills); //return string
localStorage.array={ //here take array key as a string and the object value olso
   name:'ahmed',
   age: 26
}
console.log(typeof localStorage.array); //return string

localStorage.setItem('arr',JSON.stringify([1,2,3])); //here to transfere the value to string
console.log(typeof JSON.parse(localStorage.arr) ) //return object bec array its datatype is object

localStorage.obj = JSON.stringify({   //here to transfere the value to string
   name:'ahmed',
   age:20
})
console.log(JSON.parse(localStorage.obj)) //here to return to original value and return object data

//The deference between LocalStorage & SeesionStorage 
let txt = document.createElement('input');
document.body.appendChild(txt);
if(localStorage.length > 0){  // here if there is data run this code 
   txt.value = localStorage.name
}
txt.onkeyup = ()=>{             //here after write anything in input this data save in localStorage Now
    localStorage.name = txt.value;
}                              // after this program if user filled the input and reload page or exit from page and enter again the data is saved


let txt = document.createElement('input');
document.body.appendChild(txt);
if(sessionStorage.length > 0){
   txt.value = sessionStorage.name
}
txt.onkeyup = ()=>{
   sessionStorage.name = txt.value;
}// after this program if user filled the input and reload page the data is saved but if exit from page and enter again the data not saved

/******************************** CRUD (Create,Read,Update,Delete) **********************************/


/******************************** React js **********************************/

//to link react links go to react website and get react CDN links and paste it after title tag
//to write XML in js go to babel website and get CDN link and paste it after title tag

let app = document.createElement('div');
document.body.appendChild(app);

let calc = 2*1011.5;
let element1 = <h1 className="hello">Hello World in {calc}</h1>; //<< here you can print any expertion
let element2 = React.createElement('h1',{className:'hello'},`Hello World in ${calc}`) //here 2nd method 

ReactDOM.render(element2,app); //here take to parameters 1-element need to print it 2-place you need to print it in it
ReactDOM.render(element1,app);

element1 = <h1 className="hello">           
    Hello World in {calc}
<p className="pra" id="hi">Hello World in {calc}</p>
<h2 id="hello">Hello World in {calc}</h2>
</h1>;                                             //here first method

element2 = React.createElement(
    'h1',{className:'hello'},`Hello World in ${calc}`,
    React.createElement('p',{className:'pra' , id:'hi'},`Hello World in ${calc}`),
    React.createElement('h2',{id:'hello'},`Hello World in ${calc}`),

);            //here second method










































































































   



















  

























































                                                                                







   
                                                                              











