import * as React from 'react';

// TODO: não funciona pois o value do UITextField é readolny

export const UITextField = ({label, value}: {label: String, value?: any }) => (
    <div className="">
        <p>{label}</p>
        <input className="text-size" value={value}></input>
    </div>
);
