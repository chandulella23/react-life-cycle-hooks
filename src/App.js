import React, { Component } from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import Comp1 from './comp1';
import Comp2 from './comp2'
import { tsConstructorType } from '@babel/types';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      title1 : 'Comp1',
      title2 :'Comp2'
    }
    console.log(`constructor in App, ${document.getElementsByTagName('input')[0]}`)
  }
  componentWillMount() {
    console.log(`componentWillMount in App, ${document.getElementsByTagName('input')[0]}`)
  }
  componentWillReceiveProps(nextProps) {
    console.log(`componentWillReceiveProps in App, ${document.getElementsByTagName('input')[0]}`)
    console.log('componentWillReceiveProps in App', this.props,nextProps)
    if (this.props.title !== nextProps.title) {
      this.setState({title: nextProps.title});
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`shouldComponentUpdate in App, ${document.getElementsByTagName('input')[0]}`)
    console.log('shouldComponentUpdate in App', nextProps,nextState)
    return true;
  }
  render() {
    console.log("render in App")
    return (
      <div>
        {/* <NavLink to="/" ><h1>Home Page</h1></NavLink>
        <NavLink to="/comp1" >Comp1</NavLink>
        <NavLink to="/comp2" >Comp2</NavLink> */}
        <div>
          {/* <Route path="/comp1" exact component={Comp1}></Route>
          <Route path="/comp2" exact component={Comp2}></Route> */}
          <Comp1 title = {this.state.title1}/>
          <Comp2 title = {this.state.title2}/>
        </div>
      </div>

    )
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then( (res)=> {
      console.log("AXIOS - componentDidMount in App",res.data[0]);
      this.setState({title1:res.data[0]['title'],title2:res.data[1]['title']})
    })
    console.log(`componentDidMount in App, ${document.getElementsByTagName('input')[0]}`)
  }
  componentDidUpdate(prevProps,prevState) {
    console.log(`componentDidUpdate in App, ${document.getElementsByTagName('input')[0]}`)
    console.log('componentDidUpdate in App', prevProps,prevState)
}
}

export default App;
