
import * as React from 'react';

import errorIcon from './icon.svg';
import './uiErrorDialogStyle.css'

export const UIErrorDialog = ({text, alt}: {text: string, alt: string}) => (
    <div className="error-text">
        <img src={errorIcon} className="uiErrorDialog-icon" alt={alt} /> <span><div>{text}</div></span>
    </div>
);