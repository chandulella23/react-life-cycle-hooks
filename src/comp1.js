import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Comp1 extends Component {
    constructor(props) {
        super(props);
        console.log(`constructor in Comp1, ${document.getElementsByTagName('input')[0]}`)
    }
    componentWillMount() {
        console.log(`componentWillMount in Comp1, ${document.getElementsByTagName('input')[0]}`)
    }
    componentWillReceiveProps(nextProps) {
        console.log(`componentWillReceiveProps in Comp1, ${document.getElementsByTagName('input')[0]}`)
        console.log('componentWillReceiveProps in Comp1', this.props,nextProps)
        if (this.props.title !== nextProps.title) {
          this.setState({title: nextProps.title});
        }
      }
      shouldComponentUpdate(nextProps, nextState) {
        console.log(`shouldComponentUpdate in Comp1, ${document.getElementsByTagName('input')[0]}`)
        console.log('shouldComponentUpdate in Comp1', nextProps,nextState)
        return true;
      }
      componentWillMount() {
        console.log(`componentWillMount in Comp1, ${document.getElementsByTagName('input')[0]}`)
    }
    render() {
        console.log("render in Comp1")
        return (
            <input type="text" value={this.props.title} readOnly></input>
        );
    }
    componentDidUpdate(prevProps,prevState) {
        console.log(`componentDidUpdate in Comp1, ${document.getElementsByTagName('input')[0]}`)
        console.log('componentDidUpdate in Comp1', prevProps,prevState)
    }
    componentDidMount() {
        console.log(`componentDidMount in Comp1, ${document.getElementsByTagName('input')[0]}`)
    }
}

export default Comp1
