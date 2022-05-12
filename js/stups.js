export {faildStupe,nextStupe,endGame,dom,timeDrop,toolsF,removeToolsF,target,clock};

import{qs,qsA,addEvents,random} from "./utilityFunthions.js";

import {
    ASK_CONATAINER,A1,A2,A3,A4,counter,layOut,
     start,refresh,tools,two,phone,pepole,timeout,answers,lostTime,passGame,playAgain,
     cheque,haveDollar,welldone,baddone,Dollar,
     msgDollar,dataArray
}from './vars.js';

import {linkJson} from "./quetions.js";
let target = 0;
let clock;
////////////////////////////////////////////////
//            stupe functions                 //
///////////////////////////////////////////////
function faildStupe(that,data,answer){
    clock = "stop";
    let children = [...that.children];
    onclick(that,children,"cyan","condolences");
    chequeF(data,target,"chequeMoving",4000);
    correct(answer);
    setTimeout( ()=>{
        onclick(that,children,"#002663","");
        target = 0;
        dom(data)
    },4000)   
}
function nextStupe(that,data,answer){
    clock = "stop";
    let children = [...that.children];

    onclick(that,children,"cyan","congratulations");
    Dollar.innerText = data[target].money; 

    setTimeout( ()=>{
        onclick(that,children,"#002663","");
        clock = "run";
        target++;
        dom(data)
    },2000)   
}
function endGame(that,data,answer){
    clock = "stop";
    let children = [...that.children];

    onclick(that,children,"cyan","congratulations")
    Dollar.innerText = data[target].money;

    chequeF(data,target,"chequeMoving",2000);
    setTimeout( ()=>{
        onclick(that,children,"#002663","")
        chequeF(data,target,"");
        target = 0;
        dom(data)
    },2000)   
}
/////////////////////////////////////////////////
//                  time root                 //
////////////////////////////////////////////////
function timeDrop(data,target){
    if(clock === "run"){
        if(counter.innerText > 0){
            counter.innerText = +counter.innerText - 1;
            counter.innerText.length < 2 ? counter.innerText = `0${counter.innerText}`:counter.innerText;
        }else{
          chequeF(data,target,"chequeMoving",2000);
          ASK_CONATAINER.innerHTML = lostTime;
          setTimeout( ()=>{
               clock = "stop";
               counter.innerText = 60;
               target = 0;
               dom(data)
           },500)  
        }
    } 
}
/////////////////////////////////
//          inner dom          //
/////////////////////////////////
function dom(data){
    ASK_CONATAINER.innerHTML = data[target].quez;
    A1.innerText = data[target].a;
    A2.innerText = data[target].b;
    A3.innerText = data[target].c;
    A4.innerText = data[target].d; 
    toolsF(data); 
}
////////////////////////////////////////////////
//            start functions                //
///////////////////////////////////////////////
let btnsF = addEvents(
    "click",
    qsA("button"),
    (element) => {
        if(element.classList.contains("refresh")){
            counter.innerText = 60;
            clock = "run"; 
            layOut.style.display = "none";
            cheque.style.animationName = "";
            tools.forEach(tool=>{
                tool.classList.contains("close") ? tool.classList.remove("close"):"";
            });
        }else{
            refresh.classList.remove("no-click");
            
            let page = random(1 , 11);
            let url =  dataArray[page] || dataArray[6];  
            linkJson(url);

            counter.innerText = 60;
            clock = "run"; 
            layOut.style.display = "none";
            cheque.style.animationName = "";
            tools.forEach(tool=>{
                tool.classList.contains("close") ? tool.classList.remove("close"):"";
            });
        }
    },
)
////////////////////////////////////////////////
//            tools functions                 //
///////////////////////////////////////////////
function toolsF(data){
    tools.forEach(tool =>{
        if(tool.classList.contains("two")){
            tool.addEventListener("click",()=>{
                tool.classList.add("close");
                answers.forEach((section)=>{
                    let opacity = Array.from(document.querySelectorAll(".opacity"));
                    if(section.id != data[target].right && opacity.length != 2){
                        section.classList.add("opacity");         
                    }
                });       
            }) 
        }else{
            tool.addEventListener("click",()=>{
                tool.classList.add("close");
                answers.forEach((section)=>{
                    if(section.id === data[target].right){
                        section.classList.add("marker");        
                    }
                })      
            })
        } 
    });
}
//       remove tools     //
function removeToolsF(){
    answers.forEach(section =>{
        section.classList.contains("opacity") ? section.classList.remove("opacity"):"";
        section.classList.contains("marker") ? section.classList.remove("marker"):""; 
    });
}
////////////////////////////////////////////////
//            tools functions                 //
///////////////////////////////////////////////
function onclick(that,children,ground,anime){
    that.style.backgroundColor = ground;
    children.forEach(child => child.style.backgroundColor = ground);
    that.style.animationName = anime ;
    children.forEach(child => child.style.animationName = anime);
}
////////////////////////////////////////////////
//            cheque functions                //
///////////////////////////////////////////////
function chequeF(data,target,move,time){ 
    msgDollar.innerText = target < data.length / 2 ?baddone :welldone ;
    haveDollar.innerText = Dollar.innerText;
    cheque.style.animationName = move;

    setTimeout(()=>{
        layOut.style.display = "flex";
    },time);
}
////////////////////////////////////////////////
//            correct functions              //
///////////////////////////////////////////////
function correct(answer){
        console.log(answer)
        answers.forEach(section=>{
            if(section.id == answer){
                let children = [...section.children];
                setTimeout(()=>{
                    section.style.animationName = "congratulations";
                    children.forEach(child => child.style.animationName = "congratulations");
                },1000);
                setTimeout(()=>{
                    section.style.animationName = "";
                    children.forEach(child => child.style.animationName = "");
                },4000);
            }
        });    
}
///////////////////////////////////////////////////////
