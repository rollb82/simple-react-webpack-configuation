import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './scss/app.scss';

class App extends Component {
    render() {
        return (
            <div>
                <p>You're ready to start creating</p>
            </div>
        );
    }
}

ReactDom.render(<App/>, window.document.getElementById('app'));
