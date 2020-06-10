import * as React from 'react';

export const UITextField = ({label, value}: {label: String, value?: any }) => (
    <div className="">
        <p>{label}</p>
        <input className="text-size" value={value}></input>
    </div>
);
