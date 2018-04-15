import { Component } from '../../../../assets/components/routes/index';
import agreement from './agreement.tpl';

export default class home extends Component {

  constructor(prop) {
    super(prop)
    this.render(agreement);

  }

  afterRender() {
    $("#loginBox").next('p.copyright').hide();
  }
}