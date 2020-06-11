import * as React from 'react';

export const UITextField = ({label}: {label: String}) => (
    <div>
        <div>
            <div>{label}</div>
            <input type="text" className="text-size" value=""></input>
        </div>
    </div>
);
