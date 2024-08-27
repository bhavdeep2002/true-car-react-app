import React, { useState, useEffect } from "react"
import Category from "../Category/Category"
export default function QuickSearch() {

    const [modeldis, setModelDis] = useState(true);
    const [budgetdis, setBudgetDis] = useState(false);
    const [bodytypedis, setBodyTypeDis] = useState(false);
    const [show,setShow] =useState("block")
    let rightdistance = 0;
    function display(e) {
        if (e.target.textContent === "By Model") {
            setShow("block")
            setModelDis(true);
            setBudgetDis(false);
            setBodyTypeDis(false);
        } else if (e.target.textContent === "By Budget") {
            setShow("none")
            setModelDis(false);
            setBudgetDis(true);
            setBodyTypeDis(false);
        } else {
            setShow("none")
            setModelDis(false);
            setBudgetDis(false);
            setBodyTypeDis(true);
        }

    }
    const leftshift = () => {
        let itemswidth=  document.getElementsByClassName('list-items')[0].getBoundingClientRect().width
        let margin=(window.innerWidth*3.5)/100
        let displacement =itemswidth+margin
        if (rightdistance < displacement*2) {
            rightdistance+=displacement
            document.getElementById('container-category').style.right = rightdistance + "px";
        }
        else {
            rightdistance = 0;
            document.getElementById('container-category').style.right = rightdistance + "px";
        }
    }
    const rightshift = () => {
        let itemswidth=  document.getElementsByClassName('list-items')[0].getBoundingClientRect().width
        let margin=(window.innerWidth*3.5)/100
        let displacement =itemswidth+margin
        if (rightdistance === 0) {
            rightdistance = displacement*2;
            document.getElementById('container-category').style.right = rightdistance + "px";
        }
        else {
            rightdistance -= displacement
            document.getElementById('container-category').style.right = rightdistance + "px";
        }
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
                <div className='col-md-12' style={{ overflowX: "hidden", overflowY: 'hidden' ,marginTop:"2%",marginBottom:"22.8px"}}>
                    {<Category show={modeldis} url="ByModel" widthItem="11" widthContainer="129" />}
                    {<Category show={budgetdis} url="ByPrice" widthItem="18" widthContainer="100" />}
                    {<Category show={bodytypedis} url="ByBodyType" widthItem="14" widthContainer="100" />}
                </div>
                <svg style={{display:show}} onClick={rightshift} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>
                <svg style={{display:show}} onClick={leftshift} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
            </div>
        </div>
    )
}