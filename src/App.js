import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import ButtonArea from './components/ButtonArea';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 'read',
            currentId: 0,
            header: {title:"Web", sub: "React is React!"},
            list: [
                {id:0, title:"HTML", desc: "HTML is HTML"},
                {id:1, title:"CSS", desc: "CSS is CSS"},
                {id:2, title:"JS", desc: "JS is JS"}
            ]
        };
    }
    getContent(mode){
        var content ;
        if(mode === 'create') {
            content = <CreateContent onSubmit={(title, con) => {
                var idx = this.state.list.length - 1;
                var arr = this.state.list;
                arr.push({id:idx+1, title:title, con:con});
                this.setState({
                    list: arr
                });
            }}></CreateContent>;
        }else if(mode === 'update'){
            content = <UpdateContent></UpdateContent>;
        }else if(mode === 'delete'){
            console.log('삭제');
        }else {
            content = <ReadContent></ReadContent>;
        }
        return content;
    }
    render() {

        return (
            <div className="App">
                <Header data={this.state.header}></Header>
                <List data={this.state.list} showData={id => {
                    this.state.currentId = id;
                }}></List>
                <ButtonArea changeMode={mode => {
                    this.setState({
                        mode: mode
                    });
                }}></ButtonArea>
                { this.getContent(this.state.mode) }
            </div>
        );
    }
}

export default App;
