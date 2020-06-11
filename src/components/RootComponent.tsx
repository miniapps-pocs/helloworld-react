import React, { Component, Props } from 'react';
import logo from "./logo.svg";
import "./RootComponentStyle.css";
import { UILabel } from './common/ui/label/uiLabel';
import { useHistory, Link } from 'react-router-dom';

export default class RootComponent extends Component {

    state = {
        value: 0
    }

    goBackRootFromFirst = () => {
        
    }

    goToFirstComponent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    }

    goToSecondComponent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    }

    increment = () => {
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
                        <Link to="/first">First Component</Link>
                        <button onClick={this.goToFirstComponent}>First Component</button>
                        <button onClick={this.goToSecondComponent}>Second Component</button>
                        <button onClick={this.increment}>State change</button>
                        
                        <UILabel text={this.state.value?.toString() || "0"} />

                    </div>
                    
                </header>
            </div>
        )
    };
}
