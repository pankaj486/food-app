import React, { Fragment } from "react";
import classes from "./MealsItemForm.module.css";
import Input from "../../Ui/Input";



const MealsItemForm = () => {
    return (
        <form className={classes.form}>
            <Input label={"Amount"} input={{
                id:'amount',
                type:'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue:'1'
            }}/>
            <button> + Add </button>
        </form>
    )
}


export default MealsItemForm