import classes from "./Portfolio.module.css"
import Wrapper from "../../Components/Wrapper/Wrapper";
import Carousel from "../../Components/Carousel/Carousel";
import DetectButton from "../../Components/DetectButton/DetectButton";
import typo from "../../typo.module.css"
import color from "../../textColor.module.css"
import classNames from "classnames";

function Portfolio() {
    return <div className={classes.portfolio}>
        <Wrapper>
                <h2 className={classNames(classes.text, typo.displayMdRegular, color.primaryInverse)}>Build your crypto portfolio</h2>
                <Carousel/>
                <DetectButton className={classes.button} isActive={false} btnText="Download"/>
        </Wrapper>
    </div>
}

export default Portfolio