import Wrapper from "../../Components/Wrapper/Wrapper";
import classes from "./Pro.module.css"
import logo from "../../Icons/logoPro.png"
import classNames from "classnames";
import color from "../../textColor.module.css"
import typo from "../../typo.module.css"
import DetectButton from "../../Components/DetectButton/DetectButton";
import arrows from "../../Icons/Arrows.png"
import coin from "../../Icons/coinImage.png"
import stonks from "../../Icons/Stonks.png"

function Pro() {
    return <div className={classes.pro}>
        <Wrapper>
            <div className={classes.headWrapper}>
                <div style={{paddingBottom:"16px"}}><img src={logo} alt=""/></div>
                <h2 className={classNames(classes.headDescription, typo.displayMdRegular, color.primary)}>Trade spot and
                    margin.</h2>
                <h2 className={classNames(classes.headDescription, typo.displayMdRegular, color.primary)}> All in one
                    powerful interface.</h2>
            </div>

            <div className={classes.backgroundIcon}>
                <div className={classes.cardWrapperContainer}>
                    <div className={classes.cardWrapper}>
                        <div className={classes.card}>
                            <div><img src={arrows} alt="icon"/></div>
                            <div className={classes.cardTextWrapper}>
                                <p className={classNames(typo.displayXsRegular, color.primary)}>Low spreads</p>
                                <p className={classNames(typo.lgRegular, color.primary)}>Lower your average cost per
                                    trade.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div><img src={coin} alt="icon"/></div>
                            <div className={classes.cardTextWrapper}>
                                <p className={classNames(typo.displayXsRegular, color.primary)}>Deep liquidity across
                                    markets</p>
                                <p className={classNames(typo.lgRegular, color.primary)}>Easily trade large volumes at
                                    stable
                                    prices</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div><img src={stonks} alt="icon"/></div>
                            <div className={classes.cardTextWrapper}>
                                <p className={classNames(typo.displayXsRegular, color.primary)}>High rate limits</p>
                                <p className={classNames(typo.lgRegular, color.primary)}>Trade crypto fast with our
                                    robust,
                                    low
                                    latency API.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <DetectButton className={classes.button} isActive={true} btnText="Download"/>

            <div className={classes.footerCardWrapper}>
                <div className={classes.footerCard}><p className={classes.footerCardContent}>Place advanced orders
                    on-the-go.</p></div>
                <div className={classes.footerCard}><p className={classes.footerCardContent}>Margin trading with up to
                    5x leverage.*</p></div>
                <div className={classes.footerCard}><p className={classes.footerCardContent}>Trade 100+ multi-collateral
                    Futures contracts.</p></div>
            </div>
        </Wrapper>
    </div>
}

export default Pro