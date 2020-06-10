import React from 'react';
import './firstComponentStyle.css'
import { FirstComponentViewModel } from './firstComponentViewModel';
import { UIErrorDialog } from '../common/ui/errorDialog/uiErrorDialog';

export class FirstComponentView extends  React.Component {

    state = {
        errorHandlerText: ''
    }

    viewModel: FirstComponentViewModel

    constructor(props: Readonly<{}>) {
        super(props);
        this.viewModel = new FirstComponentViewModel();
    }

    executeTapping = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let user = this.viewModel.model;
        if (user) {
            user.name = `${user.name} changed`;
            this.viewModel?.updateUser(user);
        } else {
            this.setState({ errorHandlerText: 'Has error' });
        }
    }    

    render() {
        const currentUser = this.viewModel?.model;
        return(
            <React.Fragment>
                <p className="text-color">
                    firstView {currentUser?.name}
                </p>
                <button onClick={this.executeTapping}>Execute Event</button>
                <UIErrorDialog text={this.state.errorHandlerText} alt="error" />
            </React.Fragment>
            
        )
    }
}
