import React, { Component } from 'react';

class ButtonArea extends Component {
    render() {
        return(
            <ul>
                <li><a href="/create" onClick={e=> {
                    e.preventDefault();
                    this.props.changeMode('create');
                }}>CREATE</a></li>
                <li><a href="/update" onClick={e => {
                    e.preventDefault();
                    this.props.changeMode('update');
                }}>UPDATE</a></li>
                <li><button type="button" onClick={() => {
                    this.props.changeMode('delete');
                }}>DELETE</button></li>
            </ul>
        );
    }
}

export default ButtonArea;