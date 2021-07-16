const {Router} = require('express');
const router = Router();

router.get('/', (req, res /* , next */) => {
    res.render('courses', {
        title: 'Список курсов',
        isCoursesList: true
    });
});

module.exports = router;