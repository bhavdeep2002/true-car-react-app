import React, { useState, useEffect } from "react"
import Category from "../Category/Category"
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";
export default function QuickSearch() {

    const [modeldis, setModelDis] = useState(true);
    const [budgetdis, setBudgetDis] = useState(false);
    const [bodytypedis, setBodyTypeDis] = useState(false);
    let leftdistance =0;
    let rightdistance =0;

    function display(e) {
        if (e.target.textContent === "By Model") {
            setModelDis(true);
            setBudgetDis(false);
            setBodyTypeDis(false);
        } else if (e.target.textContent === "By Budget") {
            setModelDis(false);
            setBudgetDis(true);
            setBodyTypeDis(false);
        } else {
            setModelDis(false);
            setBudgetDis(false);
            setBodyTypeDis(true);
        }

    }
    const leftshift =()=>{
        console.log()
        leftdistance+=270
        document.getElementById('container-category').style.right=leftdistance+"px";  
    }
    const rigthshift =()=>{
        rightdistance+=270
        document.getElementById('container-category').style.left=rightdistance+"px";  
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2" id="quick-search">
                    Quick Search
                </div>
                <div className="col-md-10">
                    <div className="quick-search-navlinks">
                        <button type="button" onClick={(e) => display(e)} className="navlink-btn">By Model</button>
                        <button type="button" onClick={(e) => display(e)} className="navlink-btn">By Budget</button>
                        <button type="button" onClick={(e) => display(e)} className="navlink-btn">By Body Type</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='col-md-12' style={{overflowX:"hidden"}}>
                    {<Category show={modeldis} url="ByModel" widthItem="10" widthContainer="145" />}
                    {<Category show={budgetdis} url="ByPrice" widthItem="15" widthContainer="100" />}
                    {<Category show={bodytypedis} url="ByBodyType" widthItem="14.019" widthContainer="104" />}
                    <div className="arrow-rigth" onClick={leftshift}><FaAngleRight /></div>
                    <div className="arrow-left" onClick={rigthshift}><FaAngleLeft /></div>
                </div>
            </div>
            <div className="row">hello</div>
            <div className="row">hello</div>
            <div className="row">hello</div>
            <div className="row">hello</div>
            <div className="row">hello</div>
        </div>
    )
}