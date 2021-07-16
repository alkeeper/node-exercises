/**
 * 
 */

const express = require('express');
const exphbs = require('express-handlebars');
// const path = require('path');
const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'tpl');
app.use(express.static('assets'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res /* , next */) => {
    res.render('index', {
        title: 'Главная страница',
        isHome: true
    });
});
app.get('/about', (req, res /* , next */) => {
    res.render('about', {
        title: 'О проекте',
        isAbout: true
    });
});
app.get('/courses', (req, res /* , next */) => {
    res.render('courses', {
        title: 'Список курсов',
        isCoursesList: true
    });
});
app.get('/add', (req, res /* , next */) => {
    res.render('add', {
        title: 'Добавить новый курс',
        isAdd: true
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})