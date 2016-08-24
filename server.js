/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const bodyParser = require('body-parser');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const restful = require('node-restful');
const mongoose = restful.mongoose;
const ajax    = require('superagent');
var ObjectId = mongoose.Schema.Types.ObjectId;

//MongoDb

mongoose.connect('mongodb://admin:admin@ds145325.mlab.com:45325/blog_eval_simplon')

//Express

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Router Api

var blogSchema = restful.model('blog-schema', mongoose.Schema({
  title: String,
  preview: String,
  content: [{tag: String, body: String}],
  comments: [{ body: String, date: Date}],
  createdAt: {type: Date, default: Date.now}
},{collection: 'blogApp'})).methods(['put','get','post','delete']);
blogSchema.register(app,'/api/articles');


//Get /contact and sending file just to test

app.get('/contact',function(req,res) {
  res.sendFile(path.join(__dirname+"/contact.html"))
});

app.post('/admin/edit/:id', function(req, res) {
  console.log(req.body);
  console.log(req.params.id);

  blogSchema.update(
    {_id: req.params.id, "content._id": req.body.element},
    {$set: {"content.$.body": req.body.newText}},
    function(err, numAffected) {
      console.log(err);
      console.log(numAffected);
    }
  );

});
app.post('/admin/add', function(req, res) {
  if(req.body.isPublished !== undefined) {
  }
  var articleToSave = req.body;
  // Referencing the data we want to push
  var  content   = articleToSave.content;
  var  title     = articleToSave.title;
  var  type      = articleToSave.type;
  // Instantiate a new entry
  var newArticle = new blogSchema();

  newArticle.title = title;
  newArticle.content = [];
  content.map(function(e,i){
    newArticle.content.push({
      tag: e.tag,
      body: e.body
    })
  });

  // Save the entry to the data base

  newArticle.save(function(err){
    if (err) throw err;
    else {
      res.sendStatus(200);
    }
  });


});

//express check for any POST request in /contact
//We store the request body in data
//then we invoke ajax (superagent) and post that data
// NOTE: Do not forget to put the EXACT website url as a .post() parameters !
app.post('/contact', function(req, res) {
  var data = req.body;
  ajax
    .post('localhost:3000/articles')
    .send(data)
    .end(function(err,res) {
      if(err || !res.ok) {
        console.log('error');
      } else {
        console.log('sucess')
      }
    })

});

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
