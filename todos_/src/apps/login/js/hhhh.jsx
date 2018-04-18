import React, { Component } from "react";

/*
ALL_TODOS = 'all';
ACTIVE_TODOS = 'active';
COMPLETED_TODOS = 'completed';
*/
/*constructor(props) {
        super(props);
        this.state={
            newTodo:[],
            defalutValue:""
        }
        this.inputAdd=this.inputAdd.bind(this)
        this.inputChang=this.inputChang.bind(this)
    };
    inputChang(){
        this.setState({
            defalutValue:this.myInput.value
        });
    }
  inputAdd(){
        this.setState({
            newTodo: [].concat(this.state.newTodo, this.myInput.value),
            defalutValue:""
        });
    }*/

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            nowShowing:"all",
            editing:null,
            newTodo:""
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleNewTodoKeyDown=this.handleNewTodoKeyDown.bind(this);
    };
   /* getInitialState(){
        return{
            nowShowing:"all",
            editing:null,
            newTodo:""
        };
    },
    componentDidMount(){
        var setState = this.setState;
        var router = Router({
            '/': setState.bind(this, {nowShowing: "all"}),
            '/active': setState.bind(this, {nowShowing: "active"}),
            '/completed': setState.bind(this, {nowShowing: "completed"})
        });
        router.init('/');
    },*/
    handleChange(event){
        this.setState({newTodo: event.target.value});
    }
    handleNewTodoKeyDown(event){
        if (event.keyCode !== 13) {
            return;
        }
        event.preventDefault();
        var val = this.state.newTodo.trim();

        if (val) {
            this.props.addTodo(val);
            this.setState({newTodo: ''});
        }
    }
/*
    toggleAll(event){
        var checked = event.target.checked;
        this.props.model.toggleAll(checked);
    }
    toggle(todoToToggle){
        this.props.model.toggle(todoToToggle);
    }
    destroy(todo){
        this.props.model.destroy(todo);
    }
    edit(todo){
        this.setState({editing: todo.id});
    }
    save(todoToSave, text){
        this.props.model.save(todoToSave, text);
        this.setState({editing: null});
    }
    cancel(){
        this.setState({editing: null});
    }
    clearCompleted(){
        this.props.model.clearCompleted();
    }*/
    render() {
/*        var footer;
        var main;
        var todos = this.props.model.todos;

        var shownTodos = todos.filter(function (todo) {
            switch (this.state.nowShowing) {
                case ACTIVE_TODOS:
                    return !todo.completed;
                case COMPLETED_TODOS:
                    return todo.completed;
                default:
                    return true;
            }
        }, this);

        var todoItems = shownTodos.map(function (todo) {
            return (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={this.toggle.bind(this, todo)}
                    onDestroy={this.destroy.bind(this, todo)}
                    onEdit={this.edit.bind(this, todo)}
                    editing={this.state.editing === todo.id}
                    onSave={this.save.bind(this, todo)}
                    onCancel={this.cancel}
                    />
            );
        }, this);

        var activeTodoCount = todos.reduce(function (accum, todo) {
            return todo.completed ? accum : accum + 1;
        }, 0);

        var completedCount = todos.length - activeTodoCount;

        if (activeTodoCount || completedCount) {
            footer =
                <TodoFooter
                    count={activeTodoCount}
                    completedCount={completedCount}
                    nowShowing={this.state.nowShowing}
                    onClearCompleted={this.clearCompleted}
                    />;
        }

        if (todos.length) {
            main = (
                <section className="main">
                    <input
                        className="toggle-all"
                        type="checkbox"
                        onChange={this.toggleAll}
                        checked={activeTodoCount === 0}
                        />
                    <ul className="todo-list">
                        {todoItems}
                    </ul>
                </section>
            );}*/
        return (
            <div id="all">
                <div className="header">
                    <h1>todos</h1>
                    <input className="header-todo"
                           value={this.state.newTodo}
                           autoFocus={true}
                           onKeyDown={this.handleNewTodoKeyDown}
                           onChange={this.handleChange}
                           placeholder="What needs to be done?"/>
                </div>
                <div className="center">
                    <input
                        className="center-all"
                        type="checkbox"
                      /*  onChange={this.toggleAll}
                        checked={activeTodoCount === 0}*/
                        />
                    <ul>
                        <li>
                            <input type="checkbox" className="toggle"/>
                            <label>
                            haoba
                            </label>
                            <button className="destroy">×</button>
                        </li>
                    </ul>
                </div>
                <div className="fander">
                    <span className="fander-num"><strong></strong>个项目</span>
                    <div className="fander-btn">
                        <div className="fander-btn-box">
                            <button className="btn one">所有</button>
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
