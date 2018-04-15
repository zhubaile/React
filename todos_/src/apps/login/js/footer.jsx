import React, { Component } from "react";

/*
var app = header || {};
var ESCAPE_KEY = 27;
var ENTER_KEY = 13;
*/
export default class Footer extends Component {
    constructor(props) {
        super(props);
    };
    render() {
      /*  var activeTodoWord = app.Utils.pluralize(this.props.count, 'item');
        var clearButton = null;

        if (this.props.completedCount > 0) {
            clearButton = (
                <button
                    className="clear-completed"
                    onClick={this.props.onClearCompleted}>
                    Clear completed
                </button>
            );
        }
        var nowShowing = this.props.nowShowing;*/
        return (
           /* <footer className="footer">
					<span className="todo-count">
						<strong>{this.props.count}</strong> {activeTodoWord} left
					</span>
                <ul className="filters">
                    <li>
                        <a
                            href="#/"
                            className={classNames({selected: nowShowing === app.ALL_TODOS})}>
                            All
                        </a>
                    </li>
                    {' '}
                    <li>
                        <a
                            href="#/active"
                            className={classNames({selected: nowShowing === app.ACTIVE_TODOS})}>
                            Active
                        </a>
                    </li>
                    {' '}
                    <li>
                        <a
                            href="#/completed"
                            className={classNames({selected: nowShowing === app.COMPLETED_TODOS})}>
                            Completed
                        </a>
                    </li>
                </ul>
/!*                {clearButton}*!/
            </footer>*/
            <div className="fonter">
                <span><strong></strong>个项目</span>
                <ul>
                    <li><a href="#/">全部</a>
                    </li>
                    <li><a href="#/">已完成</a>
                    </li>
                    <li><a href="#/">未完成</a>
                    </li>
                </ul>
            </div>
        );
    };
};
