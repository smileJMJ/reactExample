import React, {Component} from 'react';

class List extends Component {
    render(){
        var data = this.props.data;
        var  liTemplate  = [];
        console.log(this.props);
        data.forEach((v,i) => {
            liTemplate.push(<li key={v.id}><a href={"/list/"+v.id} data-id={v.id} onClick={e => {
                var id;
                e.preventDefault();
                id = e.target.dataset.id;
                this.props.showData(id);
            }}>{v.title}</a></li>);
        });

        return (
            <nav>
                <ul>{liTemplate}</ul>
            </nav>
        );
    }
}
export default List;