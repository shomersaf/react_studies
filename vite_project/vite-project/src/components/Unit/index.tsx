import { useState, useEffect } from "react";

function Unit(props: any) {

    const [rankClass, setRankClass] = useState("");
    const [expenseRankText, setRankTest] = useState("");
     
     

    useEffect(() => {

        // props.iAmount>500?setRankClass("highExpense"):setRankClass("lowExpense")
        if (props.iAmount > 500) {
            setRankClass("highExpense")
            setRankTest("High Expense")
        } else {
            setRankClass("lowExpense")
            setRankTest("Low Expense")
        }
    })
    return (
        <>
            <h3>
                {props.iName}
            </h3>
            <div className="dataDiv">
                <div className="leftDiv">
                    <div>{props.iDate}</div>
                    <div className={rankClass}>{expenseRankText}</div>
                    <div className="category">{props.iCategory}</div>
                </div>
                <div className="rightDiv">
                    <div><strong>${props.iAmount}</strong></div>

                    <button className="junkButton"> <img src="\src\assets\junk-box-svgrepo-com.svg" alt="junk icon" /></button>


                </div>
            </div>
            {props.iToDelete}
        </>

    )

}
export default Unit;