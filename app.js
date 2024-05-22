var high=40;
var width=20;
var result= high*width;
console.log(result);
 // lap 1



var cel=40;
var fhr=(cel*9/5)+32;
console.log(fhr);
// lap 2




var hour=1;
var mint=60;
var sec= hour*mint*60;
console.log(sec);
// lap 3




var s="sultan", m="hello";
console.log(m, s);
// lap 4



var result=10.25+3.99+7.15;
var pill=result;
var tip=0.15;
var total=pill*tip;
console.log(total);

//lap 5



var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var x=`The Intro to JavaScript course is${adjective1} . James and Julia are so${adjective2} . I cannot wait to work through the rest of this ${adjective3}  content!`
console.log(x);
//lap 6


var firstName="sultan";
var interest="web";
 var hobby="dance";
 console.log(`Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to _${hobby}.`);

//lap 7


// HOME WORK ***

var title = "Welcom to My JavaScript Lesson".length;
console.log(title);
var title = "Welcom to My JavaScript Lesson".slice(0,13);
console.log(title);
var title = "Welcom to My JavaScript Lesson".toLocaleUpperCase();
console.log(title);
var title = "Welcom to My JavaScript Lesson".toLocaleLowerCase();
console.log(title);
var title = "Welcom to My JavaScript Lesson".replace("Welcom","hello");
console.log(title);
var title = "Welcom to My JavaScript Lesson";
console.log(typeof(title));
var title = "Welcom to My JavaScript Lesson".split("").reverse("").join("");
console.log(title);
//1//


var x=10;
var y=20;
var z=30;
if(x>y && x>z){
    
        console.log("x");
    
}
else  if(y>z && y>x){
   
        console.log("y");
    
}
else{
    console.log("z");
}
console.log(x==z);
//2



if(1900%4===0 && 1900%100 !=0 || 1900%400===0 ){
    console.log("1900 is leap year");
}

else{
    console.log("1900 is not leap year");
}


if(1904%4===0 && 1904%100 !=0 || 1904%400===0 ){
    console.log("1904 is leap year");
}

else{
    console.log("1904 is not leap year");
}

if(2000%4===0 && 2000%100 !=0 || 2000%400===0 ){
    console.log("2000 is leap year");
}

else{
    console.log("2000 is not leap year");
}

if(2004%4===0 && 2004%100 !=0 || 2004%400===0 ){
    console.log("2004 is leap year");
}

else{
    console.log("2004 is not leap year");
}

if(2020%4===0 && 2020%100 !=0 || 2020%400===0 ){
    console.log("2020 is leap year");
}

else{
    console.log("2020 is not leap year");
}


if(2023%4===0 && 2023%100 !=0 || 2023%400===0 ){
    console.log("2023 is leap year");
}

else{
    console.log("2023 is not leap year");
}
//3




var x=8;
if(x%2==0){
    console.log("even number");
}
else{
    console.log("odd number");
}
//4




var height=1.78;
var weight=65;
var BMI= weight / (height*height);
if(BMI<15){
    console.log("very very underweight");
}
else if (BMI>=15 && BMI<16){
    console.log("very underweight");
}
else if(BMI>=16 && BMI<18.5){
    console.log("underweight");
}
else if(BMI>=18.5 && BMI<25){
    console.log("NORMAL");
}
else if(BMI>=25 && BMI<30){
    console.log("pre-obesity");
}
else if(BMI>=30 && BMI<35){
    console.log("obesity class 1");
}
else if(BMI>=35 && BMI<=40){
    console.log("obesity class 2");
}
else {
    console.log("obesity class 3");
}










