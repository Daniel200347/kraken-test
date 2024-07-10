import React from 'react';
import classes from './FooterNav.module.css';
import typo from '../../typo.module.css';
import classNames from 'classnames';

export default function FooterNav({ title,href, linkTexts }) {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h3 className={classNames(classes.title, typo.xlSemibold)}>{title}</h3>
                <div className={classes.linksWrapper}>
                    {linkTexts.map((text, index) => (
                        <a key={index} href={href} className={classNames(classes.link)}>{text}</a>
                    ))}
                </div>
            </div>
        </div>
    );
}
