var express = require('express');
var router = express.Router();
var webtoon = require('../webtoon.json');


router.get('/', function (req, res, next) {

    res.send(webtoon)
    console.log(req.body.webtoon);



});

router.get('/:id', function (req, res, next) {


    var id = parseInt(req.params.id, 10);
    console.log("dbtoon show id:" + id);
    var toon = webtoon.filter(function (toon) {
        return toon.id === id
    });
    console.log(toon);




    res.send(toon);

});

module.exports = router;