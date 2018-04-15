module.exports = function () {
  // 比较两个变量是否相等
  Handlebars.registerHelper('eq', function (left, right, options) {
    if (arguments.length !== 3) {
      throw new Error('helper "eq" needs 2 arguments');
    }
    if (left === right) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
  Handlebars.registerHelper('ifelse', function (left, options) {

    if (left === 'true') {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
  // 比较第一个变量是否大于第二个
  Handlebars.registerHelper('gt', function (left, right, options) {
    if (arguments.length !== 3) {
      throw new Error('helper "gt" needs 2 arguments');
    }
    if (left > right) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  // 比较第一个变量是否大于等于第二个
  Handlebars.registerHelper('gte', function (left, right, options) {
    if (arguments.length !== 3) {
      throw new Error('helper "gte" needs 2 arguments');
    }
    if (left >= right) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });


  // 比较第一个变量是否小于第二个
  Handlebars.registerHelper('lt', function (left, right, options) {
    if (arguments.length !== 3) {
      throw new Error('helper "lt" needs 2 arguments');
    }
    if (left < right) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  // 比较第一个变量是否小于等于第二个
  Handlebars.registerHelper('lte', function (left, right, options) {
    if (arguments.length !== 3) {
      throw new Error('helper "lte" needs 2 arguments');
    }
    if (left <= right) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  // 判断一个整数是否为奇数
  Handlebars.registerHelper('even', function (num, options) {
    if (arguments.length !== 2) {
      throw new Error('helper "even" needs 1 argumentx');
    }
    if (num % 2 === 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });


  // 判断一个整数是否为偶数
  Handlebars.registerHelper('odd', function (num, options) {
    if (arguments.length !== 2) {
      throw new Error('helper "odd" needs 1 argumentx');
    }
    if (num % 2 === 1) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });


  /**
   * 判断一个整数是否为制定数字的整数倍
   * @param num {number} 需要判断的数字
   * @param base {number} 被比较的因子
   **/
  Handlebars.registerHelper('multiple', function (num, base, options) {
    if (arguments.length !== 3) {
      throw new Error('helper "multiple" needs 1 argumentx');
    }
    if (num % base === 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
}
