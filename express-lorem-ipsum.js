const express = require('express');
const path = require('path');
const app = express();
var loremIpsum = require('lorem-ipsum')


, output     = loremIpsum({

  count: 3
  ,units: 'paragraphs'
  ,suffix: '<br / >'

});


app.get('/lorem', function (req, res) {

    res.send(output);


});






app.listen(3000, function () {
  console.log('Successfully started express application!')
});
