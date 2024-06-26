// let sec=0,min=0,hour=0,day=0;
let num=5;
let display= document.querySelector("#display");
let Start= document.querySelector("#Start");
let Stop= document.querySelector("#Stop");
let Reset= document.querySelector("#Reset");

// const start= function(){
//     for(let i=1;i<=60;i++){
//         setTimeout(function(){
//             sec++;
//             console.log(sec);
//             display.innerHTML=`${day}:${hour}:${min}:${sec}`;
//         },1000*i);
// }
// }

let startTime;
let id;
let passedTime=0;
let active=false;

const start= function(){
        if(active==false){
        startTime= Date.now()-passedTime;
        console.log("Start");
        active=true;
        update();
    }
}

const stop= function(){
    console.log("Stop");
    clearInterval(id);
    active=false;
}

const reset= function(){
    console.log("Reset");
    active=false;
    clearInterval(id);
    display.innerHTML=`00:00:00:00`;
    passedTime=0;
}

function update(){
    id = setInterval(function(){
        passedTime=Date.now()-startTime;

        let ms= Math.floor((passedTime/10) % 100);
        let sec= Math.floor((passedTime/1000)%60);
        let min= Math.floor((passedTime/(1000*60))%60);
        let hour= Math.floor((passedTime/(1000*60*60)%60));

        hour=String(hour).padStart(2,"0");
        min=String(min).padStart(2,"0");
        sec=String(sec).padStart(2,"0");
        ms=String(ms).padStart(2,"0");

        display.innerHTML=`${hour}:${min}:${sec}:${ms}`;

    },10);


}

Start.addEventListener("click",start);
Stop.addEventListener("click",stop);
Reset.addEventListener("click",reset);
