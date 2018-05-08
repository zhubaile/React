import React, {Componetn}  from "react";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.toggle=this.toggle.bind(this)
        this.clearAll=this.clearAll.bind(this)
    }
    static defaultProps = {
        inputback: () => { },
        clearAllItems: () => { }
    };
    toggle(value){
        this.props.inputback(value)
    }  
    clearAll(){
        this.props.clearAllItems()
    }
    render(){
        return(
            <div className="fander">
                <span className="fander-num"><strong>{ this.props.num }</strong>个项目</span>
                <div className="fander-btn">
                    <div className="fander-btn-box">
                        <button className="btn one" onClick={() => {this.toggle('up')}}>所有</button>
                        <button className="btn two" onClick={ () => { this.toggle('active') } }>未完成</button>
                        <button className="btn three" onClick={ () => { this.toggle('end') } }>已完成</button>
                    </div>
                </div>
                <div className="fander-end clearfix" onClick={this.clearAll.bind(this)}>清理完成</div>
            </div>
        );
    }
};