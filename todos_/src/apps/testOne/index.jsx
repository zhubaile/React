import React, { Component } from "react";
import { render } from 'react-dom';
import Header from "./js/header";
import Content from "./js/content";


class Aaa extends Component {
    constructor(props) {
        super(props);
        this.inputAdd = this.inputAdd.bind(this)
    };
    inputAdd(value) {        
        this.content.push(value)
    }
    render() {
        return (
            <div id="all">
                <Header inputCallback={ this.inputAdd } />
                <Content ref={ (con) => this.content = con }  />
            </div>
        )
    }
};
render(<Aaa />, document.getElementById('all'));


