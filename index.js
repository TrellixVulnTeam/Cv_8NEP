const express = require('express')
const app = express();
const PORT = process.env.PORT || 4000;

// tao may chu
app.listen(PORT, () => {
    console.log('Server is running at port', PORT);
});
// allow access & use of public resources`
app.use(express.static('public'));
// allow ejs syntax: mix view & logic
app.set('view engine', 'ejs');
//use body-parser
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render('about');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/resume', (req, res) => {
    res.render('resume');
});
app.get('/works', (req, res) => {
    res.render('works');
});
app.get('/interests', (req, res) => {
    res.render('interests');
});


