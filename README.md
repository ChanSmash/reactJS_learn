# React basics has been completed

# how to create a element and publishing in JS using react methods

# we learned about how to create a nested elements


# Summarizing syntax

1. React.CreateElement('h1',{}, 'hello world!')
2. ReactDOM.createRoot(document.getElementById('root'));
3. root.render()


# Nested sytanx for creating an Element

1.  React.CreateElement(
    'h1',
    {id:'heading', class:'mainHeadingtag'}, 
    [React.createElement('div', {id:'parent'}, "hello parent")
    React.createElement('div', {id:'parent'}, "hello parent")]
    )

    // so if we create an nested element we need to use [] square brackets like an array
