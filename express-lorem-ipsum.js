const express = require('express');
const path = require('path');
const app = express();
var loremIpsum = require('lorem-ipsum')







app.get('/lorem/:count', function (req, res) {

  var output = loremIpsum({

    count: req.params.count,
    units: 'paragraphs',
    suffix: '<br / >'

  });

  res.send(output)

});




app.listen(3000, function () {
  console.log('Successfully started express application!')
});
