export {qs,qsA,addEvents,random}

function qs(selector,  parent = document){
    return parent.querySelector(selector)
}
function qsA(selector,  parent = document){
    return [...parent.querySelectorAll(selector)]
}
///////////////////////////////////////
function addEvents(type,selector,callbak,parent = document){
        parent.addEventListener(
            type,
            e => {
                selector.forEach(element => {       
                  if(e.target === element) callbak(element);
                });        
            },
    )
}
///////////////////////////////// 
function random(min, max){
    return  Math.floor(Math.random() * (max - min + 1 ) * min )
}