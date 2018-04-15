import loginForm from "./loginForm.hbs";
import {Route} from '../../../../assets/components/routes/index';
export default class test extends Route{
	render(el:JQuery){
		el.html(loginForm({name:"用户名"}))
	}
}