import React, {useState, useRef, useEffect} from 'react';
import classNames from 'classnames';
import classes from './Accordion.module.css';
import color from "../../textColor.module.css"
import typo from "../../typo.module.css"
import plus from "../../Icons/plus.svg"
import minus from "../../Icons/minus.svg"
const Accordion = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setMaxHeight(contentRef.current.scrollHeight);
        } else {
            setMaxHeight(0);
        }
    }, [isOpen]);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classNames(classes.accordion, {[classes.accordionOpen]: isOpen})}>
            <div className={classNames(classes.accordionHeader, {[classes.accordionHeaderBorder]: !isOpen})}
                 onClick={toggleAccordion}>
                <h2 className={classNames(color.primaryInverse, typo.xlSemibold)}>{title}</h2>
                <img className={classes.icon} src={isOpen ? minus : plus} alt="icon"/>
            </div>
            <div
                className={classNames(classes.accordionContent, {[classes.open]: isOpen, [classes.closed]: !isOpen})}
                ref={contentRef}
            >
                <div
                    className={classNames(classes.accordionTextWrapper, {[classes.accordionTextWrapperBorder]: isOpen})}>
                    <div className={classes.accordionText}>
                        <p className={classNames(typo.lgRegular, color.secondary)}>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
