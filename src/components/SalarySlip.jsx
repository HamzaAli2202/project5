import React from "react";

export const SalarySlip = ({basic})=>{
    return(
        <div className="sub">
            <table>
                <tr>
                    <td>Basic Salary</td>
                    <td>{basic}</td>
                </tr>
                <tr>
                    <td>
                        HRA
                    </td>
                    <td>
                        {basic*0.4}
                    </td>
                </tr>
                <tr>
                    <td>Conveyence Allowance</td>
                    <td>{basic*0.2}</td>
                </tr>
                <tr>
                    <td>Medical Allowance</td>
                    <td>{1500}</td>
                
                </tr>
                <tr>
                    <td>DA</td>
                    <td>{basic*0.5}</td>
                </tr>
                <tr>
                    <td>Gross Salary</td>
                    <td><b>{basic+basic*0.4+basic*0.2+1500+basic*0.5}</b></td>
                </tr>
            </table>
        </div>
    )
}