window.onload = function () {
  document.querySelector("h1").style.color = "blue";
};
window.alert("hello from js file");
document.write("<h1>Hello from JS</h1>");
console.log("hello from js");
console.error("'error from js");
console.table({ ahmed: "goo", ali: "mohamed" });
console.log(
  "hello from %cJS %file",
  "color: red; font-size:40px",
  "color:blue; font-size:20px",
);
my_name = "osama";
console.log("hello " + my_name);
console.log("hello" + my_name);
console.log(typeof [10, 15, 17]);
console.log(typeof { name: "osama", age: 20, country: "egypt" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
hello.innerHTML = "option";
document.write("a + b");
let a = "we love";
let b = "javascript";
let c = "and";
let d = "programming";
console.log(a + " " + b + " " + c + " " + d);
console.log(10 + "osama");
console.log(10 % 2);
console.log(10 ** 2);

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "egypt";
let student = true;
if (discount === true) {
  price -= discountAmount + 30;
} else if (country === "egypt") {
  price -= 40;
} else if (country === "ksa") {
  price -= 50;
} else {
  price -= 10;
}

let theName = "osama";
let theGender = "male";
let theAge = 20;
if (theGender === "male") {
  console.log("mr");
} else {
  console.log("mrs");
}
theGender === "male" ? console.log("mr") : console.log("mrs");
let result = theGender === "male" ? "mr" : "mrs";
document.write(result);
let day = 5;
switch (day) {
  case 0:
    console.log("saturday");
    break;
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
}

let myFriends = [10, "ahmed", "ali", "90", 2000, 100, "10", -20, -10];
console.log(myFriends);
console.log(myFriends.sort().reverse());
let myFriends = ["ahmed", "ali", "mohamed", "osama", "sayed"];
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(1, 4));
let zero = 0;
let counter = 3;
let my = ["ahmed", "ali", "mohamed", "osama", "sayed"];
console.log(my);
console.log(my.slice(zero, counter));

for (let index = 0; index < 5; index++) {
  console.log(index);
}
let myFriends = [1, 2, "ahmed", "ali", "mohamed", "osama", "sayed"];
let onlyName = [];

if (typeof myFriends[0] === "string") {
  onlyNames.push(myFriends[0]);
}
let colors = ["red", "green", "black"];
for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "number") {
    continue;
  }
  console.log(products[i]);
}
let products = ["keyboard", "mouse", "pen", "pad", "monitor", "iPhone"];
let colors = ["red", "green", "blue"];
let showcount = 5;
document.write(`<h1>show ${showcount} products</h1>`);
for (let i = 0; i < showcount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p style="color: ${colors[j]}">${colors[j]}</p>`);
  }
  document.write(`</div>`);
}
let products = ["keyboard", "mouse", "pen", "pad", "monitor", "iPhone"];
let index = 0;
while (index < 10) {
  console.log(products[index]);
  index += 1;
}
let myAdmains = ["osama", "ahmed", "ali", "mohamed", "sayed"];
let myEmloyees = [
  "osama",
  "ahmed",
  "ali",
  "mohamed",
  "sayed",
  "samar",
  "ahmed",
];
document.write(`<div>we Have X admins</div>`);

function sayHello(userName) {
  console.log(`Hello ${userName}`);
}
sayHello("osama");

function sayHello(userName, age) {
  if (age < 20) {
    console.log(` App is Not Suitable for you`);
  } else {
    console.log(`Hello ${userName} your age is ${age}`);
  }
}
sayHello("osama", 25);
sayHello("ahmed", 15);
sayHello("ali", 30);
function generate(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    if (i === 15) {
      return `interrupting`;
    }
  }
}
generate(10, 20);

document.getElementById("show").onclick = function () {
  console.log(show);
};
settimeout(function elzero() {
  console.log("Good");
}, 2000);
function sayMessage(fNmae, lName) {
  let message = `hello`;
  //Nasted function
  function concatmsg() {
    message = `${message} ${fName} $ {lName}`;
  }
  concatmsg();
  return message;
}
console.log(sayMessage("osama", "mohamed"));

let user = {
  //properties.
  theName: "osama",
  theAge: 40,
};
methods
  // sayHello: function() {
  .return(`hello`);
// };
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

// let user = {
//   theName: "osama",
//   "country of": "egypt",
// };
// console.log(userName);
// console.log(user["country of"]);
// // let user = {
//   name:"osama",
//   age:39,
//   skills:["html, css, js"],
//   available: false,
//   addresses:{
//     ksa:"gdh",
//     egypt:{
//       one: "cairo",
//     tow: "giza",
//   }
// // }
// // // checkAv: function () {
// //   if (available === true){
// //     return`Free For work`;
// //   }else{
// //     return`Not Free`;
// // }
// }
// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join("|"));
// console.log(user.skills[2]); //Access. with index
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypy.one)

// let user = {};
// console.log(user);
// user.age = 40;
// user["country"] = "egypt"
// user.sayHello = function (){
//   return `hello`;
// }
// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());

let myElement = document.querySelector(js);
console.log (myElement.innerHtml);
console.log(myElement.textContent);
myElement.innerHtml = "text Form <span>main.js</span> File";
myElement.innerHtml = "text Form <span>main.js</span> File";
document.images[0].src = "https://google.com";

let myMainellmeny = document.createElement("div");
let myheading = document.createElement("h2");
let myparagraph = document.createElement("p");

let myheadingtext = document.createTextNode("product title");
let myparagraphtext = document.createTextNode("product description");
let mymainElement.className ='product';
 document.body.appendChild(mymainElement);

 let myBtn = document .getElementById("btn");
 myBtn.oncontextmenu = function () {
  console.log(clicked);
 }


