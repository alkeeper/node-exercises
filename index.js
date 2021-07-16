/**
 * 
 */

const express = require('express');
const exphbs = require('express-handlebars');
const indexRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const coursesRoutes = require('./routes/courses');
const addRoutes = require('./routes/add');
// const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'tpl');
app.use(express.static('assets'));
app.use(express.urlencoded({extended: true}));

app.use('/', indexRoutes);
app.use('/about', aboutRoutes);
app.use('/courses', coursesRoutes);
app.use('/add', addRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})