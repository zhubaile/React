import React,{Component} from "react";
import { render } from 'react-dom';
import Header from "./js/header.js";
import Content from "./js/content.js";
import Footer from "./js/footer.js";
import LocalDb from "localDb";


debugger;
class App extends Component{
    constructor(props){
        super(props);
        this.db = new LocalDb('React-Todos');
        this.state = {
            todos: this.db.get("todos") || [],
            isAllChecked: false
        };
    }
// 判断是否所有任务的状态都完成，同步底部的全选框
    allChecked(){
        let isAllChecked = false;
        if(this.state.todos.every((todo)=> todo.isDone)){
            isAllChecked = true;
        }
        this.setState({todos: this.state.todos, isAllChecked});
    }

    // 添加任务，是传递给Header组件的方法
    addTodo(main){
        this.state.todos.push(main);
        this.allChecked();
        this.db.set('todos',this.state.todos);
    }

    // 改变任务状态，传递给TodoItem和Footer组件的方法
    changeTodoState(index, isDone, isChangeAll=false){
        if(isChangeAll){
            this.setState({
                todos: this.state.todos.map((todo) => {
                    todo.isDone = isDone;
                    return todo;
                }),
                isAllChecked: isDone
            })
        }else{
            this.state.todos[index].isDone = isDone;
            this.allChecked();
        }
        this.db.set('todos', this.state.todos);
    }

    // 清除已完成的任务，传递给Footer组件的方法
    clearDone(){
        let todos = this.state.todos.filter(todo => !todo.isDone);
        this.setState({
            todos: todos,
            isAllChecked: false
        });
        this.db.set('todos', todos);
    }

    // 删除当前的任务，传递给TodoItem的方法
    deleteTodo(index){
        this.state.todos.splice(index, 1);
        this.setState({todos: this.state.todos});
        this.db.set('todos', this.state.todos);
    }

    render(){
        var props = {
            todoCount: this.state.todos.length || 0,
            todoDoneCount: (this.state.todos && this.state.todos.filter((todo)=>todo.isDone)).length || 0
        };
        return (
            <div id="all">
                <Header addTodo={this.addTodo.bind(this)}/>
                <Content deleteTodo={this.deleteTodo.bind(this)} todos={this.state.todos} changeTodoState={this.changeTodoState.bind(this)} isAllChecked={this.state.isAllChecked}  />
                <Footer clearDone={this.clearDone.bind(this)} {...props} changeTodoState={this.changeTodoState.bind(this)}/>
            </div>
        )
    }
};
render(<App/>, document.getElementById('all'));


