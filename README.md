 # React JS Learnings 💫
 1. React basics has been completed
 2.  how to create a element and publishing in JS using react methods
 3. we learned about how to create a nested elements

# Summarizing Syntax we have used on inception1

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

 - so if we create an nested element we need to use [] square brackets like an array

 # PARCEL bundler advantages:

 - Why we are using parcel bundler?

 1. It is uses HMR - hot module replacement (it keep on listening the all the files based on changes)
 2. Dev Build.
 3. Local server
 4. File watching algorithm - written in C++
 5. Faster build (Because it using caching mechanism using parcel cache).
 6. Image optimization.
 7. Minification our files
 8. Bundling our Js file
 9. Compressing the file
 10. consistent hashing
 11. Tree shaking
 12. Code spliting
 13. Differential Bundling
 14. Diagonostic
 15. Error handling
 16. HTTPS
 

 # Build command for dev and production env

 -- npx parcel index.html ==> dev
 -- npx parcel build index.html ==> prod (ready for deploy)
