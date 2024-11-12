import React from "react";

let dis=0
let className=""
export default function Leftshift(width,className,shift){
    if(shift===1 && dis===(2*width)){
        dis=0
    }
    else if(shift===1){
        dis+=width
    }
    else if(shift===2 && dis===0){
        dis+=2*width
    }
    else{
        dis-=width
    }
    document.getElementsByClassName(className)[0].style.right=dis+"px"
}