import React, {Component} from 'react';

class Header extends Component {
    render(){
        var data = this.props.data;

        return (
            <header>
                <h2>{data.title}</h2>
                <p>{data.sub}</p>
            </header>
        );
    }
}
export default Header;