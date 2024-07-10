import classes from "./cryptoCard.module.css"
import classNames from "classnames";
import color from "../../textColor.module.css"
import typo from "../../typo.module.css"

function CryptoCard({cryptoName, children,percent,  cryptoAbbreviation}) {

    return <div className={classes.cryptoCard}>
        <div className={classes.wrapper}>
            <div>{children}</div>
        </div>
        <div className={classes.container}>
            <div className={classes.textWrapper}>
                <span className={classNames(color.primaryInverse, typo.mdMedium)}>{cryptoName}</span>
                <span className={classNames(color.secondary, typo.mdMedium)}>{cryptoAbbreviation}</span>
            </div>
            <div>
                <div className={classNames(classes.percentWrapper, typo.xsRegular, color.success)}>
                    {percent}
                </div>
            </div>
        </div>
    </div>
}

export default CryptoCard