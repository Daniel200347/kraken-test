import React from 'react';
import classes from './FooterNav.module.css';
import typo from '../../typo.module.css';
import classNames from 'classnames';

export default function FooterNav({title, links}) {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h3 className={classNames(classes.title, typo.xlSemibold)}>{title}</h3>
                <div className={classes.linksWrapper}>
                    {links.map(({href, linkText}, index) => (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            href={href}
                            className={classNames(classes.link)}
                        >
                            {linkText}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}