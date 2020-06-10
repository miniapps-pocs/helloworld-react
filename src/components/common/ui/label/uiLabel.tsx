import * as React from 'react';

export const UILabel = ({text}: {text: String }) => (
    <p className="iulabel-normal">{text || ''}</p>
);
