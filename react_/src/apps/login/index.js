import React,{Component} from "react";
import { render } from 'react-dom';
import Log from "./js/log";
/**
 * state是React中组件的一个对象.
  React中,更新组件的state,会导致重新渲染用户界面(不要操作DOM).简单来说,就是用户界面会随着state变化而变化.
  State是一个react组件的状态集，是一个组件的UI数据模型，是组件渲染时的数据依据。
  state 修改应该注意 不能直接修改State。
    直接修改state，组件并不会重新重发render。例如：
    // 错误
    this.state.title = 'React';

    // 正确
    this.setState({title: 'React'});

  */
class Test extends Component{
    constructor(props) {
        super(props);
        //初始化 给state赋值
        this.state={
            text:"hello"
        };
        /**此时 this.state.text 的值为 hello
        所以下面的
        <div>{ this.state.text }</div>
        结果为
        <div>hello</div>
        */
       //下面等待10秒后执行
       setTimeout(() => {
           //修改state.text 的值
           this.setState({ text: 'hello react' });
           /**此时 this.state.text 的值为 hello react
            所以下面的
            <div>{ this.state.text }</div>
            结果为
            <div>hello react</div>
            */
           //请结合界面看效果
       }, 10000);
    }
    render(){
        //打印 this.state.text
        console.log(this.state.text);

        return <div>{ this.state.text}</div>
    }

};
render(<Log />, document.getElementById('root'));


