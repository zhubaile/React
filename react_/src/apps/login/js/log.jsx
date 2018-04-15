import React, { Component } from "react";

class DialogContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>这里是一个页面层</h3>
            </div>
        )
    }
};



export default class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
        this.change = this.change.bind(this);
    }
    change() {
        debugger
        this.setState({ text: this.inputDom.value ? this.inputDom.value : "" })
    }
    render() {
        return (
            <div className="test-box">
                <h3>测试</h3>
                <div>
                    {/* 之前这个地方确实应该是 this.state.text ；但是由于 vaule 直接等于 this.tate.text了。
                    每次input输入内容时，直接改变了 this.state.text 的值（react又是禁止直接改变this.state上面内容的）
                    ，导致input一直无法输入，我中间用个变量过度了下 */}
                    <input type="text" ref={ (input) => this.inputDom = input }/>
                </div>
                <div className="button-box">
                    <button type='button' onClick={ this.change }>显示输入框内容</button>
                </div>
                <div className="body-box">
                    { this.state.text }
                </div>
            </div>
        )
    }
};
