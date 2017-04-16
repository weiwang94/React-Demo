import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Message from '../message/message'
import Timer from '../timer/timer'
import TodoApp from '../todo/todo'
import MarkdownEditor from '../editor/editor'


// 程序的主入口
// class 是 es6 的语法
class App extends Component {
    // constructor 是一个特殊的函数，相当于构造函数
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true,
    }
  }

  render() {
    // 用一个变量来决定是否显示 timer 组件
    var timer = this.state.showTimer ? <Timer /> : null
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/app/App.js</code> and reload.
        </p>
        <Message name='sahala' />
        <button onClick={this.handleToggleTimer}>开关 timer </button>
        {timer}
        <TodoApp />
        <MarkdownEditor />
      </div>
    )
    // *** 需要注意的是, 组件必须 /> 结尾, 规定
  }

  handleToggleTimer = (e) => {
    // console.log('handleToggleTimer', this.state.showTimer)
    var show = !this.state.showTimer
    this.setState({
        showTimer: show
    })
  }
}

export default App;
