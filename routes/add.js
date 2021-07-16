const {Router} = require('express');
const router = Router();
const Course = require('../models/course');

router.get('/', (req, res /* , next */) => {
    res.render('add', {
        title: 'Добавить новый курс',
        isAdd: true
    });
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const {title, price, img} = req.body;
    const course = new Course(title, price, img);
    await course.save();
    res.redirect('/courses');
});

module.exports = router;