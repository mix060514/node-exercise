import express from 'express';

const userRouter = express.Router();

userRouter.get('/:username', (req, res) => {
    const { username } = req.params;
    res.send(`Hello ${username}!`);
})

export default userRouter
