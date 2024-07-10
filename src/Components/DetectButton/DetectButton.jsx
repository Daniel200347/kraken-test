import React, { useState, useEffect } from 'react';
import * as platform from 'platform';
import classes from './DetectButton.module.css';
import typo from '../../typo.module.css';
import classNames from 'classnames';

const DetectButton = ({ className, buttonSize, btnText, forceActive, isActive }) => {
    const [isWindows, setIsWindows] = useState(false);

    useEffect(() => {
        if (forceActive !== undefined) {
            setIsWindows(forceActive);
        } else {
            const os = platform.os.family;
            setIsWindows(os.includes('Windows'));
        }
    }, [forceActive]);

    const handleDownload = () => {
        if (isWindows) {
            window.HANDLE_DOWNLOAD?.();
        }
    };

    return (
        <div className={className}>
            <button
                className={classNames({
                    [typo.mdSemibold]: true,
                    [buttonSize]: true,
                    [classes.buttonActive]: isWindows && !isActive,
                    [classes.buttonInActive]: !isWindows && !isActive,
                    [classes.buttonActiveWhite]: isWindows && isActive,
                    [classes.buttonInActiveWhite]: !isWindows && isActive,
                })}
                disabled={!isWindows}
                onClick={handleDownload}
            >
                {isWindows ? btnText : 'Only Windows'}
            </button>
        </div>
    );
};

export default DetectButton;
