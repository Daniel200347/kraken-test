import Wrapper from "../../Components/Wrapper/Wrapper";
import color from "../../textColor.module.css"
import typo from "../../typo.module.css"
import classes from "./Main.module.css"
import Rectangle1 from "../../Icons/Rectangle1.png"
import Rectangle2 from "../../Icons/Rectangle2.png"
import Rectangle3 from "../../Icons/Rectangle3.png"
import image from "../../Icons/screenAndPhone.png"
import classNames from "classnames";
import DetectButton from "../../Components/DetectButton/DetectButton";

function Main() {
    return <div className={classes.main}>
        <Wrapper>
            <div className={classes.section}>
                <div className={classes.descriptionContainer}>
                    <h3 className={classNames(typo.displayXsRegular, color.primaryInverse)}>Accelerating the global
                        adoption of crypto since 2011</h3>
                    <div className={classes.descriptionCardWrapper}>
                        <div className={classes.descriptionCard}>
                            <p className={classNames(typo.displayMdRegular, color.primaryInverse)}>10M+</p>
                            <p className={classNames(typo.lgMedium, color.primaryInverse)}>Clients</p>
                        </div>
                        <div className={classes.descriptionCard}>
                            <p className={classNames(typo.displayMdRegular, color.primaryInverse)}>190+</p>
                            <p className={classNames(typo.lgMedium, color.primaryInverse)}>Countries supported</p>
                        </div>
                        <div className={classes.descriptionCard}>
                            <p className={classNames(typo.displayMdRegular, color.primaryInverse)}>$207B+</p>
                            <p className={classNames(typo.lgMedium, color.primaryInverse)}>Quarterly trading volume</p>
                        </div>
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.imageWrapper}>
                        <img src={image} alt="image"/>
                    </div>
                    <div>
                        <div className={classes.textWrapper}>
                            <h4 className={classNames(typo.lgRegular, color.secondary)}>Crypto platform</h4>
                            <p className={classes.textHead}>Buy crypto in minutes</p>
                        </div>
                        <div className={classes.cardWrapper}>
                            <div className={classes.card}>
                                <img src={Rectangle1} alt=""/>
                                <p className={classNames(typo.xlRegular, color.primaryInverse)}>Create your free Kraken
                                    account</p>
                            </div>
                            <div className={classes.card}>
                                <img src={Rectangle2} alt=""/>
                                <p className={classNames(typo.xlRegular, color.primaryInverse)}>Connect your funding
                                    method</p>
                            </div>
                            <div className={classes.card}>
                                <img src={Rectangle3} alt=""/>
                                <p className={classNames(typo.xlRegular, color.primaryInverse)}>Buy and sell 200+
                                    cryptocurrencies</p>
                            </div>
                        </div>
                        <DetectButton className={classes.button} isActive={false} btnText="Download"/>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
}

export default Main