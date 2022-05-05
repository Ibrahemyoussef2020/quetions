import{qs,qsA} from "./vars.js";
import{data1,data2,data3,data4,data5} from "./json.js";
import {
       ASK_CONATAINER,A1,A2,A3,A4,counter,layOut,
        start,timeout,answers,lostTime,passGame,playAgain,
        cheque,haveDollar,welldone,baddone,Dollar,
        msgDollar,page1,page2,page3,page4,page5,page6,
        page7,page8,page9,page10
}from './vars.js';
/////////////////////////
let pages = [data1,data4,data5,data3,data1,data2,data5,data4,data3];
let clock = "stop";
let target = 0;
let crreunt;
let page;
///////////////////////////////////////
//              start   game         //
///////////////////////////////////////
start.addEventListener("click",()=>{
    layOut.style.display = "none";
    clock = "run";
    cheque.animationName = "";
    counter.innerText = 60;
    Dollar.innerText = "$0"
    ///////////////////////
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
    let data = pages[page];
    innerDom(data,target)
    setInterval(timeDrop ,timeout/4,data,target);
});

////////////////////////////
//         time root      //
///////////////////////////
let timeDrop = (data,target)=>{
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
                    
                   let children = [...this.children];
                    this.style.animationName = "congratulations";
                    children.forEach(child => child.style.animationName = "congratulations");

                    if(crreunt.last ===  "true"){
                        Dollar.innerText = data[target].money;
                        chequeF(data,target);
                        clock = "stop";
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
                   let children = [...this.children];
                    children.forEach(child => child.style.animationName = "condolences");
                    this.style.animationName = "condolences";
                    target = 0;
                    crreunt = data[target];
                    counter.innerText = 60;

                    answers.forEach(answer=>{ 
                      let  children = [...answer.children];

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

       let children = [...answer.children];

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

