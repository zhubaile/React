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
        this.tooggle=this.tooggle.bind(this)
    };
    /*合并数组，把input的值给到lable中，然后input的值清空*/
    inputAdd(value) {
        this.setState({
            newTodo: [].concat(this.state.newTodo, {
                isChecked:false,//改成默认不选中
                value: value
            })
        });
    }
    tooggle(status){
        this.setState({
            status:status
        })
    }
    checkked(checkkk){
        this.setState({
            newTodo:checkkk
        })
    }
    render(){
        return(
            <div id="all">
                <Header inputCallback={this.inputAdd}/>
                <Content newTodo={this.state.newTodo} status={this.state.status} inputedback={this.checkked}/>
                <Footer newTodo={this.state.newTodo} inputback={this.tooggle}/>
            </div>
        )
    }
};
render(<Aaa />, document.getElementById('all'));


