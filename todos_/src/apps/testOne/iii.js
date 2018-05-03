/*
import React, { Component } from "react";
import { render } from 'react-dom';
//用react 记住一点，管好你的数据
//react 不想jquery要你自己去用$(".input")选择元素后，使用val（）方法赋值
//使用react 只需要定好你的数据，然后模板（render下面的东西）按数据做好逻辑处理就行了。

/!**
 *
 * 如下面，要实现在输入框中输入内容，点击添加后在id为contenItems下自动加一行输出内容的功能
 *
 *!/
class Test extends Component {
    constructor(props) {
        super(props);
        //初始化 state
        this.state={
            items:[],
            defalutValue: null
        }
        this.inputAdd = this.inputAdd.bind(this)
        this.inputChange=this.inputChange.bind(this)
        this.handleNewTodoKeyDown=this.handleNewTodoKeyDown.bind(this)
        //this.state.items 为id为contenItems的元素列表下的数据
        //每次点击增加时相等于 拿到input输入框的内容 放到 this.state.items 中
        // 比如 this.state.items 原来有数据 ['a']
        // 现在输入框中输入了字符 hello 。我只需要拿到input输入框中的 hello 吧hello
        //塞入到 数组['a']中 即让 this.state.items == ['a','hello']
        //那么 这个时候 id为contenItems 下的内容就是
        /!**
         * <ul>
         *      <li>a</li>
         *      <li>hello</li>
         * </ul>
         *
         *!/
    };
    inputChange(){
        this.setState({
            defalutValue:this.myInput.value
        });
    }
    inputAdd(){
        this.setState({
            items: [].concat(this.state.items, this.myInput.value),
            defalutValue:""
        })
        // concat 合并数组  [].concat(['a'],'b')  =>  ['a','b']
        //this.state.items里 内容增加  相应的dom也增加
    }
    handleNewTodoKeyDown(event) {
        //先进入到这里了
        if (event.keyCode == 13) {
            this.inputAdd()
        }
        return true
    }
    render() {
        var items = this.state.items;
        return (
            <div>
                <div>
                    <input type="text" name="" ref={(input)=>this.myInput=input} onKeyUp={ this.handleNewTodoKeyDown }
                           value={this.state.defalutValue} onChange={this.inputChange}/>
                    <button type="button" onClick={ this.inputAdd}>增加一条</button>
                </div>
                <div id="contenItems">
                    <ul>
                        {
                            items.length?items.map((value)=>{
                                return  <li>{ value}</li>
                            }):null
                        }
                    </ul>
                </div>
            </div>
        )
    }
};
render(<Test />, document.getElementById('root'));*/

function one(){
    var items="asdzbzzzlasdjjasdzzzadaz";
    var som={};
    for(var i=0; i<items.length;i++){
        if(!som[items.charAt(i)]){
            som[items.charAt(i)]=1
        }else{
            som[items.charAt(i)]++
        }
    }
    var number='';//定义出现最多次的字母
    var num=0;//定义出现最多字母的次数
    for(var i in som)//用i来遍历obj数组，循环
    {
        if(som[i]>num){
            num=som[i];
            number=i;
        }
    }
    alert("最终出现最多的字母是："+number+",次数为："+num);
}
/*
function one(){
    var sum="asdzbzzzlasdjjasdzzzadaz",
        obj=[];
    for(var i=0;i<sum.length;i++){
        if(!obj[sum.charAt(i)]){
            obj[sum.charAt(i)]=1
        }else{
            obj[sum.charAt(i)]++
        }
    }
    var number="", num=0;
    for(var i in obj){
        if(obj[i]>num){
            num=obj[i];
            number=i;
        }
    }
    alert("次数为："+num+"字母为:"+number);
}*/
