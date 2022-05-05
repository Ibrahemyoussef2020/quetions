const ASK_CONATAINER = document.querySelector(".ask").children[0];
const A1 = document.querySelector(".A1");
const A2 = document.querySelector(".A2");
const A3 = document.querySelector(".A3");
const A4 = document.querySelector(".A4");
const counter = document.querySelector(".timer");
const layOut  = document.querySelector(".lay_out");
const start   = document.querySelector(".start");
const timeout = 4000;
const answers = document.querySelectorAll("section"); 
const lostTime = "للأسف انتهى الوقت حاول مرة ثانية";
const passGame = "رائع لقد فزت";
const playAgain =  "أعد المسابقة";
const cheque = document.querySelector(".cheque");
const haveDollar = document.querySelector(".have_dollar");
const msgDollar = document.querySelector(".msg_dollar");
const welldone = "ألف مبروك معك";
const baddone  ="ليس معك الا";
const Dollar   = document.querySelector(".dollar");
let clock = "stop";
let target = 0;
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
const pages = ["./data1.json","./data2.json",
"./data3.json","./data4.json",
"./data5.json","./data3.json",
"./data5.json","./data4.json",
"./data2.json","./data1.json",
]
///////////////////////////////////////
//              start   game         //
///////////////////////////////////////
start.addEventListener("click",()=>{
    layOut.style.display = "none";
    clock = "run";
    cheque.animationName = "";
    counter.innerText = 60;
    Dollar.innerText = "$0"
    
    if(page1 > 1 && page1 < 4) page = page1;
    else if(page2 > 1 && page2 < 10) page = page2;
    else if(page3 > 1 && page3 < 10)page = page3;
    else if(page4 > 1 && page4 < 10)page = page4;
    else if(page5 > 1 && page5 < 10) page = page5;
    else if(page6 > 1 && page6 < 10) page = page6;
    else if(page7 > 1 && page7 < 10)page = page7;
    else if(page8 > 1 && page8 < 10)page = page8;
    else if(page9 > 1 && page9 < 10) page = page9;
    else if(page10 > 1 && page10 < 10) page = page10;
    else page = 0;
    stup = pages[page];
    myRequest = new XMLHttpRequest();
    getAsks(myRequest);
    target= 0; 
    setInterval(timeDrop , timeout/2);
    console.log(page)
});

////////////////////////////
//         time root      //
///////////////////////////
timeDrop = ()=>{
    if(clock === "run"){
        if(counter.innerText > 0){
            counter.innerText = +counter.innerText - 1;
            counter.innerText.length < 2 ? counter.innerText = `0${counter.innerText}`:counter.innerText;
        }else{
            ASK_CONATAINER.innerHTML = lostTime;
            Dollar.innerText = data[target].money; 
            chequeF(data,target);
            setTimeout(() => {
                location.reload();
            }, timeout);        
        }
    } 
} 
///////////////////////////////////////
//              data entry           //
///////////////////////////////////////
function innerDom(data,target){
    ASK_CONATAINER.innerHTML = data[target].quez;
    A1.children[0].innerText =  data[target].a;
    A2.children[0].innerText = data[target].b;
    A3.children[0].innerText = data[target].c;
    A4.children[0].innerText =  data[target].d;
    chooseAnswer(data,target);
}
 ///////////////////////////////////////
//          dowenload   data         //
///////////////////////////////////////
function getAsks(req) {
    req.onload = function(){
        console.log(this.status)
        if (this.readyState == 4 && this.status == 200) {
            try{
                data = JSON.parse(this.responseText);
                innerDom( data,target);
            }
            catch{
                console.log("FALILD");
            }           
        }
    };
    req.open("get",stup,true);
    req.send();
}
///////////////////////////////
//        chooseAnswer      // 
//////////////////////////////
function chooseAnswer( data,target){  

        answers.forEach(answer =>{    
            answer.addEventListener("click",function(){
                let crreunt = data[target];
                let rightAnswer = Object.values(crreunt)[5];
                clock = "stop";


                if(rightAnswer == this.id){

                    children = [...this.children];

                    this.style.animationName = "congratulations";
                    children.forEach(child => child.style.animationName = "congratulations");

                    if(crreunt.last ===  "true"){
                        console.log(crreunt)
                        Dollar.innerText = data[target].money;
                        chequeF(data,target);
                        setTimeout(() => {
                            location.reload();
                        }, timeout * 2); 
                     } else {
                         
                       Dollar.innerText = data[target].money;
                        target++;
                        crreunt = data[target];
                        counter.innerText = 60;
                        setTimeout(innerDom,timeout,data,target);
                        setTimeout(ramoveAnimation,timeout * 2,data,target);            

                   }
                }else{ 
                   chequeF(data,target);   
                    children = [...this.children];
                    children.forEach(child => child.style.animationName = "condolences");
                    this.style.animationName = "condolences";
                    target = 0;
                    crreunt = data[target];
                    counter.innerText = 60;

                    answers.forEach(answer=>{ 
                        children = [...answer.children];

                        answer.id == rightAnswer?answer.style.animationName = "congratulations":"";
                        answer.id == rightAnswer? answer.style.animationDelay = 5 + "s" : "";

                        answer.id == rightAnswer?children.forEach(child => child.style.animationName = "congratulations"):"";
                        answer.id == rightAnswer?children.forEach(child => child.style.animationDelay = 5 + "s") : "";
                    });

                    setTimeout(ramoveAnimation,timeout * 2, data,target);
                    setTimeout(returnRoot,timeout * 2,data,target); 
                }     
            })  
       });    
}
////////////////////////////
//   ramove Animation    //
///////////////////////////
function ramoveAnimation(data,target){

    clock = "run";

    answers.forEach(answer => {

        children = [...answer.children];

        answer.style.animationName = "";
        answer.style.animationDelay = 0 + "s";
        
        children.forEach(child => {
            child.style.animationName = "";
            child.style.animationDelay = 0 + "s";
        });
    });
}  
////////////////////////////
//         return  root   //
///////////////////////////
function returnRoot(data,target){
    target = 0;
    crreunt = data[target];
    clock = "stop";

    setTimeout(() => {
        layOut.style.display = "flex";
        cheque.style.animationName = "";

    }, timeout);

    start.innerText = playAgain;
}
////////////////////////////
//        cheque  money   //
///////////////////////////
function chequeF(data,target){
    
    msgDollar.innerText = target < data.length / 2 ?baddone :welldone ;
    
    
    haveDollar.innerText = Dollar.innerText;

    cheque.style.animationName = "chequeMoving";
}

