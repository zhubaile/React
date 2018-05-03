import React, {Componetn}  from "react";

export default class Main extends Component {
    constructor(props){
        super(props);

    }
    // 处理任务是否完成状态
    handlerChange(){
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    }

    // 鼠标移入
    handlerMouseOver(){
        React.findDOMNode(this.refs.deleteBtn).style.display = "inline";
    }

    // 鼠标移出
    handlerMouseOut(){
        React.findDOMNode(this.refs.deleteBtn).style.display = "none";
    }

    // 删除当前任务
    handlerDelete(){
        this.props.deleteTodo(this.props.index);
    }
    render(){
        let doneStyle = this.props.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'};

        return (
            <li
                onMouseOver={this.handlerMouseOver.bind(this)}
                onMouseOut={this.handlerMouseOut.bind(this)}
                >
                <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)}/>
                <label style={doneStyle}>{this.props.text}</label>
                <button style={{'display': 'none'}} ref="deleteBtn" onClick={this.handlerDelete.bind(this)}  className="destroy">删除</button>
            </li>
        )
    }
}
