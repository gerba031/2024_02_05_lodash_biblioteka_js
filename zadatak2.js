var a = "neki text";

if (1==1){
    console.log("unutar petlje a = " + a);
    let b = "neki drugi text";
    console.log("b unutar if bloka= " + b);
}

//******/ razlika između let i var kad imamo neki suženi blok, let će izvršiti naredbu samo unutar for petlje ***** 

console.log(a);
console.log("b izvan bloka: " + b);
