import classes from "./Start.module.css"
import typo from "../../typo.module.css"
import color from "../../textColor.module.css"
import image from "../../Icons/BTCIMage.png"
import classNames from "classnames";
import DetectButton from "../../Components/DetectButton/DetectButton";
import Wrapper from "../../Components/Wrapper/Wrapper";
import {useState} from "react";

function Start() {
    return <div className={classes.section}>
        <Wrapper>
            <div className={classes.startWrapper}>
                <div className={classes.container}>
                    <div className={classes.textWrapper}>
                        <h3 className={classNames(typo.displayMdRegular, color.accent)}>Start your crypto journey</h3>
                        <p className={classNames(typo.xlRegular, color.primaryInverse)}>Sign up to buy and sell 200+
                            cryptocurrencies.</p>
                    </div>
                    <DetectButton isActive={false} className={classes.button} btnText="Download"/>
                </div>
                <div className={classes.imageWrapper}>
                    <img src={image} alt="image"/>
                </div>
            </div>
        </Wrapper>
    </div>
}

export default Start