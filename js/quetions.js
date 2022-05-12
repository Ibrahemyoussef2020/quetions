import {qs,qsA,addEvents, random} from "./utilityFunthions.js";
import {
     dataArray,ASK_CONATAINER,A1,A2,A3,A4,counter,layOut,
        start,timeout,answers,lostTime,passGame,playAgain,
        cheque,haveDollar,welldone,baddone,Dollar,
        msgDollar,two
}from './vars.js';

import {faildStupe,nextStupe,endGame,dom,timeDrop,
        toolsF,removeToolsF,target,clock,
     
} from "./stups.js";

export {linkJson};
///////////////////////
function linkJson(url){
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
);
}