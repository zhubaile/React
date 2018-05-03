import React, {Componetn}  from "react";
import Main from "./little/main.jsx";

export default class Content extends Component {
    constructor(props){
        super(props);

    }
    handlerAllState(event){
        this.props.changeTodoState(null, event.target.checked, true);
    }
    render(){
        return (
            <div className="center">
                <input checked={this.props.isAllChecked} onChange={this.handlerAllState.bind(this)} type="checkbox" className="center-all"/>
                <ul>
                    {this.props.todos.map((todo, index) => {
                        return <Main key={index} {...todo} index={index} {...this.props}/>
                    })}
                </ul>
            </div>

        )
    }
}