import React, { useState, useEffect } from "react"
import Category from "../Category/Category"

export default function QuickSearch() {
    const [modeldis, setModelDis] = useState(true);
    const [budgetdis, setBudgetDis] = useState(false);
    const [bodytypedis, setBodyTypeDis] = useState(false);

    function display(e){
        console.log(e.target.textContent); // Use textContent instead of value since it's a button

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
            <div className="row">
                <div className="col-md-2" id="quick-search">
                    Quick Search
                </div>
                <div className="col-md-10">
                    <div className="quick-search-navlinks">
                        <button onClick={(e) => display(e)} className="navlink-btn">By Model</button>
                        <button onClick={(e) => display(e)} className="navlink-btn">By Budget</button>
                        <button onClick={(e) => display(e)} className="navlink-btn">By Body Type</button>
                    </div>
                </div>
            </div>
            <div className='col-md-12'>
                <Category url="ByModel" display={modeldis} />
                <Category url="ByPrice" display={budgetdis} />
                <Category url="ByBodyType" display={bodytypedis} />
            </div>
        </div>
    )
}

