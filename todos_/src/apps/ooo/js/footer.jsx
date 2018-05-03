import React, {Componetn}  from "react";

export default class Footer extends Component {
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
    render(){
        var checkedLength=0;
        this.state.newTodo.map(function(v,i){
            if(v.isChecked==false){
                checkedLength=checkedLength+1
            }
        });
        return(
            <div className="fander">
                <span className="fander-num"><strong>{ checkedLength }</strong>个项目</span>
                <div className="fander-btn">
                    <div className="fander-btn-box">
                        <button className="btn one" onClick={this.toggleUp}>所有</button>
                        <button className="btn two" onClick={this.toggleActive}>未完成</button>
                        <button className="btn three" onClick={this.toggleEnd}>已完成</button>
                    </div>
                </div>
                <div className="fander-end clearfix" onClick={this.clearAll}>清理完成</div>
            </div>
        );
    }
};