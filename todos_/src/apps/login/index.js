import React,{Component} from "react";
import { render } from 'react-dom';
import Header from "./js/header";
import Content from "./js/content";
import Footer from "./js/footer";

class Aaa extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        )
    }
};
render(<Aaa />, document.getElementById('all'));


