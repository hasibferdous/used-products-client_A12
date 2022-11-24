import './Blogs.css'

const Blogs = () => {

return (

<div className='m-11 px-11 py-11 bg-slate-300'>
<div className='blog mt-5 ms-4'>

<h3><u>Questions & Answers</u></h3>

<h5><b>13.1 What are the different ways to manage a state in a React application?</b></h5>
<p >In React apps, there are some ways to handle the state. Let us briefly explore a few of them in this part.</p>
<p><b>URL:</b> We can use URL to store some data e.g.
The id of the current item, being viewed,Filter parameters,Pagination offset and limit,Sorting data.
Keeping such data in the URL allows users to share deep links with others.</p>
<p><b>Web Storage:</b> The second option is to store the state in the browser via web storage. This is useful when we want to 
persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.</p>
<p><b>Local State:</b> The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.   </p>
<p><b>Lifted State:</b> The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state. </p>
<p><b>Derived State:</b> The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it.  </p>

<h5><b>13.2 How does prototypical inheritance work?</b></h5>
<p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
<p>Syntax:
ChildObject.__proto__ = ParentObject</p>
<p><b>Example</b> In the given example, there are two objects ‘person’ and ‘GFGuser’. The object ‘GFGuser’ inherits the methods and properties of the object ‘person’ and further uses them.</p>
<p >Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class.
Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.</p>

<h5><b>13.3 What is a unit test? Why should we write unit tests?</b></h5>
<p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. 
Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.</p>
<p><b>Why we write unit tests:</b><p>Here are a few benefits to writing unit tests:</p>
<p>1. Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system.</p>
<p>2. Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.</p>
<p>3. It simplifies the debugging process.</p>
<p>4. Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.</p>
<p>5. Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.</p>
<p>6. Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.</p>
<p>7. In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback. </p>
</p>

<h5><b>13.4 React vs. Angular vs. Vue?</b></h5>
<p><table className='b-5'>
  <tr>
    <th>React</th>
    <th>Angular</th>
    <th>Vue</th>
  </tr>
  <tr>
    <td>1. React is a UI library.</td>
    <td>1. Angular is a fully-fledged front-end framework.</td>
    <td>1. Vue.js is a progressive framework.</td>
  </tr>
  <tr>
    <td>2. React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.</td>
    <td>2. Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.</td>
    <td>2. The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages.</td> 
  </tr>
  <tr>
    <td>3. React is one of the most popular JavaScript projects with 160k stars on GitHub. It’s developed and maintained by Facebook.</td>
    <td>3. Angular is developed by Google, but surprisingly it’s not used in some of their flagship products such as Search or Youtube.</td>
    <td>3. Vue has the most stars on GitHub, with 176k stars. The project is developed and led by ex-Googler Evan You.</td>    
  </tr>
  <tr>
    <td>4. The most popular project for JavaScript state management is Redux.</td>
    <td>4. Angular, you can use the NgRx project. It has been inspired by Redux, but it’s specifically created for Angular.</td>
    <td>4. Vuex is the official state management library made specifically for Vue applications.</td> 
  </tr>
</table>
</p>
</div>
</div>
    );
};
export default Blogs;