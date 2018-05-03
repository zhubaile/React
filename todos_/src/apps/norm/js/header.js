import React, { Component } from "react";

export default class Header extends Component {
    constructor(props){
        super(props);

    }
    // 绑定键盘回车事件，添加新任务
    handlerKeyUp(event){
        if(event.keyCode === 13){
            let value = event.target.value;

            if(!value) return false;

            let newMain = {
                text: value,
                isDone: false
            };
            event.target.value = "";
            this.props.addTodo(newMain);
        }
    }
    render(){
        return (
            <div className="header">
                <h1>todos</h1>
                <input className="header-todo" onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="what's your task ?"/>
            </div>
        )
    };
}

