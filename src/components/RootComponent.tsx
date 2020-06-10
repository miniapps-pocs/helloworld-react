
import React, { Component } from 'react';
import logo from "./logo.svg";
import "./RootComponentStyle.css";
import { SecondComponentView } from './secondComponent/secondComponentView';
import { FirstComponentView } from './firstComponent/firstComponentView';
import { UILabel } from './common/ui/label/uiLabel';
import { UITextField } from './common/ui/textField/uiTextField';

export default class RootComponent extends Component {

    state = {
        value: 0
    }

    // TODO: CRIAR NAVEGAÇÃO ENTRE COMPONENTES, npm install react-router-dom

    goToFirstComponent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.setState({ 
            component:  <FirstComponentView />
        });
    }

    goToSecondComponent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.setState({ 
            component: <SecondComponentView />
        });
    }

    increment = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.setState({ value: this.state.value+1 });
    }

    render() {
        const componentName = 'Poc';
        const name = 'Tiago';
        return (
            <div className="App">
                <header className="App-header">
                    
                    <img src={logo} className="App-logo" alt="logo" />
                    
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    
                    <a className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                    </a>

                    <div>
                        <p>{componentName || 'Nenhum valor foi atribuido'}</p>
                        
                        <UILabel text={name} />

                        <button onClick={this.goToSecondComponent}>First Component</button>
                        <button onClick={this.goToSecondComponent}>Second Component</button>
                        <button onClick={this.increment}>State change</button>
                        
                        <div>
                            <UITextField label="Valor" value={this.state.value} /> 
                        </div>

                    </div>
                    
                </header>
            </div>
        )
    };
}
