import {qs,qsA} from "./utilityFunthions.js";

export{dataArray,ASK_CONATAINER,A1,A2,A3,A4,counter,layOut,tools,
start,refresh,two,phone,pepole,timeout,answers,lostTime,passGame,playAgain,
 cheque,haveDollar,welldone,baddone,Dollar,msgDollar,
}  
//////////////////////
const dataArray = ["./jsonFiles/data2.json","./jsonFiles/data1.json",
"./jsonFiles/data5.json","./jsonFiles/data4.json","./jsonFiles/data3.json",
"./jsonFiles/data5.json","./jsonFiles/data2.json","./jsonFiles/data3.json",
"./jsonFiles/data1.json","./jsonFiles/data4.json",
],
ASK_CONATAINER = qs(".ask").children[0],
 A1 = qs(".A1").children[0],
 A2 = qs(".A2").children[0],
 A3 = qs(".A3").children[0],
 A4 = qs(".A4").children[0],
 answers = qsA("section"),
 counter = qs(".timer"),
 layOut  = qs(".lay_out"),
 start   = qs(".start"),
 refresh = qs(".refresh"),
 tools    = qsA(".help"),
 two   = qs(".two"),
 phone = qs(".phone"),
 pepole = qs(".pepole"),
 timeout = 4000,
 lostTime = "للأسف انتهى الوقت ",
 passGame = "رائع لقد فزت",
 playAgain =  "أعد المسابقة",
 cheque = qs(".cheque"),
 haveDollar = qs(".have_dollar"),
 msgDollar = qs(".msg_dollar"),
 welldone = "ألف مبروك معك",
 baddone = "للأسف معك فقط",
 Dollar   = qs(".dollar");
///////////////////////////////////





