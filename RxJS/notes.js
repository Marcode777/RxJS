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
// Instead of having it display what we already have in-state, what if we wanted what the user inputs to display? We do that by passing an event. (e) As in, myInputChanged(e){} and e.target.value   Because whenever we pass in an event, we can access it. We store it in a variable called itemValue and place this variable with the key in the key:value pair state, so instead of myInputValue: "Input Changed", we have, myInputValue: itemValue
// first summary at 06:38; first we create a state variable for it, which is our myInputValue, this variable is where store our inputValue, we bound this to the value of the input field, so wherever we have the value, instead of the value, we give the state variable, then, on change of this input, we handle a function, this.myInputChanged(){}, and this function of course is bound as well in the contructor, and in this function, we setState it to the new value by accessing the event.target.value
// what if the input field is in a child component? How can we make updates to the parent so that the contents get updated- which means the <h4> is in the parent and the input field is in the child. So we create a child component for it called myInputComponent. All this component does is have an input. What we can do is pass this as a property from the myInputComponent, as, inputValue={this.state.myInputValue}. Now we can use the inputValue field as a prop passed onto the child where the input value field is, as value={this.props.inputValue}. We then add the onChange as a props as well with the child as, onChange={this.props.myInputChanged}. And on change of this, it will call the parent's myInputChanged, and it in turn, will call the original myInputChanged.  
// So to review above, in the first summary, this is an example of how we can move the fields into separate components and reuse them from one parent component. So let's say we have a master form, or for example a contacts page, with first name, middle name, last name and so on and so forth, we can end up creating different components for them and ultimately join them together. So that was a very basic example of how inputs work. We have still to use them in form, which will be covered next.
// * quick note to self: when passing inputValue={this.state.inputValue} from MyInputComponent down as a prop to its input, if I do <input value={this.props.inputValue} onChange={this.props.onChange}/>, it will actually work just like the top component input, just adding onto the state. But if I do <input value={this.props.myInputValue} onChange={this.props.onChange}/>, it will work as intended, and instead of adding onto the state, it will reset the whole state with the new input, as intended.
// next is how to use inputs in a form
// left off at forms in react part 2, section 3, lecture 17 at 03:23
// next is a form with two inputs
// for example, a form where one input is a checkbox and the other input is a number field; and then how to handle or operate when there is a change in one of the two, so that the values always get updated; and then when we submit the form, we can see what the values are going to be
// so we make a ReservationFormComponent, so let's say we want to invite someone to a party, and we have to check if someone is going and the number of guests that they're bringing in.
// left off at forms part 3 section 3, lecture 18 at 05:20
// very important to go over the concepts from 05:20 - 06:18   "const target = e.target" and "const value = target.type === "checkbox" ? target.checked : target.value;"   This will give us the value of the particular input that has changed, either the checkbox or the particular input field; "const target = e.target" for the input field and "const value = target.type === "checkbox" ? target.checked : target.value" for the checkbox. CLARIFICATION: Actually, const = e.target, I think, will give the event for whichever has changed, either the input field or the checkbox, so it gives the event for BOTH. In other words, "target.type === 'checkbox' ? target.checked : target.value" means that if the target matches a checkbox, then the target will be the value of the checkbox which is either true or false , checked or unchecked, otherwise the target will be the value of the input.
// now all we need to do is set the state accordingly. There is a very awesome way of setting the state, because this is more like a JSON object itself, we pass in the name and the set the value to be value, as in, "this.setState({ [name]: value })"
// So, this is a very good example where we have multiple input fields, which in this case are a checkbox and an input, on a form, and we need to make sure the input changes are correctly updated in the state. With this being said, we can create these as separate components. We can reuse this ReservationComponent anywhere on our website!
// I WILL BE SURE TO REVIEW THIS VERY WELL. finished at 10:31

// reactrouter
// react is mostly a just a view library, however, there are external npm libraries that work with react very well. One of these libraries is react-router.
// to install, on the terminal, run command, npm install --save react-router
// in index.js file, import {Router, Route, Link, browserHistory} from 'react-router';
// the way that we use React Router is, instead of passing the <App/> in index.js, we pass in the router, as in <Router history={browserHistory}> </Router> 
// the way we use React Router is by using a route path. For every route in our application, it will have a route and a path. By default our application is always on default path, which is the slash '/'. And at the start, this should open the {App}
// *****ran into issue with this error: TypeError: Cannot read property 'location' of undefined at new Router* fix was to change react-router version 4.1.1 in package.json to version 3.0.0, as in "^3.0.0"*****
// now, anything that we have under the <App/> component, which means any child of it, because every link in our application will be under the route folder, this means that we will have route, inside the route
// so now just to see that some of it is working, type the following into the browser bar, localhost:3000/home, localhost:3000/about, localhost:3000/contact, localhost:3000/blog and you will see the same things displayed. Now type in some jibberish after the route path, as in, localhost:3000/ayeaha, and you will see an error. This means the router is at least working. Now the reason the same things or more specifically, nothing is being displayed except the homepage is because the routes are children of the router component, while the route path is displaying the home page is displaying the <App/> component. So they are children to the router.
// so now, since the paths are all chilrend of the router, what we do is, in the app.js file, we will use props, as in {this.props.children}. Now the pages should start working, if we goo to the url browser and go localhost:3000/home, localhost:3000/contact, localhost:3000/about, localhost:3000/blog, they will display the corresponding routes and pages.
// however, the <li>s are not links yet. So we'll go to app.js and import {Link} from 'react-router', now just in the <li>s, just like what we had before with router and route path, we can type, Link to "/" whatever we want it to link to=, such as "/home", "/about", "/contact", etc. as in, " <Link to='/home'></Link> " Now the links will link to the appropriate route to display the corresponding pages.
// so far what we have done is, in our index.js instead rendering out app component, we rendered our router, and when we rendered the router, we told it that the default path is the app component, and once we display the app component, if we need to display anything below it, like if we have an application, we usually see a top menu bar, that will be a part of the app.js, and the rest of the content will be in the body below it. Now when we have react home, about, contact and blog, all that can be very easily coded once we have the path worked out. Now if we need to display anything else from them, we need to make sure that the components specified in the routes, such as home, about, contact and blog, should be displayed as {this.props.children}. And finally to make it a link, all we had to was import the link property add the link property tags. 
// reactrouter2 just like we can add styling to any of our components, we can also add styling using the react-router. so let's say if we have an "active" style, which is a property. Let's say we give it a red color, as in,      <li><Link activeStyle={{color: 'red'}} to="/home">Home</Link></li>     so whatever is active, or whatever link belongs to the page we are currently on, we'll see a red color for it. So when we click on an active styled link, it will become red.
// for the child components of blog, what we will do is, just like we have an app, we have blog, we have blog and we'll have a single blog. Let's say we have child components to blog, called blogsingle.js. 
// now, the way we can add a new path, and this is usually the case when we have blogs on our website, what we usually have to do is we have to have a parent to a child relationship, which means from a blog page where display like 10 blogs, and then the user clicks on one of the blogs and they can see the content of that blog. Now the way it usally works is, we'll have an address that ends in blog, and what we'll do is we'll add some more properties to it, such as then adding a '/' and then the blog id or post id, for example '/123', and it should take us to that single blog, for now, doing that in the url address bar will result in an exception because we haven't made it yet, but it will work once we start coding it and adding a route to it.
// so the way that we can add a route to a parent route is definitely by adding another indentation, as in <Route parent> <Route child blogsingle></Route> </Route>   and for the route path, the way we define a parameter or like a small number or like a dynamic id that we can pass in as part of the url is with a colon, as in Route path="/blog/:123" and then postId, which is the name of the parameter if we want to use an id, because that's what will be available to us if we want to use that id in fecthing some data later on.
// now we copy three of the links from index.js, not 4, but 3, because the 4th link would just be the same page we're currently on, and then put them into blog, and then we give their paths the id's such "/blog/123" "/blog/456" "/blog/789" and when clicking on them, the url address bar should display them, this means they're working. Now, if we also want to display the Blog Single content, we use {this.props.children}, and it should start displaying Blog Single's content, because it is a child component of the blog.js file, which we did for their routing in the index.js file.
// in summary, we started from home, then we moved on to creating links for different paths on our webpage, and then we ended up having child components. Of course, we can also dynamically create content too, which means we can also fetch data from a data base, all we have to do is fetch the id from the url as in, /blog/whateverdatabaseidhere, which then will allow us to fetch its contents. This is how we can create our own blog. Completed ReactRouterPart2 Section3 Lecture 20
// in Section 3 Lecture 21, [new] section about installing new react router 4.0. We go over the solution as to why react-router was not working properly ( I already know that my solution was to change the package.json from loading version 4.0.0 to version 3.0.0) Just like we have npm as a package manager, yarn is the other package manager that we have access to. We can install react-router using yarn or npm either way. 
//*The new part is that when we install react-router, we have to do it as npm install react-router-dom --save  now.* We used to import by doing import {Router, Route, Link, hashHistory} from 'react-router'    now we import it this way     import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// we copy the syntax to implement it from the react-router documentation, and afterwrds, we can also add the <App/> component to the index.js




// OVERVIEW SumGame
// We are going to build a game built on ReactJS.
// This game will ask the user for the sum of two numbers. The user will then be given a collection of choices. If the user selects the correct answer, the user will get a success screen. If the user selects the wrong answer, they will get a "wrong" screen and it will ask the user to play again. When they play again, they will be presented with a new question with a new set of numbers.
// Section 4, Lecture 23, setting up the HTML structure
// Section 4, Lecture 24, moving the options to the child component
// Section 4, Lecture 25, adding dynamic behavior to the child
// Section 4, Lecture 26, adding dynamic behavior to new child, how to make it more random and dynamically generated
// Recap so far: We moved riddle object into its own function or method called playGame(){}, where we created or sent the riddle object as an output, we also wrote another implementation which generates a number, we passed in a range between 50, so that our random numbers are always within that range, next we did a sum and make sure our riddle object got updated with the options or rather the properties in the riddle object. The only that remains in this part is generating the resultsArray randomly. And now that we already have field1 and field2, why not update it in the question itself, by doing {this.state.riddle.field1} and {this.state.riddle.field2}, so now, everytime we refresh the page, we should see a new set of random numbers.
// Section 4, Lecture 27, randomizing game logic, making sure the options are randomly generated or shuffled. When generating the randomOptions, it should be closer to the result, so we can use sum as an input. We also need to make sure we return a resultsArray from this function, so let's make sure have an empty array to start with, and we'll go ahead and return that resultsArray, so that we already know what our function needs to do. Now, instead of getting the resultsArray as a static array such as [8, 9, 10, 11], we an do, let resultArray = this.generateRandomOptions(result); the way we think of generating this random number is very easy, we generate a set of four random numbers and we either add or subtract to this sum, depending on the option, so we've already written a randomNumber method which randomizes the number, we'll use this method to generate a flag saying true or false, a 0 or 1, and with that, we can decide which sign it is, a positive or a negative. So the three numbers that get generated randomly, other than the answer, will either have a positive value or negative value, which are higher or lower than the result. Now, how do we generate a random number to be added or removed from this number? And of course it has to be smaller than the result. We do it by doing let numberArray= []; and also let's wite a while loop and make sure we have at least three numbers, as in, while (randomNumberArray.length <=3){ let randomNumber = this.randomNumber()}} *Review concepts from 4:00 to 4:33* *7:00 to 7:11 concept says the line that avoids generating the same random number in the array of a generation* Now, comes the addition and subraction. We need to make sure we have 4 elements out here and we need to make sure we go through this loop 3 times to add and subtract to get a result array. So let's write a for-loop.
// Section 4, Lecture 28, Recap so far: we made the skeleton of the screen, got the numbers randomly, we got the answer total randomly generated, we also had the options randomly generated. Now the next thing to do is, on-click, identify whether or not this is the correct answer. That's where our results-answer field will help us out.
// *review concepts from 04:23 to 04:55*: The way it's working is, in the quiz.js file, in the quiz options,  we call a checkResults, the checkResults(){} method or function is in the parent, when we go to the child quizoptions.js, we will also call another function {this.callParentCheckOptions}, which calls the parent function, so we have a function call, and we make the call out here as callParentCheckOptions(){this.props.checkResults();}, make sure we pass the parentheses here correctly. We make sure we know when to pass in the actual function call, as in checkResults(); or when to just pass in the function name as in, checkResults.
// so now that we have the options, we also have the click working, but it's very difficult to identify which value was clicked, the way we can do it is we can pass in the options in quizoptions.js as in, this.props.checkResults(this.props.option). Now once we have the option value, we knpw that there is a value that is getting passed, however, it's still a bit difficult because the option is getting passed to the parent but the parent is not passing it to the function call. So the way we do this is using es6, as in quiz.js, checkResults={(option) => this.checkResults(option)}
// *key concept* 05:50 to 06:27* now, the task is very easy, all we need to do is compare this options number to our result, which the answer we already have in our result, and we can say if it's the correct answer.
// Section 4, Lecture 29, now it's time to show some kind of UI which is more user friendly and helps us avoid from clicking a button more than once and makes sure the user clicks the "play again" button
// Section 4, Lecture 30, Animations! We can use animate.css as a cdn(which is faster and will not slow the speed of the app), we place this cdn inside the index.html head section of the file, as in, <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"> , we just add the syntax "animated + whatevereffect" as in "animated zoomIn" to whichever className we choose, as in className="fields animated zoomIn"
// This Completes Our Game, which I named SumGame!!!!!!!!!!




// Section 5 Lecture 31, Easy A B C, 
// Designed for 3 purposes, 1. it's easy 2. already did SumGame, so we can use some of the components here 3. it's for learning and doing the work
// We'll have one section for letters, another for images and another for spelling.
// The moment we click "next" a recorded sound is played. The sound was recorded with an iPhone using voice memos. Then the file was moved onto the laptop and uses a service called Audacity, and trimmed them into separate small files, and these files are hosted on a third party client. Similarly, the images are images with the background of transparent, which means they do not have any background, so it's easy and it appears to be a part of the game. All of these images are from the internet as well. And they are uploaded to Imdior, Imdior is a free site that lets us store all our images as a post, and of course we can use the URLs to display on our website. Of course we merged all of that into a small JSON file, that is the data file that we have. 
// The JSON file has a key:value-pairs such for every single letter of the aphabet. These properties, for example are "letter": "A", "image": "http:whateverurladdress", etc. Of course these will be 26 objects, for the 26 letters of the alphabet, which means that we have an array. So this is the alphabet JSON.
// Also the App.css is also shared. In summary, these are the two shared files: the alphabet JSON and the App.css file.
// Section 5 Lecture 32
// Section 5 Lecture 33 left off at 8:51
// Section 5 Lecture 34 left off at 7:43
// Section 5 Lecture 35 left off at 1:01



















