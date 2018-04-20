import React, { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            newTodo:[
            {
                isChecked:true,
                value:"hello",
            }
            ],
            defalutValue:null
        }
        this.inputAdd=this.inputAdd.bind(this)
        this.inputChang=this.inputChang.bind(this)
        this.handleNewTodoKeyDown=this.handleNewTodoKeyDown.bind(this)
    };
    /*改变lablede的值*/
    inputChang(){
        this.setState({
            defalutValue:this.myInput.value
        });
    }
    /*合并数组，把input的值给到lable中，然后input的值清空*/
  inputAdd(){
        this.setState({
            newTodo: [].concat(this.state.newTodo, this.myInput.value),
            defalutValue:""
        });
    }
    /*键盘回车事件*/
    handleNewTodoKeyDown(event){
        if (event.keyCode == 13) {
            this.inputAdd()
        }
         event.preventDefault();
    }
    toogleAll(event){
        if(this.state.newTodo.checked(true)){
            this.setState({
                 newTodo:[].concat(this.state.newTodo(checked))
            })
        }
    }

    render() {
         var newTodo = this.state.newTodo;
        return (
            <div id="all">
                <div className="header">
                    <h1>todos</h1>
                    <input className="header-todo"
                    value={this.state.defalutValue}
                    onKeyDown={this.handleNewTodoKeyDown}
                    onChange={this.inputChang}
                          ref={(input)=>this.myInput=input}
                           autoFocus={true}
                           placeholder="What needs to be done?"/>
                </div>
                <div className="center">
                    <input
                        className="center-all"
                        type="checkbox"/>
                     <ul>
                    {
                        newTodo.length?newTodo.map((value)=>{
                        return (
                                <div>
                                    <div>
                                     <li>
                                      <input type="checkbox" className="toggle"/>
                                      <label>{value.value}</label>
                                    <button className="destroy">×</button>
                                    </li>
                                    </div>
                                </div>
                            )

                        }):null
                    }
                    </ul>
                </div>
                <div className="fander">
                    <span className="fander-num"><strong>{this.state.newTodo.length}</strong>个项目</span>
                    <div className="fander-btn">
                        <div className="fander-btn-box">
                            <button className="btn one" onClick={this.toogleAll}>所有</button>
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


