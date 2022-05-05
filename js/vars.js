export{qs,qsA};
export{ASK_CONATAINER,A1,A2,A3,A4,counter,layOut,
 start,timeout,answers,lostTime,passGame,playAgain,
 cheque,haveDollar,welldone,baddone,Dollar,msgDollar,
 page1,page2,page3,page4,page5,page6,
 page7,page8,page9,page10
}   
////////////////////////////////////
function qs(selector, parent = document){
    return parent.querySelector(selector);
}
function qsA(selector, parent = document){
    return [...parent.querySelectorAll(selector)];
}
//////////////////////
const ASK_CONATAINER = qs(".ask").children[0];
const A1 = qs(".A1");
const A2 = qs(".A2");
const A3 = qs(".A3");
const A4 = qs(".A4");
const counter = qs(".timer");
const layOut  = qs(".lay_out");
const start   = qs(".start");
const timeout = 4000;
const answers = qsA("section"); 
const lostTime = "للأسف انتهى الوقت ";
const passGame = "رائع لقد فزت";
const playAgain =  "أعد المسابقة";
const cheque = qs(".cheque");
const haveDollar = qs(".have_dollar");
const msgDollar = qs(".msg_dollar");
const welldone = "ألف مبروك معك";
const baddone  ="ليس معك الا";
const Dollar   = qs(".dollar");
//let clock = "stop";
//let target = 0;
let random = 10 / 3 * Math.random();
let randomPage = ((random % 10)).toFixed(1);
let page1  = parseInt(randomPage.slice(2,6))+ 4 / 2  ;
let page2  = parseInt(randomPage.slice(2,6))+ 9 /9 ;
let page3  = parseInt(randomPage.slice(2,6))+ 4/ 1 ;
let page4  = parseInt(randomPage.slice(2,6))+6/1 ;
let page5  = parseInt(randomPage.slice(2,6))-1 ;
let page6  = parseInt(randomPage.slice(2,6))+ 4 / 2  ;
let page7  = parseInt(randomPage.slice(2,6))+ 9 /9 ;
let page8  = parseInt(randomPage.slice(2,6))+ 4/ 1 ;
let page9  = parseInt(randomPage.slice(2,6))+6/1;
let page10 = parseInt(randomPage.slice(2,6)) -4;
let page;
let stup;
//////////////////////////




