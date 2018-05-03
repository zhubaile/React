import React, { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: [
                {
                    isChecked: true,
                    value: "",
                }
            ],
            isCheckedAll:false,
            status:"up",
            defalutValue: null
        }
    };
    inputChang() {
        this.setState({
            defalutValue: this.myInput.value
        });
    }
    inputAdd() {
        if(!this.myInput.value)return null;
        this.setState({
            newTodo: [].concat(this.state.newTodo, {
                isChecked:false,//改成默认不选中
                value: this.myInput.value
            }),
            defalutValue: ""
        });
    }
    /*键盘回车事件*/
    handleNewTodoKeyDown(event) {
        //先进入到这里了
        if (event.keyCode == 13) {
            this.inputAdd()
        }
        return true
    }
    render() {
        return (
                <div className="header">
                    <h1>todos</h1>
                    <input className="header-todo"
                        value={ this.state.defalutValue }
                        onKeyUp={ this.handleNewTodoKeyDown }
                        onChange={this.inputChang}
                        ref={ (input) => this.myInput = input }
                        autoFocus={ true }
                        placeholder="What needs to be done?" />
                </div>
        )
    };
};


