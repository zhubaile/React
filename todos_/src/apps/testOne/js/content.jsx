import React, { Componetn } from "react";
import Footer from "./footer";
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 列表数据
      newTodo: [],
      status: "up",
      isCheckedAll: false
    }
    this.toggleAll = this.toggleAll.bind(this)
    this.checkBoxChange = this.checkBoxChange.bind(this)
    this.clickDel = this.clickDel.bind(this)
    this.clearAllItems = this.clearAllItems.bind(this)
    this.inputback = this.inputback.bind(this)
  }
  //对外提供
  push(value) {
    // 列表里面添加一条
    this.setState({
      newTodo: [].concat(this.state.newTodo, {
        isChecked: false,
        value: value
      })
    });
  }
  //全选方法
  toggleAll(){
    let { newTodo, isCheckedAll} = this.state;
    this.setState({
      newTodo: newTodo.map((value) => {
        return {
          isChecked: !isCheckedAll,
          value: value.value
        }
      }),
      isCheckedAll: !isCheckedAll
    });
  }
  //一列状态改变方法
  checkBoxChange(e, index){
    let { newTodo} = this.state; 
    this.setState({
      newTodo: newTodo.map(function (v, i) {
        if (i == index) { return { isChecked: !v.isChecked, value: v.value } }
        return v
      })
    });
  }
  //删除一列方法
  clickDel(){
    var newTodoArr = this.state.newTodo;
    this.setState({
      newTodo: newTodoArr.map(function (v, i) {
        if (i != index) return v        
      })
    });
  }
  //获取 li dom 方法
  getItemDom(value, index){
    const { status}=this.state;
    const returnDom = (
      <div>
        <div>
          <li>
            {
              value.isChecked ?
                (<input type="checkbox" className="toggle" checked onChange={ (e) => this.checkBoxChange(e, index) } />)
                :
                (<input type="checkbox" className="toggle" onChange={ (e) => this.checkBoxChange(e, index) } />)
            }
            <label className={ value.isChecked ? "error" : "" }>{ value.value }</label>
            <button className="destroy" onClick={ () => { this.clickDel(index) } }>×</button>
          </li>
        </div>
      </div>
    );
    if (!value.value) return null;
    if (status == "up") {
      return returnDom
    } else if (status == "active") {
      if (value.isChecked == false) {
        return returnDom
      }
    } else if (status == "end") {
      if (value.isChecked == true) {
        return returnDom
      }
    }
    return null;
  }
  //获取num 数量
  getItemNum(){
    const { status, newTodo}=this.state;
    let num=0;
    newTodo.map(function (value, i) {
      if (status == "up") {
        num++;
      } else if (status == "active") {
        if (value.isChecked == false) {
          num++;
        }
      } else if (status == "end") {
        if (value.isChecked == true) {
          num++;
        }
      }
    })
    return num
  }
  inputback(value){
    value&&this.setState({
      status: value
    });
  }
  clearAllItems(){
    this.setState({
      newTodo:[]
    });
  }
  render() {
    let { newTodo, isCheckedAll}=this.state;
    let num=this.getItemNum();
      return (
        <div>
          <div className="center">
            {
              isCheckedAll ?
                (<input className="center-all" type="checkbox" onChange={ (v) => this.toggleAll(v) } checked />)
                :
                (<input className="center-all" type="checkbox" onChange={ (v) => this.toggleAll(v) } />)
            }
            <ul>
              { newTodo.length ? newTodo.map((value, index) => {return this.getItemDom(value, index)}) : null}
            </ul>
          </div>
          <Footer num={ num} inputback={ this.inputback } clearAllItems={this.clearAllItems}/>
        </div>
      )
  }
}
