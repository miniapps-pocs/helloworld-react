import React from 'react';

import './secondComponentStyle.css'

export class SecondComponentView extends React.Component {
    render() {
        return(
            <React.Fragment>
                <p className="text-color">
                    second view
                </p>
            </React.Fragment>
        )
    }
}
