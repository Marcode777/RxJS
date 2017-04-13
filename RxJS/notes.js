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















// left off at completion of Understanding Props, section 3, lecture 12