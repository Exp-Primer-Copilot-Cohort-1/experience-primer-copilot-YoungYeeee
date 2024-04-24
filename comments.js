// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the comments page
// 4. Create a route for the comments form
// 5. Create a route for the comments form submission
// 6. Create a route for the comments form submission success
// 7. Create a route for the comments form submission error

// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create a route for the home page
app.get('/', (req, res) => {
    res.send('Home Page');
});

// 3. Create a route for the comments page
app.get('/comments', (req, res) => {
    res.send('Comments Page');
});

// 4. Create a route for the comments form
app.get('/comments/form', (req, res) => {
    res.send('Comments Form');
});

// 5. Create a route for the comments form submission
app.post('/comments/form', (req, res) => {
    res.send('Comments Form Submission');
});

// 6. Create a route for the comments form submission success
app.get('/comments/form/success', (req, res) => {
    res.send('Comments Form Submission Success');
});

// 7. Create a route for the comments form submission error
app.get('/comments/form/error', (req, res) => {
    res.send('Comments Form Submission Error');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}
);

// Run the server
// 1. Run the server
// 2. Visit the home page
// 3. Visit the comments page
// 4. Visit the comments form
// 5. Submit the comments form
// 6. Visit the comments form submission success page
// 7. Visit the comments form submission error page


// 1. Run the server
// $ node comments.js
// Server listening on port 3000

// 2. Visit the home page
// http://localhost:3000/
// Home Page

// 3. Visit the comments page
// http://localhost:3000/comments

// 4. Visit the comments form
// http://localhost:3000/comments/form
// Comments Form


