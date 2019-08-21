This project was created using [NPX](https://www.npmjs.com/package/npx) 

# Project Setup

After installing [NPX](https://www.npmjs.com/package/npx), open your terminal and type **npx creat-react-app react-life-cycle-hooks** to create your project in React. 
It will take few seconds to install require dependencies for your project setup.


# Project Lookup

Once it's done head towards your **react-life-cycle-hooks -> public -> index.html**. This is your main `(only)` HTML file in your project, where you can see **<div id="root"></div>** the root element.

Make required changes in your index and app js files to setup your own project. Once it's done try creating few more **Class-Based** Components in the same root level to know more in detail about **React Life Cycle Hooks**

# React Life Cycle Hooks

Constructor<br/>
Mounting<br/>
Updating<br/>
Unmounting<br/>

# Constructor

This is the first thing that get executed for a component and here we can setup our initial `state` of the component. Dont make any Api requests or setState in this

# Mounting

Mounting will be a process and executes once the components gets `loaded/reloaded` 

#### componentWillMount

This will sit between constructor & render() and executes just before we render our elements into DOM. Dont make any Api requests as still our DOM doesn't get fit yet. Used to make any changes to initla state

#### Render
This will make our DOM creation and displays the view that actually what we coded for

#### componentDidMount

This will execute right after render does executed completely with child components and actually this could be the ideal place to make api requests or to setState for our component

# Updating

Updating will be a process once the components gets `updated` i.e.. it will not work for the first time of page load , it will start working when after page gets loaded and had any changes to it state or props. **Never try to setState in any of the updating process because it leads to infinite rendering and it throws an error if you used so**

#### componentWillReceiveProps(nextProps)

First thing in child components to execute when some thing got updated in Parent Component and it will receive updated props as parameter `nextProps` from parent component. We can make comparision with `this.props` & `nextProps`

#### shouldComponentUpdate(nextProps, nextState) 

After componentWillReceiveProps() this will get executed and here we have to return `true` or `false` to render our changes into DOM or not. If true render() will does it changes to DOM. If not, render won't make any changes to DOM

#### Render
This will make our DOM updation where it requires and displays the view that actually what we changed for

#### componentDidUpdate(prevProps,prevState)

This will execute after completely rendering our changes to DOM and it holds prev props and state

# UnMounting
Cleaning up and destroying process of component 

#### componentWillUnmount

componentWillUnmount is the last function to be called immediately before the component is removed from the DOM. It is generally used to perform clean-up for any DOM-elements


