// let accountID = 23940901;
// var accountName = "tashiyaAccount";
// let accountpassword = "1121030";
// mobile="999999999";
// let dom;
// // console.log(accountID);
// accountID = 7653895;  // No error now
// accountName = "hdijoiAccount";
// accountpassword = "83813891";


// // it used when we want to print many item
// console.log([accountID, accountName, accountpassword, mobile]); 
// //  print in form of table
// console.table([accountID, accountName, accountpassword,dom]); 

// // readibility of code is very important

// console.log(3+3); console.log("hello world!");


// // data type starts

// // Number 2 power 53
// // bigint for big value
// // String
// // Boolean
// // null standalone value
// // undefined value is declared but not defined
// // Symbol unique

// //object

// console.log(typeof "tashiya");
// let dev = 12738128398129 ;
// console.log(typeof dev);


// console.log(typeof undefined);// type is undefined
// console.log(typeof null);// type is object


// // conversion

// //"33" => 33
// //"33abc" => NaN;
// //true=> 1
// let score = "hello";
// console.log(typeof(score));
// let valueIn = Number(score);
// console.log(score);

// //*-----------------------------------------conversion-------------------------------------------------------------------------

// //  console.log("1"+2+3)// 123
// //  console.log(1+2+"3")//33

//  console.log(+true);// 1
// //  console.log(true+); not allowed
// console.log(+"");
// // console.log(""+); not allowed



//---------------------------------------------datatype--------------------------------------------------------------------------
// const id = Symbol('123');
// const anotherId =Symbol('123');
// console.log(id==anotherId);
// console.log(id===anotherId);

// var a = 12;
// var b = 12;
// console.log(a===b);

// all non primitive datatype typeof is functions and function return is object function

// let name = "javascript";
//  let version = 5;
//  console.log(`the name is ${name} version is${version}`)

// const gameName = "tashiya";
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt("5"))
// console.log(gameName.length)
// console.log(gameName.slice(-6,4));
// console.log(gameName.substring(0,4));
// trim is used to remove start and end white space in string

// const url = "https://google.com20%google"
// console.log(url.replace('20%','---'))
// console.log(url.includes("google"));
// console.log(url.includes("microsoft"));

// console.log(url.split("-"))
// console.log(gameName.split("--"))



//  let name = "tashiya"
//  console.log(typeof(name))

//  let hi = new String("hello") 
 
// console.log(typeof(hi))


// let vara = "2abcd";
// console.log(typeof(vara));
// let varb = ["2"]
// console.log(typeof varb);

//=========================================================number============================================================

// const score =  400
// console.log(score)

// const balance = new Number(400)
 
//  console.log(balance.toString().length);

//  console.log((balance))

//  console.log(balance.toFixed(2))// fixed
// console.log(balance.toPrecision(2))


// const hunderds = 1000000;
// console.log(hunderds.toLocaleString());
// console.log(hunderds.toLocaleString('en-IN'));

//=====================================================math=====================================================================
// console.log(Math);// it is also a default in javascript
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.8));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,8.3,2,9,0));
// console.log(Math.max(4,8.3,2,9,0));


// console.log(Math.random());// value is from 0 to 1
// console.log((Math.random()*10)+1); 
// console.log()

// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min) // important concept

//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''dates'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// let myDate = new Date()

// console.log(typeof(myDate))

// console.log(myDate);// ambigious output
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2025,2,11)
// console.log(myCreatedDate.toString());

// let myCreatedDate1 = new Date(2025,2,11,12,3)
// console.log(myCreatedDate1.toString());


// let myCreatedDate2 = new Date("2023-01-25");
// console.log(myCreatedDate2.toString());


// let myCreatedDate3 = new Date("01-14-2025")
// console.log(myCreatedDate3.toString());

//+++++++++++++++++++++++++++++++++++++++++ TIME STAMP +++++++++++++++++++++++++++++++++++++
// let myTimestamp = Date.now();
// console.log(myTimestamp);
























//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ array ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const arr =[0,1,2,3,4,5];
// const myHeros = ["spiderman" , "avengers" , "hulk"];
// myHeros.push("batman");
// myHeros.pop();
// myHeros.unshift(1)
// myHeros.shift()
//console.log(arr)
// const result = myHeros.join()// it bind and convert the array into string.
// console.log(typeof(result));
// console.log(result);
 // slice and splice

// const myHeros1 = arr.slice(1,3)
// console.log(myHeros1);
// console.log(arr);

// const myHeros2 = arr.splice(1,3)
// console.log(myHeros2);
// console.log(arr);

// const marvel_heros = ["thor","ironman","spiderman"];
// const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

//  const all_newheroes=marvel_heros.concat(dc_heros);
// console.log(all_newheroes);

// const all_newheroes = console.log(...dc_heros, ...marvel_heros)

// const another_array = [1,2,[7,7,3,9,8[6,1,3]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("tashiya"))
// console.log(Array.from("tashiya"))
// console.log(Array.from({name: "tashiya"}));// intersting

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1,score2,score3));

//++++++++++++++++++++++++++++++++OBJECT++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// two types making 
// literals (object.literal)
// constructor (singleton => object made by constructor (Object.create) )
  
// object literal strats from here

// const sym = Symbol('key');

// const jsUser={
//     name :"tashiya",
//     email:"tashiya@gamil.com",
//     location: "agra",
//     pincode: 282002,
//     123:456,
//     [sym]: "key1"// symbol is written in square bracket
// };

// console.log(jsUser.email);
// console.log(jsUser["pincode"])
// console.log( jsUser[123])

// jsUser.pincode = "230058"

// console.log(jsUser.pincode);
// Object.freeze(jsUser);// for frezzing the  object jsUser
// jsUser.email = "tashiya@google.com"

// console.log(jsUser);

// object using functions

// jsUser.greeting = function(){
//     console.log("hello jsUser")
// } 

// jsUser.greetingtwo = function(){
// //    console.log(`hello js user${this.name}${this.email}`);// this is used here to acees the object elelment
//    console.log(`hello js user${name}`);
   
   
// }
// // console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());

// object constructor strts from here

// const tinderUser = new Object() // output empty object{} // singleton object 
// const tinderUser = { }// non-singleton object
// tinderUser.id = "123abc"
// tinderUser.name = "sammy"
// tinderUser.isLoggedIn = "false"

// console.log(tinderUser);

// const regularUser = {
//     email:"some@google.com",
//     fullname:{
//         userfullName:{
//             firstname:"abc",
//             lastname: "xyz"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullName.firstname);
// console.log(registerUser?.fullname.userfullName.firstname)// used in backend

// const obj1 ={1:"a",2:"b"}
// const obj2 ={3:"c",4:"d"}

// const obj3 ={obj1,obj2}
// console.log(obj3)

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1 ,obj2)

// const obj3 ={...obj1, ...obj2}
// console.log(obj3)

// const user=[
//     {
//         id1:1,
//         gmail1:"t@gmail"
//     },
//     {
//         id2:2,
//         gmail2:"m@gmail"
//     },
//     {
//         id3:3,
//         gmail3:"a@gmail"
//     },
    

// ]
// const tinderUser = {}; // non-singleton object
// tinderUser.id = "123abc";
// tinderUser.name = "sammy";
// tinderUser.isLoggedIn = "false"; 

//=================================DESTRUCTING OF OBJECT====================================================================
// const course = {
//     coursename :"js in hindi",
//     price:"999",
//     courseInstructor : "h.chaudhary"

// }
// const{courseInstructor: anyName}= course;// destructing of value
// console.log(anyName);


// JSON
// [
//     {
//         name: 'man',
//         age: 25
//     }
// ]


//-------------------------------------FUNCTION-------------------------------------------------------------------------------
// function addTwoNumber(num1 , num2){
//     console.log(num1 + num2);
// }
// const result = addTwoNumber(15 , 19)
// console.log("Result:"result);

// function addTwoNumber(num1 , num2){
//         // let result1 = num1
//         // let rewsult2 = num2
//         // return num1 + num2;
//         return num1 + num2;
//     }
//     const result = addTwoNumber(13,5)
//     // console.log("Result:", result);

//  function loginUserMessage(Username){
//     return `${Username} just logged in`
//  }
//  loginUserMessage("hitesh") // we have not given console  value here so it is not printed

// //  console.log(loginUserMessage())

// function loginUserMessage(Username= "sam"){
//   if(Username=== undefined){
//     console.log("undefined")
//   }
  
// return `${Username} just logged in`
//  }
//  console.log(loginUserMessage("tashiya")) 

 // function in depth

//  function  calculateCartPrice(...num1){
//    return num1
//  }
//  console.log(calculateCartPrice(200,500,4004 ,3000))
 

//  function  calculateCartPrice( val1,val2, ...num1){
//   return num1
// }
// console.log(calculateCartPrice(200,500,4004 ,3000))

// const user ={
//   username: "tashiya",
//   price:9999,
// };

// function handleObject(anyobject){
//   console.log(`username is${anyobject.username}and the pricen is${anyobject.price}`)
// }
//  handleObject(user) 1 way 


// handleObject({
//   username:"sammy",       using object 2 way
//   price:399
// })


// const myNewArray = [200,300,400,500]
// function returnSecondValue (getArray){
//   return getArray[2]}

// console.log(returnSecondValue(myNewArray)); 3 way

// console.log(returnSecondValue([800,900,1500])); 4 way


// --------------------------function scope-------------------------------------------------------

// function one(){
//   const username ="tashiya"
//   // console.log("hi")


//   function two(){
//     const website ="youtube"
//     // console.log("djkajk"); 
// }
// // console.log(website);

// two()

// }

// one()

// //============interesting=========================

// // console.log(addnum(5))

// function addnum(num){
//    return num+1
// }
  



// // console.log(addnum())
// const addtwo = function addnum(num){
//   return num+1
// }
// addnum()

// // arrow function



// const user = {
//   username:"tashiya",
//   price:2000,
//   welcomeMessage : function(){
//     // console.log(`${this.username}, welcome to website`)
//     // console.log(this)
//   }
// } 
// user.welcomeMessage()
// // user.username = "sammy"
// // user.welcomeMessage()

// // console.log(this)


// // const chai = function(){
// //   let username = "tashiya"
// //   console.log(this.username) 
// // }

// const chai = ()=> {
//   let username = "tashiya"
//   console.log(this.username) 
// }
// // chai()


//explicit return

// const addnum = (num1, num2)=> {
//   return num1+num2
// }
// console.log(addnum(5,6))

// implicit return

// const addnum = (num1, num2)=>  num1+num2
// console.log(addnum(5,6))

// const addnum = (num1, num2)=>  (num1+num2)
// console.log(addnum(5,6))

 // giving object

//  const addnum = (num1, num2)=>  ({name:"tashiya"})
// console.log(addnum(5,6))




// Immediatly Invoked Function Expression (IIFE)

// (function chai (){
//   //named iife
//   console.log(`DB CONNECTED`)
// }()) ;


// ((name) => {
//   // unnamed iife
//   console.log(` ${name}DB CONNECTED TWO`);
// })("tashiya"); 

//============== execution content==================================very important
//  let month= "march"
// switch (month) {
//   case "january":
//     console.log("jan")
//     break;
//   case "febuary":
//     console.log("feb")
    
//     break;
//   case "march":
//     console.log("marc")
//     break;

//     console.log("none")
//     break;
// }
//=============================================================truthy and falsy=====================================================

// falsy value = false , 0,-0,BigInt 0n,"",null, undefined,NaN
// all other value is truthy.

// truthy value = "0" ,"false"," ",[],{},function(){} 

//false == 0  true
//false=="" true
//0=="" true

// const usernemail = [];
// if(usernemail.length === 0){
//   console.log("array is empty");
// }
// const emptyobj ={}
// if(Object.keys(emptyobj).length===0){
//   console.log("object is empty");
// }

// Nulish Coalescing Operator (??) : null undefined

// let value1;
// // value1 = 5 ?? 10
// value1 = null ?? 10
// // value1 = undefined ?? 20
// console.log(value1)


// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80")

// ======================================loop===================================================
// for(let index=0;index<=10;index++){
//     const element = index;
//     console.log(element)
// }

// for (let i = 0; i<=10; i++) {
//     console.log(`outerloop ${i}`)
//     for (let j = 0; j<=10; j++) {
//         // console.log(`innerloop ${j}`)
//         console.log(``)
    
        
//     }
    
// }


//forof loop

// const arr =[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
    
// }

const arr =[1,2,3,4,5]
for (const num of arr) {
    console.log(arr)
    
}                               

































