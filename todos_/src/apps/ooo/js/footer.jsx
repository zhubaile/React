import React, {Componetn}  from "react";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state={
            newTodo: [
                {
                    isChecked: true,
                    value: "",
                }
            ],
            status:"up"
        }
        this.toggleUp=this.toggleUp.bind(this)
        this.toggleActive=this.toggleActive.bind(this)
        this.toggleEnd=this.toggleEnd.bind(this)
        this.clearAll=this.clearAll.bind(this)
    }
    toggleUp(){
        this.setState({
            status:"up"
        });
        this.props.inputback("up")
    }
    toggleActive(){
        this.setState({
            status:"active"
        });
        this.props.inputback("active")
    }
    toggleEnd(){
        this.setState({
            status:"end"
        });
        this.props.inputback("end")
    }
    static defaultProps={
        inputback:()=>{}
    };
    clearAll(){
        var newTodo=this.props.newTodo;
        this.setState({
            newTodo:newTodo.map(function(v,i){
                if(v.isChecked==true){return {v:null}}
                return v
            })
        });
    }
    render(){
        var checkedLength=0;
        this.props.newTodo.map(function(v,i){
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
                <div className="fander-end clearfix" onClick={this.clearAll.bind(this)}>清理完成</div>
            </div>
        );
    }
};