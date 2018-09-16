import React, { Component } from 'react';
import { connect } from 'react-redux';

import {simpleAction} from "./actions/simpleAction";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    handleSimpleClick = (event) => {
        this.props.simpleAction();
    }
    render() {
        console.log(this.props)
        return (
            <div className="App">
                <header onClick={this.handleSimpleClick} className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        simpleAction: () => dispatch(simpleAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
