import React from "react";
export const FullName = ({fname,lname})=>{
    return(
        <div className="sub">
            <h3>
                {`${fname} ${lname}`}
            </h3>
        </div>
    )
}