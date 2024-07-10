import classes from "./StartScreen.module.css"
import Wrapper from "../../Components/Wrapper/Wrapper";
import screen from "../../Icons/screen.png"
import DetectButton from "../../Components/DetectButton/DetectButton";
import color from "../../textColor.module.css"
import typo from "../../typo.module.css"
import classNames from "classnames";

function StartScreen() {
    return <div className={classes.startScreen}>
        <Wrapper className={classes.wrapper}>
            <div className={classes.section}>
                <div className={classes.container}>
                    <div className={classes.textWrapper}>
                        <h3
                        className={classNames(classes.title,typo.displayLgRegular, color.primaryInverse)}>Invest in your
                        future</h3>
                        <p className={classNames(typo.displayXsRegular, color.primaryInverse)}>Grow your portfolio in a more
                            fair and open financial system. <span
                                className={classNames(typo.displayXsSemibold, color.primaryInverse)}> Start trading crypto with just $10. </span>
                        </p></div>
                    <DetectButton isActive={false} btnText="Download" className={classes.button}/>

                </div>
                <div className={classes.imageWrapper}>
                    <img src={screen} alt=""/>
                </div>
            </div>
        </Wrapper>
    </div>
}

export default StartScreen