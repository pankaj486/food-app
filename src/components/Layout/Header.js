import React from "react"
import { Fragment } from "react"
import mealImage from "../../assets/images/top.jpg"
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";



const Header = () => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals App</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="mealImage"/>
        </div>
    </Fragment>
}


export default Header