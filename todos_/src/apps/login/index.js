import React,{Component} from "react";
import { render } from 'react-dom';
import Header from "./js/header";

class Aaa extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div>
                <Header></Header>
            </div>
        )
    }
};
render(<Aaa />, document.getElementById('all'));


