import React from "react"
import InputSelect from "../InputSelect/InputSelect"

export default function Selectbar() {
    const input = ["Select Model","Select Budget","Select City"]
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="selectbar">
                        {input.map((i, index) => {
                           return <InputSelect selected={i} key={index} />
                        })}
                        <div className="btn-container">
                            <input type="button" value={"SEARCH"} className="btn select-search" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 