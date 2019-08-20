import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Comp2 extends Component {
    constructor(props) {
        super(props);
        console.log(`constructor in Comp2, ${document.getElementsByTagName('input')[0]}`)
    }
    componentWillMount() {
        console.log(`componentWillMount in Comp2, ${document.getElementsByTagName('input')[0]}`)
    }
    componentWillReceiveProps(nextProps) {
        console.log(`componentWillReceiveProps in Comp2, ${document.getElementsByTagName('input')[0]}`)
        console.log('componentWillReceiveProps in Comp2', this.props,nextProps)
        if (this.props.title !== nextProps.title) {
          this.setState({title: nextProps.title});
        }
      }
      shouldComponentUpdate(nextProps, nextState) {
        console.log(`shouldComponentUpdate in Comp2, ${document.getElementsByTagName('input')[0]}`)
        console.log('shouldComponentUpdate in Comp2', nextProps,nextState)
        return true;
      }
      componentWillUpdate() {
        console.log(`componentWillUpdate in Comp2, ${document.getElementsByTagName('input')[0]}`)
    }
    render() {
        console.log("render in Comp2")
        return (
            <input type="text" value={this.props.title} readOnly></input>
        );
    }
    componentDidUpdate(prevProps,prevState) {
        console.log(`componentDidUpdate in Comp2, ${document.getElementsByTagName('input')[0]}`)
        console.log('componentDidUpdate in Comp2', prevProps,prevState)
    }
    componentDidMount() {
        console.log(`componentDidMount in Comp2, ${document.getElementsByTagName('input')[0]}`)
    }
}

export default Comp2
