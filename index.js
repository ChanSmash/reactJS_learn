import React from "react";
import ReactDOM from "react-dom/client"

//normal JS method to create an element and publising into an DOM

/*
const heading1 = document.createElement('h1');
heading1.innerHTML = "hello world from react but it is from normal JS"

const root1 = document.getElementById('root');
root1.appendChild(heading1)
*/


// In the below code we are doing same operation but with react code
// const heading1 = React.createElement('h1', {id:'headingTag'}, 'hello World from React Framework!');

// console.log("heading1", heading1)  //it returns an object not an h1 tag with value

// 1. In the react above create element there is one arg is empty is nothing but for attr like Id, class 

// const root1 = ReactDOM.createRoot(document.getElementById('root'));

// root1.render(heading1);

/*root1. render is responsible for converting the heading1 object into the heading tag as tag element 
//and publising in the DOM*/
// console.log('root1', root1)


// TASK:1 :-
    /*Achieve this is on in JS file*/
   /* < div  id="parent">
        <div id="child1">
            <h1 id="head1_c1">iam from h1 child1 tag</h1>
            <h2 id="head2_c1">iam from h2 child1 tag</h2>
        </div>
        <div id="child2">
            <h1 id="head1_c2">iam from h1 child2 tag</h1>
            <h2 id="head2_c2">iam from h2 child2 tag</h2>
         </div>
    </div>
    */

const heading1 = React.createElement(
    'div',
    { id: 'parent' },
    [
        React.createElement(
            'div',
            { id: 'child1' },
            [
                React.createElement('h1', { id: 'head1_c1' }, 'Iam from h1 child1 tag'),
                React.createElement('h2', {id:'head1_c2'}, 'Iam from h2 child1 tag')
            ]
        ),
        React.createElement(
            'div',
            { id: 'child2' },
            [
                React.createElement('h1', { id: 'head2_c1' }, 'Iam from h1 child2 tag'),
                React.createElement('h2', {id:'head2_c2'}, 'Iam from h2 child2 tag')
            ]
        )
    ]
    
)

console.log("Nested heading1 val,", heading1)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading1)