import React, { Component } from "react";
import { render } from 'react-dom';

class Test extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            defalutValue: null
        }
        this.inputChange=this.inputChange.bind(this)
        this.inputAdd=this.inputAdd.bind(this)
    };
    inputChange(){
        this.setState({
            defalutValue:this.myInput.value
        })
    }
    inputAdd(){
        this.setState({
            items:[].concat(this.state.items,this.myInput.value),
            defalutValue:""
        })
    }
    render(){
        var items=this.state.items;
        return(
            <div>
                <div>
                    <input type="text" ref={(input)=>this.myInput=input} onChange={this.inputChange} value={this.state.defalutValue}/>
                    <button type="button" onClick={this.inputAdd}>增加</button>
                </div>
                <div>
                    <ul>
                        {
                            items.length?items.map((value)=>{
                                return <li>{value}</li>
                            }):null
                        }
                    </ul>
                </div>
            </div>
        );
    }
};
render(<Test />, document.getElementById('root'));


