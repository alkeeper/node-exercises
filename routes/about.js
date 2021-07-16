const {Router} = require('express');
const router = Router();

router.get('/', (req, res /* , next */) => {
    res.render('about', {
        title: 'О проекте',
        isAbout: true
    });
});

module.exports = router;