import React, {Componetn}  from "react";

export default class Content extends Component {
    constructor(props) {
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

    clearAll(){
        var newTodoArr=this.state.newTodo;
        this.setState({
            newTodo:newTodoArr.map(function(v,i){
                if(v.isChecked==true){return {v:null}}
                return v
            })
        });
    }
    render(){
        var newTodo = this.state.newTodo;
        return(
            <div className="center">
                {
                    this.state.isCheckedAll?
                        (<input className="center-all" type="checkbox" onChange={ (v)=>this.toggleAll(v) } checked/>)
                        :
                        (<input className="center-all" type="checkbox" onChange={(v)=> this.toggleAll(v) }/>)
                }
                <ul>
                    {
                        newTodo.length ? newTodo.map((value,index)=>{
                            //这里还有一个 index 是索引
                            // 模板里面写判断。所有判断可以这里写。
                            let returnDom=(
                                <div>
                                    <div>
                                        <li>
                                            {
                                                value.isChecked ?
                                                    (<input type="checkbox" className="toggle" checked onChange={ (e)=>this.checkBoxChange(e,index) }/>)
                                                    :
                                                    (<input type="checkbox" className="toggle" onChange={ (e)=>this.checkBoxChange(e,index) }/>)
                                            }
                                            <label className={value.isChecked?"error":""}>{ value.value }</label>
                                            <button className="destroy" onClick={ () => { this.clickDel(index)}}>×</button>
                                        </li>
                                    </div>
                                </div>
                            );
                            if (!value.value)return null;
                            if(this.state.status=="up"){
                                return returnDom
                            }else if(this.state.status=="active"){
                                if(value.isChecked==false){
                                    return returnDom
                                }
                            }else if( this.state.status=="end"){
                                if(value.isChecked==true){
                                    return returnDom
                                }
                            }
                        }) : null
                    }
                </ul>
            </div>
        );
    }
};