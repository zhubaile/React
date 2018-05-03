import React, { Component } from "react";


export default class Footer extends Component {
    constructor(props){
        super(props);

    }

    // 绑定点击事件，清除已完成
    handlerClick(){
        this.props.clearDone();
    }
    render(){
        return (
            <div className="clearfix todo-footer">
                <span className="">{this.props.todoDoneCount}已完成 / {this.props.todoCount}总数</span>
                <button onClick={this.handlerClick.bind(this)}>清除已完成</button>
            </div>
        )
    }
}
