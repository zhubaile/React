import React, { Component } from "react";
import { render } from 'react-dom';
//用react 记住一点，管好你的数据
//react 不想jquery要你自己去用$(".input")选择元素后，使用val（）方法赋值
//使用react 只需要定好你的数据，然后模板（render下面的东西）按数据做好逻辑处理就行了。

/**
 *
 * 如下面，要实现在输入框中输入内容，点击添加后在id为contenItems下自动加一行输出内容的功能
 *
 */
class Test extends Component {
    constructor(props) {
        super(props);
        this.inputAdd = this.inputAdd.bind(this);
        //初始化 state
        this.state={
            items:[]
        }
        //this.state.items 为id为contenItems的元素列表下的数据
        //每次点击增加时相等于 拿到input输入框的内容 放到 this.state.items 中
        // 比如 this.state.items 原来有数据 ['a']
        // 现在输入框中输入了字符 hello 。我只需要拿到input输入框中的 hello 吧hello
        //塞入到 数组['a']中 即让 this.state.items == ['a','hello']
        //那么 这个时候 id为contenItems 下的内容就是
        /**
         * <ul>
         *      <li>a</li>
         *      <li>hello</li>
         * </ul>
         *
         */
    };
    inputAdd(){
        this.setState({
            items: [].concat(this.state.items, this.myInput.value)
        });
        // concat 合并数组  [].concat(['a'],'b')  =>  ['a','b']
        //this.state.items里 内容增加  相应的dom也增加
    }
    render() {
        var items = this.state.items;
        return (
            <div>
                <div>
                    <input type="text" name="" ref={(input)=>this.myInput=input}/>
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
render(<Test />, document.getElementById('root'));


