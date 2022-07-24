const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:movieId', (req, res) => {
  // Add query to get movie details
    const movieId = req.params
    console.log('This is what movieId is:', movieId);

    const queryText = `SELECT "movies"."title","movies"."poster","movies"."description", 
    array_to_string(array_agg(distinct "genres"."name"), ', ') AS "genres" 
    FROM "movies" 
    JOIN "movies_genres" ON "movies_genres"."movie_id" = "movies"."id" 
    JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id" 
    WHERE "movies"."id" = ${movieId.movieId} GROUP BY "movies"."id";`;
    pool.query(queryText)
        .then( result => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('ERROR: GET movie description', error);
            res.sendStatus(500);
        })

});

module.exports = router;