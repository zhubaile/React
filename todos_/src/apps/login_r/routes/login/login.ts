import { Component } from '../../../../assets/components/routes/index';


import index from './index.tpl';

export default class home extends Component {
  constructor(prop) {
    super(prop);
    this.render(index);
  }
  //页面渲染前回调
  beforeRender() {
    return true
  }
  //页面渲染成功后回调
  afterRender() {

    $('#loginBtn').on('click', (e)=>{
      $(e.target).html("登录中...");
    })

  }
}

