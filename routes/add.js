const {Router} = require('express');
const router = Router();

router.get('/', (req, res /* , next */) => {
    res.render('add', {
        title: 'Добавить новый курс',
        isAdd: true
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/courses');
});

module.exports = router;