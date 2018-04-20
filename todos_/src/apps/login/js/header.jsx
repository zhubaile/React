import React, { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
        // 、、 后面 没听清 value 对 但是是空，有这一行 对的
        // 就是 value 为空 怎么消除吗？
        this.state = {
            newTodo: [
                {
                    isChecked: true,
                    value: "",
                }
            ],
            defalutValue: null
        }
        this.inputAdd = this.inputAdd.bind(this)
        this.inputChang = this.inputChang.bind(this)
        this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this)
    };
    /*改变lablede的值*/
    inputChang() {
        this.setState({
            defalutValue: this.myInput.value
        });
    }
    /*合并数组，把input的值给到lable中，然后input的值清空*/
    inputAdd() {
        // debugger
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
    toogleAll(event) {
        if (this.state.newTodo.checked(true)) {
            this.setState({
                newTodo: [].concat(this.state.newTodo(checked))
            })
        }
    }
    checkBoxChange(){
        //此处处理 数据
    }
    clickDel(index){
        //这里吧 
        // this.state.newTodo 的第 index个 数值删除即可
        // 不知道 你懂了没
        // 还有其他问题没有了？
        // 多断点看看
    }
    render() {
        var newTodo = this.state.newTodo;
        // debugger
        return (
            <div id="all">
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
                <div className="center">
                    <input
                        className="center-all"
                        type="checkbox" />
                    <ul>
                        {
                            newTodo.length ? newTodo.map((value,index)=>{
                                //这里还有一个 index 是索引  
                                // 模板里面写判断。所有判断可以这里写。
                                //  还有没，嗯嗯 ，你看看，在写写试试
                                //na  zhe 这样我就先挂了  ok  嗯嗯
                                

                                if (!value.value)return null;
                                return (
                                    <div>
                                        <div>
                                            <li>
                                                {
                                                    value.isChecked ?
                                                    (<input type="checkbox" className="toggle" checked onChange={this.checkBoxChange}/>)
                                                    :
                                                    (<input type="checkbox" className="toggle" onChange={ this.checkBoxChange }/>)
                                                }
                                                <label>{ value.value }</label>
                                                <button className="destroy" onClick={ () => { this.clickDel(index)}}>×</button>
                                            </li>
                                        </div>
                                    </div>
                                )

                            }) : null
                        }
                    </ul>
                </div>
                <div className="fander">
                    <span className="fander-num"><strong>{ this.state.newTodo.length }</strong>个项目</span>
                    <div className="fander-btn">
                        <div className="fander-btn-box">
                            <button className="btn one" onClick={ this.toogleAll }>所有</button>
                            <button className="btn two">未完成</button>
                            <button className="btn three">已完成</button>
                        </div>
                    </div>
                    <div className="fander-end clearfix">清理完成</div>
                </div>
            </div>
        )
    };
};


