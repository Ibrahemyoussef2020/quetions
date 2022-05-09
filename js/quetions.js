import {
     qs,qsA,dataArray,ASK_CONATAINER,A1,A2,A3,A4,counter,layOut,
        start,timeout,answers,lostTime,passGame,playAgain,
        cheque,haveDollar,welldone,baddone,Dollar,
        msgDollar,page1,page2,page3,page4,page5,page6,
        page7,page8,page9,page10
}from './vars.js';

import {faildStupe,nextStupe,endGame,dom,timeDrop,
        toolsF,removeToolsF,target,clock
} from "./stups.js";
///////////////////////
let page;

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

let url =  dataArray[page];
fetch(url).then(
    (resolved)=> {
        let data = resolved.json();
        return data ;
    }
)
.then(
   (data)=>{
    dom(data);
    return data
})
.then(
    (data)=>{
        setInterval(timeDrop ,500,data,target);
        answers.forEach(div=>{
            div.onclick = ()=>{
                removeToolsF();
                counter.innerText = 60;
                let answer = data[target].right;
                if(div.id == answer){
                    if(target < data.length-1){
                        nextStupe(div,data,answer);
                    }else if(target == data.length - 1){
                        console.log(data[target])
                        endGame(div,data,answer);
                    }
                }else{
                    faildStupe(div,data,answer)
                }        
            }
        })
        return data;
    }
)

