const Router = require('express');
const router = new Router();
const userRouter = require('./user.router');
const postRouter = require('./post.router');

router.use('/user', userRouter);
router.use('/post', postRouter);

module.exports = router;