# React

## 平时怎样处理组件通信的，讲一下你知道的组件通信方式 组件通信是React开发中的重要话题，主要有以下几种方式

Props传递：通过将数据作为属性传递给子组件，实现父子组件之间的通信。
Context API：React的Context API允许您将数据传递给组件树中所有组件，而不必手动传递props。
状态提升：如果两个组件之间共享状态，可以将该状态提升到它们的最近公共祖先中。
事件总线：使用事件总线库（如EventEmitter）在组件之间发送和接收事件。

## 平时用函数组件多一点还是类组件多一点

在React中，函数组件和类组件都是用来定义UI的组件。函数组件更加简洁，易于理解，而类组件具有更多的生命周期方法和状态管理能力。随着React Hooks的引入，函数组件可以使用状态和其他React功能，因此使用函数组件的情况越来越多。

## 平时使用那些hooks，讲一下它的注意事项

常用的Hooks包括useState、useEffect、useContext、useReducer、useCallback、useMemo、useRef等。使用Hooks时需要注意以下几点：

只能在函数组件顶层或其他自定义Hooks中调用Hook。不能在循环、条件判断或嵌套函数中调用。
Hook的调用顺序必须保持一致，不要在条件语句中调用Hook。

## useMemo和useCallback用过吗，能讲一下吗

useMemo：用于优化性能，它会在依赖项发生变化时重新计算值，并将值缓存起来，只在依赖项变化时重新计算。

useCallback：用于缓存函数实例，依赖项发生变化时，会返回新的函数实例。适用于当函数作为回调传递给子组件时，避免不必要的重新渲染。

## 讲一下类组件的生命周期（你能根据它的执行时机依次说一下它的生命周期吗）

挂载阶段：constructor -> static getDerivedStateFromProps -> render -> componentDidMount

更新阶段：static getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate

卸载阶段：componentWillUnmount

## 在函数组件中如何模拟componentDidMount、componentDidUpdate，componentWillunMount

模拟componentDidMount：使用useEffect Hook，并将依赖项设置为空数组，确保只在组件挂载时执行一次。

模拟componentDidUpdate：使用useEffect Hook，并在依赖项中传入需要监测的状态，以便在状态更新时执行。

模拟componentWillUnmount：在useEffect Hook中返回一个清理函数，用于在组件卸载时执行清理操作。

## 讲一下hooks使用规则

只在函数组件或自定义Hook中调用Hook。

Hook的调用顺序必须保持一致。

只在React函数组件中调用Hook，不要在普通的JavaScript函数中调用Hook。
