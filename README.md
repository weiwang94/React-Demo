### React 的基本知识
### 官网的介绍：
- Declarative
- Component-Based
- Learn Once, Write Anywhere

[百度快照](http://cache.baiducontent.com/c?m=9d78d513d98316fc09ab837e7c4284374e04dd3e65c3975521dbc90ed5264c40347bfeef747347548e98257001d81c07acaa7122200357ecc6d5c81d8eead435&p=84769a47838557ff57ee957c5752c9&newp=ce72c64ad48a5dff57ee957c1e4796231610db2151d7db116b82c825d7331b001c3bbfb423241200d3ce7b6301ac4e5aeffa3171320625a3dda5c91d9fb4c57479c13b&user=baidu&fm=sc&query=react+facebook&qid=d0ac1b330003151e&p1=1)

*翻译过来就是： 声明式 组件化 高效 灵活*

> 摘自阮一峰
- ReactDOM.render 是 React 的最基本方法
- jsx 语法 允许 HTML 与 JavaScript 的混写
- React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。
- 组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。
只有当它插入文档以后，才会变成真实的 DOM 。
根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，
反映在真实 DOM上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。



## 做了 4 个 React demo

1.  message 练习
	- jsx语法；
	- 使用 this.props 获取组件的属性
2. timer 练习
	- this.state 改变显示时间的状态，来决定是否显示时间
	- 组件的生命周期分成三个状态：
		- Mounting：已插入真实 DOM
		- Updating：正在被重新渲染
		- Unmounting：已移出真实 DOM
	- 用到的两个函数
		- componentWillMount()
		- componentDidMount()
3. todo 练习
	- 深化运用 this.state
	- 在 state 中存 一个数组   来存储输入的所有 todo
	- 在 state 中存 一个字符串 来存储存正在输入的值
	- 添加 onChange 和 onClick 事件用来交互
4. editor 练习
	- 用到 ref 属性，从组件获取真实 DOM 的节点
	- 引入 remarkable 库，转换 markdown 内容为 html标签
	- dangerouslySetInnerHTML 来插入 html标签
