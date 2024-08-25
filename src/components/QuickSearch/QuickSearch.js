import React, { useState, useEffect } from "react"
import Category from "../Category/Category"
export default function QuickSearch() {

    const [modeldis, setModelDis] = useState(true);
    const [budgetdis, setBudgetDis] = useState(false);
    const [bodytypedis, setBodyTypeDis] = useState(false);
    let rightdistance = 0;
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
    const leftshift = () => {
        let itemswidth=  document.getElementsByClassName('list-items')[0].getBoundingClientRect().width
        if (rightdistance < 540) {
            console.log(itemswidth)
            rightdistance+=itemswidth
            document.getElementById('container-category').style.right = rightdistance + "px";
        }
        else {
            rightdistance = 0;
            document.getElementById('container-category').style.right = rightdistance + "px";
        }
        console.log(rightdistance)
    }
    const rightshift = () => {
        if (rightdistance === 0) {
            rightdistance = 540;
            document.getElementById('container-category').style.right = rightdistance + "px";
        }
        else {
            rightdistance -= 270
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
                <div className='col-md-12' style={{ overflowX: "hidden", overflowY: 'hidden' }}>
                    {<Category show={modeldis} url="ByModel" widthItem="11" widthContainer="122" />}
                    {<Category show={budgetdis} url="ByPrice" widthItem="15" widthContainer="100" />}
                    {<Category show={bodytypedis} url="ByBodyType" widthItem="14.019" widthContainer="104" />}
                </div>
                <svg onClick={rightshift} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>
                <svg onClick={leftshift} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right arrow-rigth" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
            </div>
            <div className="row">hello</div>
            <div className="row">hello</div>
            <div className="row">hello</div>
            <div className="row">hello</div>
            <div className="row">hello</div>
        </div>
    )
}