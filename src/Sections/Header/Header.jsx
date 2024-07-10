import React, {useState} from "react";
import classes from "./header.module.css";
import typo from "../../typo.module.css";
import color from "../../textColor.module.css";
import menu from "../../Icons/burgerMenu.svg"
import close from "../../Icons/close.svg"
import classNames from "classnames";
import Logotype from "../../Components/Logotype/Logotype";
import DetectButton from "../../Components/DetectButton/DetectButton";

function Header() {
    const [isOverflowHidden, setIsOverflowHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleOverflow = () => {
        setIsOverflowHidden(prevState => !prevState);
        document.body.style.overflow = isOverflowHidden ? 'visible' : 'hidden';
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleButton = () => {
        toggleMenu();
        toggleOverflow()
    }

    return (
        <div className={classes.color}>
            <div className={classes.headerWrapper}>
                <div className={classes.left}>
                    <Logotype/>
                    <nav className={` ${menuOpen ? classes.isActive : ''}`}>
                        <ul className={` ${classes.titleWrapper} ${menuOpen ? classes.isActive : ''}`}>
                            <li onClick={toggleButton} className={classes.li}>
                                <a className={classes.link}>
                                    <span style={{cursor: "pointer"}}
                                          className={classNames(color.primary, typo.mdMedium)}>About</span>
                                </a>
                            </li>
                            <li onClick={toggleButton} className={classes.li}>
                                <a className={classes.link}>
                                    <span style={{cursor: "pointer"}}
                                          className={classNames(color.primary, typo.mdMedium)}>Portfolio</span>
                                </a>
                            </li>
                            <li onClick={toggleButton} className={classes.li}>
                                <a className={classes.link}>
                                    <span style={{cursor: "pointer"}}
                                          className={classNames(color.primary, typo.mdMedium)}>FAQ</span>
                                </a>
                            </li>
                            <li onClick={toggleButton} className={classes.li}>
                                <a className={classes.link}>
                                    <span style={{cursor: "pointer"}}
                                          className={classNames(color.primary, typo.mdMedium)}>Rewards</span>
                                </a>
                            </li>
                            <li onClick={toggleButton} className={classes.li}>
                                <a className={classes.link}>
                                    <span style={{cursor: "pointer"}}
                                          className={classNames(color.primary, typo.mdMedium)}>PRO</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.isActiveWrapper}>
                    <DetectButton isActive={true} btnText="Download" buttonSize={classes.sizeButton}/>
                    <img src={!menuOpen ? menu : close} className={classes.burgerButton} onClick={toggleButton}></img>
                </div>
            </div>
        </div>
    );
}

export default Header;
