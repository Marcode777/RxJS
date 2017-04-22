// OVERVIEW OF CONCEPTS
// Data flows from the top-down, from the main App.js Component to the other Components
// the data is passed through to the other components in a top-down fashion via props
// State is set via the constructor()super(); function. However the data for this state should be contained in lifecycle methods which fire at a certain point in time, such as componentWillMount(){}
// In order to pass state and data from the outer Components back to the main App.js Component, it must traverse back to the main App.js Component the same way it got there, e.g., if it traversed 2 layers of Components to get to it, it must also traverse the same 2 layers back, if it traversed 3 layers of Components from the main App.js Component, it must also traverse the same 3 layers of Components to get back to the main App.js Component

// JavaScript expressions can be used in the DOM by entering them in curly brackets { }
// If Else statements cannot be used in JSX but conditional or ternary expressions can be used instead, e.g. " condition ? expr1 : expr2  "
// Styling using JSX, React recommends using inline styles, using camelCase, and React automatically renders the value of px on specific elements. A style component is written in object syntax.
// comments in JSX can also be made by starting them with // and placing them inside curly braces with correct spacing e.g., 
//     {
     // this is a comment in JSX
//      }
// the naming convention for html tags are that they are in lower case, and the naming convention for Components are that they start with an uppercase
// lifecycle methods: in any application that uses many components it's very important to free up resources taken by the components when they are destroyed. Lifecycle methods help facilitate this. So if we want to set up a timer whenever a clock is rendered to the DOM, whenever the clock needs to be rendered, we want to set up a timer, this is called mounting; similarly, we want to clear the timer whenever the DOM-produced clock is removed; the React Component needs to be cleared, the memory needs to be free, this is called unmounting. We can declare special methods on the component class to run some code when a component mounts and unmounts. Those methods are: componentDidMount(){}, this tells us when a component has mounted, componentWillUnmount(){}, tells us that a component will unmount.   
// just for carefulness, when we use states in React, we do not modify the state directly. Everytime we update a state, we call the setState, because there are many things that happen in parallel. The only place we should assign state is in the constructor. Also, state updates may be asynchronous, React may batch multiple setStates, which means if we have a lot of setStates happening, React may batch them together into a single update for performance reasons. Note that because this.props and this.state may be updated asynchronously, we should not rely on their values for calculating the next state.
// states and props: the main difference between states and props is that props are immutable, this is why the container component or the parent or the parent class, should always define the state that can be updated and changed, while the child component should only pass the data from the state using props.
// when passing states to props, remember that it is important that the state should start at the main component or container component, to the child components, e.g., if state is started from the child and are used as props, they might not be discovered by components since state should always flow from the main container components or, main components or parent components

// prop validations: property validations are a very useful way to force correct usage of your components; this should help during development to avoid future bugs and also to avoid any problems once our app becomes larger, it also makes code more readable since we can see how each component should be used. This is because components will be composed in various places in our app and we need to understand how each of them can be used, what the mandatory properties are, and what the inputs and outputs are.
// we can also append "isRequired" if we want them to be required, but for the the example below, we'll just have the array and boolean as "isRequired"
// note that the properties are lower-case because as expected, they are properties, also, for the classes, the first letter of the classes are upper case
// an example would be:
//   Content.propTypes= {
//    propArray: React.PropTypes.array.isRequired,
//    propBool: React.PropTypes.bool.isRequired,
//    propFunc: React.PropTypes.func,
//    propNumber: React.PropTypes.number,
//    propString: React.PropTypes.string,
//    propObject: React.PropTypes.object 
//  }  
//
// now to assign default values to these properties for the Content component as a default parameter:
//   Content.defaultProps = {
//    propArray: [1, 2, 3, 4, 5],
//    propBool: true,
//    propFunc: function(e){return e},
//    propNumber: 1,
//    propString: "String Value.....",
//    propObject: {
//      objectName1: "objectValue1",  
//      objectName2: "objectValue2",  
//      objectName3: "objectValue3"  
//      }
//  }
//
//  now to display these on the render:
//    <div>
//      <h3>{this.props.propArray}</h3>
//      <h3>{this.props.propBool ? "true" : "false"}</h3>
//      <h3>{this.props.propFunc(5)}</h3>
//      <h3>{this.props.propNumber}</h3>
//      <h3>{this.props.propString}</h3>
//      <h3>{this.props.propObject.objectName1}</h3>
//      <h3>{this.props.propObject.objectName2}</h3>
//      <h3>{this.props.propObject.objectName3}</h3>
//    </div>
//
//    
//    so these should all be rendered onto the DOM
//    if there are any errors or data missing for the "isRequired" data, it will display on the console

// components API
// remember,we will ultimately pass in a function in the render, because remember that anywhere in React, you cannot update the state in the render function
// also, remember, that since the 0.14 version of React, due to ES6 implementation, when you try to use a function, you have to bind it to a particular class; otherwise when the "this" syntax is accessed, it will return a state of null because nothing is bound to the class; this is why we need to use bind with functions
// we always bind to the class in the constructor because we are using the ES6 version
// learned 3 things in components api so far: 1. how to call a function from a button using onClick in the render method, 2. how to bind class constructors or class parameters using the bind keyword in the constructor, 3. how to setState, which means we can set any number of states and it will get updated and we can append if we want
// note that we can update the state, only when the components are not rendering, so make sure that we abide by this rule, because for example if we try to setState in the render, it will throw an error saying setState cannot be updated during a state transition. So let's make sure that we do not setState during any state transition.
// force update: in some cases we need to force update as in the case of when he have to use a random number, where a Math.random() function is required. This is because the random number will not get updated by itself. There has to be some action or a component or a value that changes in the state that triggers it, if we want to update a component by itself, or without anything getting updated but we want to do it based on our requirements. What we can do is we can tie a function to this random button number, and that will force update the component. So now, when we click the random number button, the random number gets updated, and the power of React is such that the entire page does not need to be re-rendered, but only that particular component. We can also force update any component that we wish to, however, this must be seldom used and used carefully and with caution because if we keep on updating force update in a loop, this means that component will continuously keep on updating, and this can affect performance very much. 
// findDOMNode: this function or method will help us find anything in our DOM and manipulate it. So how do we find it in the React tree? The way we do it is, we have already created the function, the next step is to bind that function, as with the other functions in the constructor. Then import ReactDOM from 'react-dom'; so with this, we can use a function or a method from the react-dom library to find the node. We can do this by defining the following into the findMyDOMNode(){} function as findMyDOMNode(){var myDiv = document.getElementById('myDiv');}   So this will give us the element in JavaScript. Now that we have found the div, all we have to do is make the changes that we want or play around with it by doing something like the following: ReactDOM.findDOMNode(myDiv).style.color = 'red'; This way, we can find any of the DOM Nodes and we can update or play with them just like we do in plain JavaScript. So this is how we can use the React DOM, which is the virtual DOM, and update the contents that can be represented onto the user screen.
// as a review, we learned 3 things here: setState, force update and findDOMNode.

// component life cycles. 
// There are 7 of them, and they are: componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, and componentWillUnmount
// componentWillMount(){} is executed before rendering on both the server and the client
// componentDidMount(){} is executed after the first render, only on the client side, this is where we can put in all of our AJAX requests and our DOM or state updates that should occur. This method is used for integration with JavaScript frameworks and any functions with delayed execution like setTimeOut and setInterval
// componentWillReceiveProps(){} is invoked as soon as the props are updated, it's when it's just about to receive props from the parent, before another render is called. This means that whenever there is an update in our properties, which means the parent changes the content or the content that is passed to the child, the componentWillReceiveProps is invoked. Now, keep in mind that componentWillReceiveProps(){} also receives the new set of props, so we have to make sure that we also pass in the new props as in, componentWillReceiveProps(newProps){}, otherwise, it will cause an arror.
// shouldComponentUpdate(){} should return true or false, this will determine if the component will be updated or not updated, this is set to true by default, but if we're sure that the component does not need to update after the state or the props are updated, we can manually pass in a false and return false. This takes in two parameters, newProps and nextState, as in, shouldComponentUpdate(newProps, nextState){}
// componentWillUpdate(){}, means it's about to be rendered. *A quick clarification is that componentWillMount(){} is for when it's about to be invoked, when rendering is about to be invoked; and componentWillUpdate(){} is for when it's about to be rendered (or just before rendering).* And again, just like componentShouldUpdate(){}, it also expects a newProps and nextState, as in componentWillUpdate(newProps, nextState){}
// componentDidUpdate(){}, in comparison to componentWillUpdate(){}, componentDidUpdate(){}, means it's just after rendering. The two immediately previous lifecycle methods ensure we have control just before and just after rendering happens.
// componentWillUnmount(){}, this is the last one, just like componentWillMount(){} where we get to know when the rendering happens, similarly we need to also know when the component unmounts. This does not accept any parameters. We can't immediately see the unmount, unless we close the application or manually unmount the component. A way we can unmount the component is by placing a setTimeout function over the original index.js such as by placing setTimeout(()=> {ReactDOM.unmountComponentAtNode(document.getElemenyById("root"));}, 5000)

// react forms.
// left off at 3:17
//
//
//
//
//
//



















