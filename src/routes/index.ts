import express from 'express'

const router = express.Router();

/* GET home page. */
router.get(
    '/',
    function(req, res, next) {
      res.render('index', { title: 'Express' });
    });

router.get(
    '/test',
    function(req, res, next) {
      res.send('test page');
    });

router.get(
    '/post',
    function(req, res, next) {
        res.send('post page');
    });

export default router;