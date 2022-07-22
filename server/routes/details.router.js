const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get movie details
    const movieId = req.params
    console.log('This is what movieId is:', movieId);

    const queryText = `SELECT "movies"."description" FROM "movies" WHERE id = $1;`;
    pool.query[queryText, movieId]
        .then( result => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('ERROR: GET movie description', error);
            res.sendStatus(500);
        })

});

module.exports = router;