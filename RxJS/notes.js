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










// left off at completion of Understanding Props, section 3, lecture 12