
const btn=document.getElementById("btn");
const h1tag=document.getElementById("h1tag");

const rangeVal=document.getElementById("level");
const slider=document.getElementById("range");

rangeVal.innerText=slider.value;

const up=document.getElementById("c1");
const low=document.getElementById("c2");
const numb=document.getElementById("c3");
const sym=document.getElementById("c4");

slider.addEventListener('input',(e)=>{
    rangeVal.innerText=e.target.value;
})

btn.addEventListener('click',(e)=>{
    let capitalL='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smallL='abcdefghijklmnopqrstuvwxyz';
    let number='0123456789';
    let symbol='`~!@#$%^&*()_+.';
    let final ='';
    
    if(up.checked){
        final+=capitalL;
    }
    if(low.checked){
        final+=smallL;
    }
    if(numb.checked){
        final+=number;
    }
    if(sym.checked){
        final+=symbol;
    }
    if(final.length==0){
        alert("Plaease select Field");
    }
    let latestpass='';
    for(let i=0;i<slider.value;i++){
       let randNum=Math.floor(Math.random()*final.length);
       
        latestpass += final[randNum];
    }
    h1tag.innerText=`${latestpass}`;
})