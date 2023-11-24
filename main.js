// 'use strict'

// let a = "Huseynagha";


// function first(){
//     const b = "Salam!"
//     second();



//     function second(){
//         const c= "Heyy!"
//         third();
//         console.log(b);
//     }

// }


// function third(){
//     const d = "Necesen";
//     console.log(a+d);
// }

// first();


// const myFunc = function(){
//     let a = 5;
//     var b = 6;

//     console.log(c);

// }

// myFunc();



// Hoisting

//-function declaration;
//- var variables;
//

// TDZ - temporal dead zone

// myFunc = function(){
//     console.log("Hello");
// }

// let numProducts = 10;


// if(numProducts) {
//     emptyCart();
// }


// function emptyCart(){
//     console.log("All goods deleted");
// }


// this keyword 

// this funksiyanin ozune yox, funksiyanin cagirildigi yere muraciet edir.

// const insan = {
//     name: "Huseynagha",
//     birthDate : "1999",
//     getAge : function() {
//         console.log(this);

//         // let that = this;

//         const innerF = () => {
//             console.log(this);
//         }
//         innerF();
//     }
// }

//apply, call, bind - methods
// console.log(insan.getAge());

// let myDiv = document.querySelector('#select');
// let secondDiv = document.querySelector('#second');


// const makeRed = function(){
//     this.style.backgroundColor = 'red'
// }

// myDiv.addEventListener('click',makeRed);
// secondDiv.addEventListener('click', makeRed);


// function test(){
//     console.log(this);
//     function test2(){
//     console.log(this);

//     }
// test2()
// }

// test();

// var firstName = "Aytekin";

// let testObj = {
//     firstName: "Huseynagha",
//     birthDate: "1999",
//     getName: () => {
//         console.log(this.firstName);
       
//     }
// }




// testObj.getName();


//primitiv ve obyektler 

// let myname = "Mirtalib";

// let secondName = myname; //Mirtalib

// myname = "Huseynagha"; //Huseynagha

// console.log(myname, secondName);

// let a = 5;
// let b = 8;



// console.log(a,b);

// const me = {
//     firstName : "Mirtalib",
//     lastName : "Huseynov",
//     age : 21,
//     friend: ["Qabil", "Qeribeli"]
// }

// const you = JSON.parse(JSON.stringify(me));

// you.age = 25;

// you.friend.push('Ayxan');

// console.log(you);
// console.log(me);

// let firstArr = [1,2,5];
// let secondArr = [...firstArr];

// secondArr.push(6)

// console.log(firstArr ,secondArr);





