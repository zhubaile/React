import React, { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            defalutValue:this.props.value
        };

        this.handleNewTodoKeyDown=this.handleNewTodoKeyDown.bind(this);
        this.inputChang=this.inputChang.bind(this);
    };
    static defaultProps={
        inputCallback:()=>{}
    };
    inputChang(){
        this.setState({
            defalutValue: this.myInput.value
        });
    }
    handleNewTodoKeyDown(){
        //先进入到这里了
        if (event.keyCode == 13) {
            if(this.myInput.value){
                    this.props.inputCallback(this.myInput.value)
            };
            this.setState({
                defalutValue: ''
            });
        }
        return true
    }
    render() {
        return (
                <div className="header">
                    <h1>todos</h1>
                    <input className="header-todo"
                        onKeyUp={ this.handleNewTodoKeyDown}
                        onChange={this.inputChang}
                           value={ this.state.defalutValue }
                        ref={ (input) => this.myInput = input }
                        autoFocus={ true }
                        placeholder="What needs to be done?" />
                </div>
        )
    };
};


