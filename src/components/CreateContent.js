import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        return(
            <div>
                <form method="post" action="/submit" onSubmit={e => {
                    var title, con;
                    e.preventDefault();
                    title = e.target[0].value;
                    con = e.target[1].value;
                    this.props.onSubmit(title, con);
                }}>
                    <dl>
                        <dt><input type="text" name="title" placeholder="제목"/></dt>
                        <dd><textarea name="con" placeholder="내용"></textarea></dd>
                    </dl>
                    <div>
                        <input type="submit" value="저장"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateContent;