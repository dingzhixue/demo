var express = require('express')
var app = express()
//使用gzip加速
var compression = require('compression');
app.use(compression());

app.disable('x-powered-by');
var http = require('http').Server(app)
var path = require('path');
app.set('views', path.join(__dirname, '../dist'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../dist')));
app.get('/*', function(req, res, next) {
  res.render('index',{})
})
if (process.env.PORT) {
  console.log('> Listening at ' + process.env.PORT + '\n')
  http.listen(process.env.PORT)
} else {
  http.listen(8888)
  console.log('> Listening at ' + 8888 + '\n')
}
