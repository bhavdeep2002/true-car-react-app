import React, { useState, useEffect } from "react"
import Category from "../Category/Category"
import axios from "axios";
export default function QuickSearch() {

    const [modeldis, setModelDis] = useState(true);
    const [budgetdis, setBudgetDis] = useState(false);
    const [bodytypedis, setBodyTypeDis] = useState(false);
   

    function display(e) {
        console.log(e.target.textContent); // Use textContent instead of value since it's a button
        e.preventDefault()
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
    return (
        <div className="container">
        {console.log("QuickSearch")}
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
            <div className='col-md-12'>
            {<Category show={modeldis} url="ByModel"/>}
            {<Category show={budgetdis} url="ByPrice"/>}
            {<Category show={bodytypedis} url="ByBodyType" />}
            </div>
            <div className="row">hello</div>
             <div className="row">hello</div>
             <div className="row">hello</div>
             <div className="row">hello</div>
             <div className="row">hello</div>
        </div>
    )
}