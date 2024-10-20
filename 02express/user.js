const express = require('express');
const router = express.Router();

router.get('/:username', (req, res) => {
    const { username } = req.params;
    res.send(`Hello ${username}!`);
})

module.exports = router
