// function sayHello(){alert("HelloWorld")}
// document.write('<h1>This my first javascript page</h1>')
// var pi=3.14;
// var person="are you GOD";
// var answer="Yes I am!";
// document.write(pi+"<br>");
// document.write(person+"<br>");
// document.write(answer+"<br>");
// var carname="Welcome";
// document.getElementById("demo").innerHTML=carname;
// var num=10;
// console.log(num);
// console.log(typeof(num));
// num=false;
// console.log(num);
// console.log(typeof(num));
// num="Divya";
// console.log(num);
// console.log(typeof(num));
// num=null;
// console.log(num);
// console.log(typeof(num));
// var name=undefined;
// console.log(num);
// console.log(typeof(num));
// var person={
//     firstName:"John",
//     lastName:"Doe",
//     id:5566,
//     getinfo:function(){
//         return this.firstName+" "+this.lastName;
//     }
// };
// document.getElementById("demo").innerHTML=person.getinfo();
// var person={
//     name:'Ramesh',
//     age:30,
//     isMarried:true,
//     address:{
//         street:'Vinay Kurmar',
//         flatNO:201
//     }
// };
// console.log(person);
// var person2=new Object();
// person2.name='krishankant';
// person2.age=32
// person2.isMarried=true;
// person2.address={};
// person2.address.street="nagar road";
// person2['address']['flatNO']=33;
// console.log(person2);
// var person={
//     name :'Jitendra Chauhan',
//     age:30,
//     isMarried:true,
//     child:'cheeku',
//     getinfo:function(){
//     },
//     address:{
//         street:'Vinay Nagar',
//         flatNO:201
//     }
// }

// console.log(person.name);
// document.write(person.name);
// document.write("<br>")
// function myFunction(){
//     var carName="Volvo";
//     document.getElementByld("demo1").innerHtml=typeof carName +" "+ carName
// }
// myFunction();
// document.getElementByld("demo2").innerHtml=typeof carName
// var locales={
//     europe:function(){
//         var myFriend="Monique";
//         var france=function(){
//             var paris=function(){
//                 console.log(myFriend);
//             };
//             paris();
//         };
//         france();
//     }
// };
// locales.europe();
// function show(){

//     var a='a is a local outer variable';
//     document.write(a+"<br>");
    
//     function disk(){
//         var b="b is a local inner variable";
//         document.write(b+"<br>");
//     }
//     disk();
// }
// show();
// var name="John";
// function first(){
//     var a='Hello';
//     second();
//     var x=a+name;
//     console.log(x)
// }
// function second(){
//     var b='Hi';
//     third();
//     var z=b+name;
//     console.log(z)
// }
// function third(){
//     var c="Hey";
//     var z=c+name;
//     console.log(z)
// }
// first();
var age =20;
if(age>18){
    document.write("<b>You are eligible to cast vote</b>");
}
