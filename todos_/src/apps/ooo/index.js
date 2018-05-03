import React,{Component} from "react";
import { render } from 'react-dom';
import Header from "./js/header";
import Content from "./js/content";
import Footer from "./js/footer";

class Aaa extends Component{
    constructor(props){
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
        this.inputAdd = this.inputAdd.bind(this)
        this.inputChang = this.inputChang.bind(this)
        this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this)
        this.checkBoxChange=this.checkBoxChange.bind(this)
        this.clickDel=this.clickDel.bind(this)
        this.toggleAll=this.toggleAll.bind(this)
        this.toggleActive=this.toggleActive.bind(this)
        this.toggleEnd=this.toggleEnd.bind(this)
        this.toggleUp=this.toggleUp.bind(this)
        this.clearAll=this.clearAll.bind(this)
    };
    /*改变lablede的值*/
    inputChang() {
        this.setState({
            defalutValue: this.myInput.value
        });
    }
    /*合并数组，把input的值给到lable中，然后input的值清空*/
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

    toggleAll() {
        this.setState({
            isCheckedAll:!this.state.isCheckedAll,
            newTodo:this.state.newTodo.map((v)=>{
                if (this.state.isCheckedAll == false) {
                    return {isChecked: true, value: v.value}
                }
                if (this.state.isCheckedAll == true) {
                    return {isChecked: false, value: v.value}
                }
            })
        });
    }
    toggleUp(){
        this.setState({
            status:"up"
        });
        debugger;
    }
    toggleActive(){
        this.setState({
            status:"active"
        })
    }
    toggleEnd(){
        this.setState({
            status:"end"
        })
    }
    clearAll(){
        var newTodoArr=this.state.newTodo;
        this.setState({
            newTodo:newTodoArr.map(function(v,i){
                if(v.isChecked==true){return {v:null}}
                return v
            })
        });
    }
    checkBoxChange(event,index){
        var newTodoArr=this.state.newTodo;
        this.setState({
            newTodo:newTodoArr.map(function(v,i){
                if(i==index){return {isChecked:!v.isChecked,value:v.value}}
                return v
            })
        });

    }

    clickDel(index){
        //this.setState({ this.state.newTodo(index).value:{newTodo.value.splice()};});
        //this.state.newTodo(index).value==null;
        // this.state.newTodo 的第 index个 数值删除即可
        //this.state.newTodo(index).value.splice();
        var newTodoArr=this.state.newTodo;
        this.setState({
            newTodo:newTodoArr.map(function(v,i){
                if(i==index){return {v:null}}
                return v
            })
        });
    }
    render(){
        return(
            <div id="all">
                <Header handleNewTodoKeyDown={this.handleNewTodoKeyDown.bind(this)} inputChang={this.inputChang.bind(this)} inputAdd={this.inputAdd.bind(this)}></Header>
                <Content toggleAll={this.toggleAll.bind(this)} checkBoxChange={this.checkBoxChange.bind(this)} clickDel={this.clickDel.bind(this)}></Content>
                <Footer toggleUp={this.toggleUp.bind(this)} toggleActive={this.toggleActive.bind(this)} toggleEnd={this.toggleEnd.bind(this)} clearAll={this.clearAll.bind(this)}></Footer>
            </div>
        )
    }
};
render(<Aaa />, document.getElementById('all'));


